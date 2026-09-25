"use client";

import {useMemo,useState} from "react";

const CITY_FACTORS={
  Sydney:1.12,
  Melbourne:1.08,
  Brisbane:1.00,
};

const TRADE_DATA={
  Roofing:{
    label:"Roofing",
    cplLow:100,
    cplHigh:180,
    source:"Australian 2026 trade/home-service benchmarks",
  },
  Plumbing:{
    label:"Plumbing",
    cplLow:60,
    cplHigh:100,
    source:"Australian 2025–2026 trade benchmarks",
  },
  Electrical:{
    label:"Electrical",
    cplLow:70,
    cplHigh:120,
    source:"Australian 2025–2026 trade benchmarks",
  },
  HVAC:{
    label:"HVAC / Aircon",
    cplLow:80,
    cplHigh:150,
    source:"Australian 2025–2026 home-service benchmarks",
  },
  Fencing:{
    label:"Fencing",
    cplLow:80,
    cplHigh:150,
    source:"Australian 2026 trade benchmarks",
  },
  Building:{
    label:"Builder",
    cplLow:120,
    cplHigh:220,
    source:"Australian construction/home-service benchmark range",
  },
  Landscaping:{
    label:"Landscaping",
    cplLow:80,
    cplHigh:140,
    source:"Australian 2025–2026 home-service benchmarks",
  },
};

export default function CalculatorClient({trades}){
  const [planOpen,setPlanOpen]=useState(false);
  const [spend,setSpend]=useState(2500);
  const [trade,setTrade]=useState("Plumbing");
  const [city,setCity]=useState("Brisbane");

  const selected=TRADE_DATA[trade];

  const cityFactor=CITY_FACTORS[city]||1;
  const adjustedLowCpl=Math.round(selected.cplLow*cityFactor);
  const adjustedHighCpl=Math.round(selected.cplHigh*cityFactor);

  const estimatedLeadLow=useMemo(
    ()=>Math.max(1,Math.floor(Number(spend||0)/adjustedHighCpl)),
    [spend,adjustedHighCpl]
  );

  const estimatedLeadHigh=useMemo(
    ()=>Math.max(1,Math.floor(Number(spend||0)/adjustedLowCpl)),
    [spend,adjustedLowCpl]
  );

  const sliderPercent=((spend-1000)/(10000-1000))*100;

  return (
    <div className={`heroCalculatorFlip ${planOpen?"isFlipped":""}`}>
      <div className="heroCalculatorInner">
        <div className="heroCalculator heroCalculatorFront simpleLeadCalc">
          <div className="simpleCalcHeader">
            <span className="simpleCalcKicker">Live lead estimator</span>
            <h2>What could your ad spend generate?</h2>
            <p>Choose your trade, metro market and monthly ad spend to see a conservative indicative range based on published Australian benchmarks.</p>
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
            <small className="cityBenchmarkNote">Metro selection adjusts the benchmark range. It is not a quote or campaign forecast.</small>
          </div>

          <div className="spendControl">
            <div className="spendControlTop">
              <span>Monthly ad spend</span>
              <strong>{`${Number(spend).toLocaleString()}`}</strong>
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
                <span>Estimated CPL range</span>
                <strong>${adjustedLowCpl}–${adjustedHighCpl}</strong>
                <small>{city} · {selected.label}</small>
              </div>
              <div className="leadResultCell leadResultCellMonsta">
                <span>Estimated monthly leads</span>
                <strong>{estimatedLeadLow}–{estimatedLeadHigh}</strong>
                <small>from your selected spend</small>
              </div>
            </div>

            <div className="leadDifferenceCompact">
              <strong>Indicative range only</strong>
              <small>Based on ${Number(spend).toLocaleString()} monthly ad spend</small>
            </div>

            <p className="estimateDisclaimer compactDisclaimer">
              Indicative benchmark estimate only. Actual CPL and lead volume can vary materially by location, service, competition, landing page, tracking and campaign quality.
            </p>

            <details className="calcMethod">
              <summary>How we calculate this</summary>
              <div>
                <p><b>{selected.label} base range:</b> ${selected.cplLow}–${selected.cplHigh} CPL before the metro adjustment.</p>
                <p><b>{city} adjustment:</b> {Math.round((cityFactor-1)*100)}% relative to the Brisbane baseline used in this estimator.</p>
                <p><b>Estimated CPL:</b> ${adjustedLowCpl}–${adjustedHighCpl}.</p>
                <p><b>Estimated leads:</b> spend divided by the adjusted CPL range, rounded down.</p>
                <p><b>Source basis:</b> {selected.source}. Published benchmarks vary considerably, so this calculator intentionally uses broader, conservative ranges rather than a best-case target.</p>
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
