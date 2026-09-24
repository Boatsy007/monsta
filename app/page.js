"use client";
import {useEffect,useMemo,useState} from "react";
const trades=["Roofing","Plumbing","Electrical","HVAC","Fencing","Building","Landscaping"];
const services=[
["◢","Google Ads","Get found when people are ready to hire."],
["∞","Meta Ads","Create demand in your local area and drive enquiries."],
["▣","Websites","Turn traffic into leads with a high-converting website."],
["▤","Follow Up","Stop leads slipping through the cracks with automated follow-up."],
["⌕","SEO","Build long-term visibility in your service area."]
];
export default function Home(){
 const [job,setJob]=useState(8000),[count,setCount]=useState(4);
 useEffect(()=>{
  const items=[...document.querySelectorAll("[data-reveal]")];
  const observer=new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
    if(entry.isIntersecting) entry.target.classList.add("in-view");
    else entry.target.classList.remove("in-view");
   });
  },{threshold:0.14,rootMargin:"0px 0px -7% 0px"});
  items.forEach((item)=>observer.observe(item));
  return()=>observer.disconnect();
 },[]);
 const total=useMemo(()=>Number(job||0)*Number(count||0),[job,count]);
 return <main>
 <header><a className="logo" href="#"><img src="/monsta-miami-logo.png" alt="Monsta Miami"/></a><nav><a href="#">Home</a><a href="#services">Services</a><a href="#results">Results</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="pinkBtn top" href="#contact">GET MORE JOBS&nbsp; →</a></header>
 <section className="hero reveal-block reveal-fade" data-reveal><div className="heroShade"></div><div className="heroCopy"><h1><span>MORE JOBS.</span><br/>LESS CHASING.</h1><h2>Digital marketing built for tradies.</h2><p>We bring you high-quality leads so you<br/>can get on with what you do best.</p><a className="pinkBtn heroBtn" href="#contact">GET MORE JOBS&nbsp; →</a></div></section>
 <div className="tradebar reveal-block reveal-up" data-reveal>{[["⌂","ROOFING"],["⌕","PLUMBING"],["ϟ","ELECTRICAL"],["❄","HVAC"],["♜","FENCING"],["▦","BUILDING"],["◒","LANDSCAPING"]].map(([i,t])=><div key={t}><b>{i}</b>{t}</div>)}</div>
 <section className="calculator reveal-block reveal-left" data-reveal><div className="calcIntro"><small>HOW MANY MORE JOBS DO YOU WANT?</small><h3>TURN MORE<br/>OPPORTUNITY<br/>INTO <em>REAL WORK.</em></h3><p>See what a few extra jobs could be worth for your business.</p><span className="arrow">↗</span></div><div className="calcBox"><div className="inputs"><label>YOUR TRADE<select><option>Roofing</option>{trades.slice(1).map(t=><option key={t}>{t}</option>)}</select></label><label>AVERAGE JOB VALUE<select value={job} onChange={e=>setJob(e.target.value)}><option value="2000">$2,000</option><option value="5000">$5,000</option><option value="8000">$8,000</option><option value="12000">$12,000</option><option value="20000">$20,000</option></select></label><label>EXTRA JOBS PER MONTH<input type="number" min="1" value={count} onChange={e=>setCount(e.target.value)}/></label></div><div className="calcResult"><div>That’s <strong>${total.toLocaleString()}</strong><span>in potential additional work<br/>for your business each month.</span></div><a href="#contact">SEE HOW WE’D TARGET IT&nbsp; →</a></div></div></section>
 <section id="services" className="services reveal-block reveal-up" data-reveal><div className="sectionTitle"><h3>WE BUILD YOUR <em>JOB PIPELINE.</em></h3><p>The right mix of digital strategies to bring you consistent, high-quality leads.</p><span>DIFFERENT TOOLS.<br/><b>ONE GOAL. MORE WORK.</b></span></div><div className="serviceGrid stagger-children">{services.map(([i,n,d],x)=><article key={n}><b className="serviceIcon">{i}</b><div><h4>{n}</h4><p>{d}</p></div><div className={"servicePhoto p"+x}></div></article>)}</div></section>
 <section id="results" className="results reveal-block reveal-right" data-reveal><div className="resultsHead"><div><h3>REAL TRADIES. <em>REAL RESULTS.</em></h3><p>Results belong here once they are verified. No made-up numbers or fake testimonials.</p></div><a href="#contact">SEE MORE RESULTS&nbsp; →</a></div><div className="resultCards stagger-children"><article><b>↗</b><h4>LEADS</h4><p>Qualified enquiries from people looking for your trade.</p></article><article><b>☎</b><h4>QUOTES</h4><p>Turn enquiries into real quoting opportunities.</p></article><article><b>$</b><h4>JOBS</h4><p>Measure marketing by the work it helps create.</p></article><article className="quote"><b>“</b><p>Your verified client testimonial will sit here.</p><small>REAL CLIENT — REAL RESULT</small></article></div></section>
 <section id="contact" className="leadSection reveal-block reveal-left" data-reveal><div className="phoneVisual"><div className="phone"><small>Incoming Call</small><b>New Lead</b><span>Monsta Miami</span><div>● &nbsp;&nbsp; ●</div></div></div><div className="leadCopy"><small>LET’S SEE IF WE CAN GET YOU</small><h3>MORE JOBS.</h3><p>Tell us your trade and where you work.<br/>We’ll show you exactly what we’d do<br/>to get you more jobs.</p><span className="curve">↘</span></div><form><select defaultValue=""><option value="" disabled>Your Trade</option>{trades.map(t=><option key={t}>{t}</option>)}</select><input placeholder="Suburb / Area"/><input placeholder="Phone Number"/><button type="button">SHOW ME THE OPPORTUNITY&nbsp; →</button><small>▣ No spam. No obligation.</small></form></section>
 <section id="about" className="process reveal-block reveal-up" data-reveal><small>OUR PROCESS</small><h3>SIMPLE. PROVEN. BUILT FOR TRADIES.</h3><div>{[["▤","1. ENQUIRY","Tell us about your trade and where you work."],["▧","2. PLAN","We show you the best strategy for your area."],["➤","3. LAUNCH","We set everything up and get it live."],["▥","4. MORE JOBS","You get consistent, high-quality enquiries."]].map(([i,n,d])=><article key={n}><b>{i}</b><h4>{n}</h4><p>{d}</p></article>)}</div></section>
 <section className="finalCta reveal-block reveal-fade" data-reveal><div className="roof"></div><div><small>READY TO GET STARTED?</small><h3>MORE JOBS<br/>ARE OUT THERE.</h3><p>Let’s get you in front of the right customers<br/>and turn more enquiries into real work.</p><a className="pinkBtn" href="#contact">GET MORE JOBS&nbsp; →</a></div></section>
 </main>
}