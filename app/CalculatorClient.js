"use client";

import {useMemo,useState} from "react";

const ESTIMATED_COST_PER_LEAD=80;

export default function CalculatorClient({trades}){
  const [planOpen,setPlanOpen]=useState(false);
  const [spend,setSpend]=useState(2500);

  const estimatedLeads=useMemo(
    ()=>Math.max(1,Math.round(Number(spend||0)/ESTIMATED_COST_PER_LEAD)),
    [spend]
  );

  const sliderPercent=((spend-1000)/(10000-1000))*100;

  return (
    <div className={`heroCalculatorFlip ${planOpen?"isFlipped":""}`}>
      <div className="heroCalculatorInner">
        <div className="heroCalculator heroCalculatorFront simpleLeadCalc">
          <div className="simpleCalcHeader">
            <span className="simpleCalcKicker">Lead estimator</span>
            <h2>See what your ad spend could generate.</h2>
            <p>Choose a monthly ad budget and get a simple lead estimate.</p>
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
            <span className="leadEstimateLabel">Estimated monthly leads</span>
            <div className="leadEstimateNumber">
              <strong>{estimatedLeads}</strong>
              <span>leads</span>
            </div>
            <p>Planning estimate based on an average cost per lead of about $\{ESTIMATED_COST_PER_LEAD}. Actual results vary by trade, location and competition.</p>
          </div>

          <button className="heroCalcCta simpleCalcCta" type="button" onClick={()=>setPlanOpen(true)}>
            Show me how to get there <span>→</span>
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
              <select defaultValue="">
                <option value="" disabled>Select your trade</option>
                {trades.map(([,t])=><option key={t}>{t}</option>)}
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
