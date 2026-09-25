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

  const cityCpl=useMemo(
    ()=>Math.max(1,Math.round(selected.baseCpl*CITY_FACTORS[city])),
    [selected,city]
  );

  const estimatedLeads=useMemo(
    ()=>Math.max(1,Math.floor(Number(spend||0)/cityCpl)),
    [spend,cityCpl]
  );

  const sliderPercent=((spend-1000)/(10000-1000))*100;

  return (
    <div className={`heroCalculatorFlip ${planOpen?"isFlipped":""}`}>
      <div className="heroCalculatorInner">
        <div className="heroCalculator heroCalculatorFront simpleLeadCalc">
          <div className="simpleCalcHeader">
            <span className="simpleCalcKicker">Live lead estimator</span>
            <h2>What could your ad spend generate?</h2>
            <p>Pick your trade and metro market. We’ll estimate leads using real Australian CPL benchmarks and 2026 Google auction data.</p>
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
              <span className="cplBadge">Best CPL ≈ $\{cityCpl}</span>
            </div>
            <div className="leadEstimateNumber">
              <strong>{estimatedLeads}</strong>
              <span>leads</span>
            </div>
            <p>
              Based on {selected.label} benchmarks in {city}. Australian optimised benchmark: {selected.range} CPL.
              City adjustment uses 2026 Google Keyword Planner metro auction data. This is an estimate, not a guarantee.
            </p>
          </div>

          <button className="heroCalcCta simpleCalcCta" type="button" onClick={()=>setPlanOpen(true)}>
            Build my lead plan <span>→</span>
          </button>
        </div>

        <div className="heroCalculator heroCalculatorBack">
          <button className="calcBackButton" type="button" onClick={()=>setPlanOpen(false)} aria-label="Back to calculator">←</button>
          <div className="heroCalcTop backTop">
            <div>
              <div className="heroCalcEyebrow">Your plan starts here.</div>
              <h2>Book a 30 minute strategy call.</h2>
              <p>Tell us a little about your business and we’ll map out where the biggest opportunity is.</p>
            </div>
          </div>

          <form className="calculatorLeadForm">
            <label>Full name
              <input type="text" placeholder="Your name"/>
            </label>
            <label>Phone number
              <input type="tel" placeholder="Your phone"/>
            </label>
            <label>Email
              <input type="email" placeholder="you@business.com"/>
            </label>
            <label>Trade / business type
              <select value={trade} onChange={e=>setTrade(e.target.value)}>
                {Object.entries(TRADE_DATA).map(([key,item])=><option key={key} value={key}>{item.label}</option>)}
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
