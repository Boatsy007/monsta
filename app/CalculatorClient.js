"use client";

import {useMemo,useState} from "react";

const CITY_FACTORS={
  Sydney:1.046,
  Melbourne:0.851,
  Brisbane:1.103,
};

const TRADE_DATA={
  Roofing:{
    label:"Roofing",
    baseCpl:28,
    range:"$28–$42",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
  Plumbing:{
    label:"Plumbing",
    baseCpl:18,
    range:"$18–$32",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
  Electrical:{
    label:"Electrical",
    baseCpl:22,
    range:"$22–$36",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
  HVAC:{
    label:"HVAC / Aircon",
    baseCpl:25,
    range:"$25–$40",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
  Fencing:{
    label:"Fencing",
    baseCpl:16,
    range:"$16–$28",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
  Building:{
    label:"Builder",
    baseCpl:50,
    range:"$50–$100",
    source:"Optimised Tradies Australian benchmark",
  },
  Landscaping:{
    label:"Landscaping",
    baseCpl:20,
    range:"$20–$32",
    source:"BuzzPilot 2025 optimised Australian campaigns",
  },
};

export default function CalculatorClient({trades}){
  const [planOpen,setPlanOpen]=useState(false);
  const [spend,setSpend]=useState(2500);
  const [trade,setTrade]=useState("Plumbing");
  const [city,setCity]=useState("Brisbane");

  const selected=TRADE_DATA[trade];

  const monstaCpl=selected.baseCpl;
  const marketHighCpl=Number(selected.range.match(/\$(\d+)[^\d]+\$(\d+)/)?.[2]||monstaCpl);

  const estimatedLeads=useMemo(
    ()=>Math.max(1,Math.floor(Number(spend||0)/monstaCpl)),
    [spend,monstaCpl]
  );

  const marketEstimatedLeads=useMemo(
    ()=>Math.max(1,Math.floor(Number(spend||0)/marketHighCpl)),
    [spend,marketHighCpl]
  );

  const leadDifference=Math.max(0,estimatedLeads-marketEstimatedLeads);

  const sliderPercent=((spend-1000)/(10000-1000))*100;

  return (
    <div className={`heroCalculatorFlip ${planOpen?"isFlipped":""}`}>
      <div className="heroCalculatorInner">
        <div className="heroCalculator heroCalculatorFront simpleLeadCalc">
          <div className="simpleCalcHeader">
            <span className="simpleCalcKicker">Live lead estimator</span>
            <h2>What could your ad spend generate?</h2>
            <p>Choose your trade, market and monthly ad spend to see an indicative lead range for your campaign.</p>
          </div>

          <div className="tradePicker" aria-label="Choose your trade">
            {Object.entries(TRADE_DATA).map(([key,item])=>(
              <button
                key={key}
                type="button"
                className={trade===key?"tradeChoice active":"tradeChoice"}
                onClick={()=>setTrade(key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="cityPickerWrap">
            <span className="pickerLabel">Major metro market</span>
            <div className="cityPicker" aria-label="Choose your city">
              {Object.keys(CITY_FACTORS).map(name=>(
                <button
                  key={name}
                  type="button"
                  className={city===name?"cityChoice active":"cityChoice"}
                  onClick={()=>setCity(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="spendControl">
            <div className="spendControlTop">
              <span>Monthly ad spend</span>
              <strong>$\{Number(spend).toLocaleString()}</strong>
            </div>

            <input
              className="spendSlider"
              type="range"
              min="1000"
              max="10000"
              step="250"
              value={spend}
              onChange={e=>setSpend(Number(e.target.value))}
              style={{"--slider-fill":`${sliderPercent}%`}}
              aria-label="Monthly ad spend"
            />

            <div className="spendScale">
              <span>$1k</span>
              <span>$10k</span>
            </div>
          </div>

          <div className="leadEstimate">
            <div className="leadEstimateTopline">
              <span className="leadEstimateLabel">Estimated monthly leads</span>
            </div>

            <div className="leadResultCompare">
              <div className="leadResultCell">
                <span>Market benchmark</span>
                <strong>{marketEstimatedLeads}</strong>
                <small>{marketHighCpl} CPL</small>
              </div>
              <div className="leadResultCell leadResultCellMonsta">
                <span>Monsta target</span>
                <strong>{estimatedLeads}</strong>
                <small>{monstaCpl} CPL</small>
              </div>
            </div>

            <div className="leadDifferenceCompact">
              <strong>+{leadDifference} potential leads</strong>
              <small>from the same $\{Number(spend).toLocaleString()} ad spend</small>
            </div>

            <p className="estimateDisclaimer compactDisclaimer">
              Indicative estimate only. Results vary.
            </p>

            <details className="calcMethod">
              <summary>How we calculate this</summary>
              <div>
                <p><b>{selected.label} benchmark:</b> {selected.range} CPL.</p>
                <p><b>Market comparison:</b> uses the high end of the cited benchmark range.</p>
                <p><b>Monsta target:</b> uses the lowest cited benchmark CPL for the selected trade.</p>
                <p><b>Market:</b> {city} selected for campaign context.</p>
                <p><b>Source reference:</b> {selected.source}.</p>
              </div>
            </details>
          </div>

          <button className="heroCalcCta simpleCalcCta" type="button" onClick={()=>setPlanOpen(true)}>
            Build my lead plan <span>→</span>
          </button>
        </div>

        <div className="heroCalculator heroCalculatorBack">
          <button className="calcBackButton" type="button" onClick={()=>setPlanOpen(false)} aria-label="Back to calculator"><span>←</span> Back to estimate</button>
          <div className="heroCalcTop backTop">
            <div>
              <div className="heroCalcEyebrow">Your plan starts here.</div>
              <h2>Book a 30 minute strategy call.</h2>
              <p>Tell us a little about your business and we’ll map out where the biggest opportunity is.</p>
            </div>
          </div>

          <form className="calculatorLeadForm">
            <label>Full name
              <input type="text" name="name" placeholder="Your name"/>
            </label>

            <label>Phone number
              <input type="tel" name="phone" placeholder="Phone number"/>
            </label>

            <label>Email
              <input type="email" name="email" placeholder="you@business.com"/>
            </label>

            <label>What do you need help with?
              <select name="service" defaultValue="">
                <option value="" disabled>Choose a service</option>
                <option value="Growth Packages">Growth Packages</option>
                <option value="Meta Ads">Meta Ads</option>
                <option value="Google PPC">Google PPC</option>
                <option value="CRM/Lead Nurture Funnels">CRM/Lead Nurture Funnels</option>
                <option value="Website Development">Website Development</option>
                <option value="SEO">SEO</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Appointment Setting">Appointment Setting</option>
              </select>
            </label>

            <button type="button" className="bookCallCta">
              Book a 30 min call <span>→</span>
            </button>
          </form>

          <div className="callTrustRow">
            <span>✓ No obligation</span>
            <span>✓ 30 minutes</span>
            <span>✓ Tailored to your business</span>
          </div>
        </div>
      </div>
    </div>
  );
}
