"use client";

import {useEffect,useState} from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

const benefits=[
  ["01","Practical lessons","Straightforward education on Google Ads, Meta, websites, SEO, follow-up and growth."],
  ["02","DIY tools","Calculators, checklists and templates you can actually use in your business."],
  ["03","Built for tradies","No agency jargon. Everything is designed around leads, quotes and booked work."]
];

const topics=["Google Ads","Meta Ads","Websites","SEO","Lead Follow-Up","Sales & Growth"];

export default function UniversityClient(){
  const [unlocked,setUnlocked]=useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

  useEffect(()=>{
    try{
      setUnlocked(window.localStorage.getItem("monsta-university-access")==="1");
    }catch{}
  },[]);

  const enter=(e)=>{
    e.preventDefault();
    if(!name.trim() || !email.trim()) return;
    try{window.localStorage.setItem("monsta-university-access","1");}catch{}
    setUnlocked(true);
  };

  return <>
    <SiteHeader/>
    <main id="top" className="site-main universityLanding">
      {!unlocked ? (
        <>
          <section className="universityGateHero">
            <div className="universityGateGlow"></div>
            <div className="universityGateShell">
              <div className="universityGateCopy">
                <div className="universityBadge"><span>MU</span> Monsta University</div>
                <div className="eyebrow">100% free for tradies</div>
                <h1>Learn how to get<br/><span>more jobs online.</span></h1>
                <p>Simple marketing education for tradies who want to understand what actually drives leads, quotes and booked work.</p>

                <div className="universityBenefitStrip">
                  <span>✓ Free access</span>
                  <span>✓ No fluff</span>
                  <span>✓ Built for Australian tradies</span>
                </div>
              </div>

              <div className="universitySignupCard">
                <div className="universitySignupLabel">Free access</div>
                <h2>Enter Monsta University</h2>
                <p>Just your name and email. Get instant access to the learning hub.</p>

                <form onSubmit={enter} className="universitySignupForm">
                  <label>Name
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Your name" required/>
                  </label>
                  <label>Email
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@business.com" required/>
                  </label>
                  <button className="button universityEnterButton" type="submit">Enter for free <span>→</span></button>
                </form>

                <small>No payment. No credit card. Free access.</small>
              </div>
            </div>
          </section>

          <section className="universityWhatYouGet">
            <div className="universityGateShell">
              <div className="universityWhatHead">
                <div>
                  <div className="eyebrow">What you get</div>
                  <h2>Everything you need to understand your marketing.</h2>
                </div>
                <p>Learn enough to make better decisions yourself — or know exactly what to look for when you hire someone.</p>
              </div>

              <div className="universityBenefitGrid">
                {benefits.map(([num,title,desc])=>(
                  <article key={num} className="universityBenefitCard">
                    <span>{num}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="universityTopicPreview">
            <div className="universityGateShell">
              <div className="eyebrow">Inside Monsta University</div>
              <div className="universityTopicRow">
                {topics.map(topic=><span key={topic}>{topic}</span>)}
              </div>
            </div>
          </section>

          <section className="universitySimpleCta">
            <div className="universityGateShell">
              <div className="universitySimpleCard">
                <div>
                  <div className="eyebrow">Free means free</div>
                  <h2>Start learning in under 30 seconds.</h2>
                </div>
                <a href="#top" className="button">Get free access <span>↑</span></a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="universityMembers">
          <div className="universityGateShell">
            <div className="universityMembersTop">
              <div>
                <div className="universityBadge"><span>MU</span> Monsta University</div>
                <div className="eyebrow">You’re in</div>
                <h1>Learn. Build.<br/><span>Grow.</span></h1>
                <p>Your free Monsta University dashboard is ready. Add lessons and resources here as the library grows.</p>
              </div>
              <a className="button" href="/#contact">Want Monsta to do it? <span>→</span></a>
            </div>

            <div className="universityMemberGrid">
              {topics.map((topic,index)=>(
                <article className="universityMemberCard" key={topic}>
                  <span>0{index+1}</span>
                  <h3>{topic}</h3>
                  <p>Lessons and practical resources will live here.</p>
                  <b>Coming soon</b>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter/>
    </main>
  </>;
}
