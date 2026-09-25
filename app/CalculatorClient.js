"use client";

import {useMemo,useState} from "react";

export default function CalculatorClient({trades}){
  const [planOpen,setPlanOpen]=useState(false);
  const [job,setJob]=useState(8000);
  const [spend,setSpend]=useState(2500);
  const [closeRate,setCloseRate]=useState(25);

  const breakEvenJobs=useMemo(
    ()=>Math.max(1,Math.ceil(Number(spend||0)/Math.max(1,Number(job||0)))),
    [spend,job]
  );
  const leadsNeeded=useMemo(
    ()=>Math.max(1,Math.ceil(breakEvenJobs/(Math.max(1,Number(closeRate||0))/100))),
    [breakEvenJobs,closeRate]
  );

  return (
    <div className={`heroCalculatorFlip ${planOpen?"isFlipped":""}`}>
      <div className="heroCalculatorInner">
        <div className="heroCalculator heroCalculatorFront">
          <div className="heroCalcTop">
            <div>
              <div className="heroCalcEyebrow">Make the spend make sense.</div>
              <h2>What does your marketing need to return?</h2>
              <p>See what your investment needs to generate to pay for itself.</p>
            </div>
            <span className="heroCalcIcon">↗</span>
          </div>

          <div className="heroCalcFields heroCalcFieldsThree">
            <label>Monthly marketing investment
              <select value={spend} onChange={e=>setSpend(e.target.value)}>
                <option value="1500">$1,500</option>
                <option value="2500">$2,500</option>
                <option value="4000">$4,000</option>
                <option value="6000">$6,000</option>
                <option value="10000">$10,000</option>
              </select>
            </label>
            <label>Average job value
              <select value={job} onChange={e=>setJob(e.target.value)}>
                <option value="1000">$1,000</option>
                <option value="2500">$2,500</option>
                <option value="5000">$5,000</option>
                <option value="8000">$8,000</option>
                <option value="12000">$12,000</option>
                <option value="20000">$20,000</option>
              </select>
            </label>
            <label>Your lead-to-job close rate
              <select value={closeRate} onChange={e=>setCloseRate(e.target.value)}>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="40">40%</option>
                <option value="50">50%</option>
              </select>
            </label>
          </div>

          <div className="breakEvenTarget">
            <span className="breakEvenLabel">Your break-even target</span>
            <div className="breakEvenPrimary">
              <strong>{breakEvenJobs}</strong>
              <span>{breakEvenJobs===1?"booked job":"booked jobs"}</span>
            </div>
            <div className="breakEvenSecondary">
              or approximately <b>{leadsNeeded} {leadsNeeded===1?"qualified lead":"qualified leads"}</b>
            </div>
            <p>Based on a ${Number(spend).toLocaleString()} investment, ${Number(job).toLocaleString()} average job and {closeRate}% close rate.</p>
          </div>

          <div className="heroPlan">
            <span className="heroPlanLabel">Your plan includes</span>
            <div className="heroPlanColumns">
              <div><b>Acquire</b><span>Google + Meta</span></div>
              <div><b>Convert</b><span>Landing pages + tracking</span></div>
              <div><b>Follow up</b><span>Automation + optimisation</span></div>
            </div>
          </div>

          <button className="heroCalcCta" type="button" onClick={()=>setPlanOpen(true)}>
            Build my plan <span>→</span>
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
