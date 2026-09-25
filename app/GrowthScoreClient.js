"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    key:"trade",
    title:"What kind of trade business do you run?",
    helper:"This helps personalise the diagnosis.",
    options:["Roofing","Plumbing","Electrical","HVAC","Fencing","Building","Landscaping","Other"],
  },
  {
    key:"leadSource",
    title:"Where do most of your new enquiries come from?",
    helper:"Choose the closest match.",
    options:["Mostly referrals","Google / search","Facebook or Instagram","A mix of channels","It changes month to month"],
  },
  {
    key:"leadVolume",
    title:"How consistent is your flow of new enquiries?",
    helper:"Think about the last 2–3 months.",
    options:["More than enough","Usually consistent","Up and down","Too few","Almost none"],
  },
  {
    key:"response",
    title:"How quickly do you usually respond to a new lead?",
    helper:"Think about a normal working day.",
    options:["Under 5 minutes","Within 30 minutes","Within a few hours","Usually the same day","Often the next day"],
  },
  {
    key:"quoteFollowup",
    title:"What happens after you send a quote and hear nothing?",
    helper:"This is often where good opportunities disappear.",
    options:["We follow up systematically","We usually follow up","We follow up once","It depends who's free","We rarely follow up"],
  },
  {
    key:"conversion",
    title:"Roughly how many genuine enquiries turn into booked work?",
    helper:"Your best estimate is fine.",
    options:["More than half","Around 1 in 3","Around 1 in 4","Less than 1 in 4","I don't really track it"],
  },
  {
    key:"website",
    title:"How would you describe your website?",
    helper:"Think about whether it helps turn visitors into enquiries.",
    options:["Strong and generates enquiries","Looks good but could convert better","Outdated or hard to use","We barely use it","We don't have one"],
  },
  {
    key:"tracking",
    title:"How do you track leads, follow-up and where jobs came from?",
    helper:"Choose the closest description.",
    options:["CRM with clear stages","Mostly organised but manual","Spreadsheet / notes / inbox","It's inconsistent","We don't really track it"],
  },
  {
    key:"social",
    title:"How active is your business on social media?",
    helper:"Last one.",
    options:["Consistent and professional","We post fairly regularly","Occasional posts","Very rarely","Not active at all"],
  },
];

const diagnosticMap = {
  leadSource:{
    "Mostly referrals":{visibility:44,leads:42},
    "Google / search":{visibility:76,leads:70},
    "Facebook or Instagram":{visibility:64,leads:68},
    "A mix of channels":{visibility:86,leads:84},
    "It changes month to month":{visibility:52,leads:48},
  },
  leadVolume:{
    "More than enough":{leads:94},
    "Usually consistent":{leads:82},
    "Up and down":{leads:58},
    "Too few":{leads:38},
    "Almost none":{leads:24},
  },
  response:{
    "Under 5 minutes":{conversion:96,systems:88},
    "Within 30 minutes":{conversion:88,systems:82},
    "Within a few hours":{conversion:68,systems:66},
    "Usually the same day":{conversion:52,systems:52},
    "Often the next day":{conversion:30,systems:34},
  },
  quoteFollowup:{
    "We follow up systematically":{conversion:92,systems:94},
    "We usually follow up":{conversion:80,systems:76},
    "We follow up once":{conversion:62,systems:58},
    "It depends who's free":{conversion:46,systems:42},
    "We rarely follow up":{conversion:30,systems:28},
  },
  conversion:{
    "More than half":{conversion:92},
    "Around 1 in 3":{conversion:78},
    "Around 1 in 4":{conversion:64},
    "Less than 1 in 4":{conversion:42},
    "I don't really track it":{conversion:46,systems:34},
  },
  website:{
    "Strong and generates enquiries":{visibility:88,conversion:88,systems:80},
    "Looks good but could convert better":{visibility:74,conversion:64,systems:68},
    "Outdated or hard to use":{visibility:52,conversion:42,systems:50},
    "We barely use it":{visibility:44,conversion:38,systems:44},
    "We don't have one":{visibility:30,conversion:30,systems:38},
  },
  tracking:{
    "CRM with clear stages":{systems:96,conversion:86},
    "Mostly organised but manual":{systems:72,conversion:70},
    "Spreadsheet / notes / inbox":{systems:54,conversion:58},
    "It's inconsistent":{systems:38,conversion:46},
    "We don't really track it":{systems:24,conversion:38},
  },
  social:{
    "Consistent and professional":{visibility:88},
    "We post fairly regularly":{visibility:76},
    "Occasional posts":{visibility:60},
    "Very rarely":{visibility:44},
    "Not active at all":{visibility:34},
  },
};

function clamp(value){
  return Math.max(20,Math.min(96,Math.round(value)));
}

function average(values,fallback=60){
  return values.length ? values.reduce((a,b)=>a+b,0)/values.length : fallback;
}

const serviceLinks={
  "Growth Packages":"/services/growth-packages",
  "Meta Ads":"/services/meta-ads",
  "Google PPC":"/services/google-ppc",
  "CRM/Lead Nurture Funnels":"/services/crm-lead-nurture",
  "Website Development":"/services/website-development",
  "SEO":"/services/seo",
  "Social Media Management":"/services/social-media-management",
  "Appointment Setting":"/services/appointment-setting",
};

function addService(list,name,reason,priority=1){
  const existing=list.find(item=>item.name===name);
  if(existing){
    existing.priority=Math.max(existing.priority,priority);
    return;
  }
  list.push({name,reason,priority,href:serviceLinks[name]});
}

export default function GrowthScoreClient({variant="section"}){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState({});
  const [finished,setFinished]=useState(false);
  const [breakdownUnlocked,setBreakdownUnlocked]=useState(false);
  const [leadDetails,setLeadDetails]=useState({name:"",phone:"",email:""});

  const current=questions[step];
  const progress=finished ? 100 : Math.round((step/questions.length)*100);

  const result=useMemo(()=>{
    const buckets={visibility:[],leads:[],conversion:[],systems:[]};

    Object.entries(diagnosticMap).forEach(([key,map])=>{
      const answer=answers[key];
      const values=map[answer];
      if(!values) return;
      Object.entries(values).forEach(([dimension,value])=>buckets[dimension].push(value));
    });

    const dimensions=[
      {key:"visibility",label:"Visibility",score:clamp(average(buckets.visibility))},
      {key:"leads",label:"Lead flow",score:clamp(average(buckets.leads))},
      {key:"conversion",label:"Conversion",score:clamp(average(buckets.conversion))},
      {key:"systems",label:"Systems & follow-up",score:clamp(average(buckets.systems))},
    ];

    const overall=clamp(average(dimensions.map(item=>item.score)));
    const sorted=[...dimensions].sort((a,b)=>a.score-b.score);
    const weakest=sorted[0];

    const diagnosticCopy={
      visibility:{
        title:"Your biggest gap appears to be visibility.",
        text:"Your answers suggest there is room to improve how consistently local customers discover and recognise your business online.",
      },
      leads:{
        title:"Your biggest gap appears to be lead flow.",
        text:"Your answers suggest the volume or consistency of new enquiries is the main constraint before anything else.",
      },
      conversion:{
        title:"Your biggest gap appears to be conversion.",
        text:"You appear to have opportunities coming in, but some may be getting lost between first enquiry, follow-up, quote and booking.",
      },
      systems:{
        title:"Your biggest gap appears to be systems and follow-up.",
        text:"Your answers suggest the process for tracking, responding to and nurturing opportunities could be more consistent.",
      },
    }[weakest.key];

    const recommendations=[];

    // Website Development: only recommend when the user explicitly reports a website issue.
    if(["Outdated or hard to use","We barely use it","We don't have one"].includes(answers.website)){
      addService(
        recommendations,
        "Website Development",
        answers.website==="We don't have one"
          ? "You said you don't currently have a website. A conversion-focused site gives ads, search and referrals somewhere credible to land."
          : "You described your website as weak or underused. Improving the site may help turn more existing traffic into enquiries.",
        5
      );
    }else if(answers.website==="Looks good but could convert better"){
      addService(recommendations,"Website Development","Your site looks the part, but you said it could convert better. We’d look at the enquiry path, calls to action and landing experience.",3);
    }

    // Appointment Setting: based on response time, quote follow-up and/or weak conversion.
    const slowLeadResponse=["Within a few hours","Usually the same day","Often the next day"].includes(answers.response);
    const weakQuoteFollowup=["We follow up once","It depends who's free","We rarely follow up"].includes(answers.quoteFollowup);
    const weakConversion=["Less than 1 in 4","I don't really track it"].includes(answers.conversion);

    if(slowLeadResponse || weakQuoteFollowup || weakConversion){
      let reason="Your answers show a follow-up opportunity.";
      if(slowLeadResponse && weakQuoteFollowup){
        reason="New leads are not always contacted quickly and quotes are not consistently followed up. An appointment setter can help work both stages.";
      }else if(slowLeadResponse){
        reason="Your lead response time leaves room to improve. An appointment setter can contact new enquiries sooner and keep them moving.";
      }else if(weakQuoteFollowup){
        reason="You said quote follow-up is limited or inconsistent. An appointment setter can follow up outstanding quotes as well as new leads.";
      }else{
        reason="Your reported enquiry-to-job conversion is low or untracked. Structured appointment setting and follow-up may help reduce missed opportunities.";
      }
      addService(recommendations,"Appointment Setting",reason,5);
    }

    // CRM / Lead Nurture Funnels: explicit systems/tracking or follow-up weakness.
    if(["Spreadsheet / notes / inbox","It's inconsistent","We don't really track it"].includes(answers.tracking) || weakQuoteFollowup){
      addService(
        recommendations,
        "CRM/Lead Nurture Funnels",
        "Your answers suggest leads and follow-up could be tracked more consistently. A CRM and nurture workflow can keep enquiries, reminders and follow-up in one process.",
        4
      );
    }

    // Google PPC: high-intent demand capture when lead flow is weak/inconsistent.
    if(["Up and down","Too few","Almost none"].includes(answers.leadVolume) &&
       ["Mostly referrals","Google / search","It changes month to month"].includes(answers.leadSource)){
      addService(
        recommendations,
        "Google PPC",
        "You reported inconsistent or low enquiry volume. Google PPC can put your business in front of people actively searching for the services you provide.",
        answers.leadVolume==="Almost none" ? 5 : 4
      );
    }

    // Meta Ads: demand generation when lead flow is weak and user is not already relying strongly on Meta.
    if(["Up and down","Too few","Almost none"].includes(answers.leadVolume) &&
       answers.leadSource!=="Facebook or Instagram"){
      addService(
        recommendations,
        "Meta Ads",
        "Your enquiry flow is not as consistent as you want. Meta Ads can create additional local demand rather than relying only on people already searching.",
        answers.leadVolume==="Almost none" ? 4 : 3
      );
    }

    // SEO: long-term organic search visibility when search discovery is not already strong.
    if(["Mostly referrals","Facebook or Instagram","It changes month to month"].includes(answers.leadSource) ||
       ["Outdated or hard to use","We barely use it","We don't have one"].includes(answers.website)){
      addService(
        recommendations,
        "SEO",
        "Your current lead mix suggests there may be room to strengthen organic search visibility so more local customers can find you without relying entirely on referrals or paid campaigns.",
        3
      );
    }

    // Social Media Management: only when they explicitly say activity is weak.
    if(["Occasional posts","Very rarely","Not active at all"].includes(answers.social)){
      addService(
        recommendations,
        "Social Media Management",
        "You said your social presence is limited. Consistent management can help keep the business visible, credible and active when prospects check you out.",
        answers.social==="Not active at all" ? 3 : 2
      );
    }

    // Growth Packages: surface when the diagnosis spans several areas.
    const meaningfulGaps=dimensions.filter(item=>item.score<62).length;
    if(meaningfulGaps>=3 || recommendations.length>=4){
      addService(
        recommendations,
        "Growth Packages",
        "Your answers point to several connected gaps rather than one isolated problem. A combined growth package may make more sense than treating each area separately.",
        4
      );
    }

    const finalRecommendations=recommendations
      .sort((a,b)=>b.priority-a.priority)
      .slice(0,5);

    if(finalRecommendations.length===0){
      const fallback={
        visibility:["SEO","Your fundamentals look reasonably strong. SEO is one area we could assess for additional long-term local visibility."],
        leads:["Google PPC","Your foundations look solid. Google PPC is one channel we could assess if you want to add more high-intent enquiries."],
        conversion:["Appointment Setting","Your foundations look solid. Appointment setting could be assessed if you want more consistency between enquiry, quote and booking."],
        systems:["CRM/Lead Nurture Funnels","Your foundations look solid. A CRM review could identify whether any follow-up or tracking can still be streamlined."],
      }[weakest.key];
      finalRecommendations.push({name:fallback[0],reason:fallback[1],priority:1,href:serviceLinks[fallback[0]]});
    }

    return {
      overall,
      dimensions,
      recommendations:finalRecommendations,
      ...diagnosticCopy,
    };
  },[answers]);

  function choose(option){
    setAnswers(prev=>({...prev,[current.key]:option}));
    if(step===questions.length-1){
      setFinished(true);
      return;
    }
    setTimeout(()=>setStep(s=>s+1),120);
  }

  function goBack(){
    if(finished){
      setFinished(false);
      setStep(questions.length-1);
      return;
    }
    setStep(s=>Math.max(0,s-1));
  }

  function restart(){
    setAnswers({});
    setStep(0);
    setFinished(false);
    setBreakdownUnlocked(false);
    setLeadDetails({name:"",phone:"",email:""});
  }

  function unlockBreakdown(event){
    event.preventDefault();
    const name=leadDetails.name.trim();
    const phone=leadDetails.phone.trim();
    const email=leadDetails.email.trim();
    if(!name || !phone || !email) return;
    setBreakdownUnlocked(true);
  }

  const isHero=variant==="hero";

  return <div id={isHero ? "growth-score" : undefined} className={isHero ? "growthScoreHeroWrap" : "growthScoreSectionInner"}>
    {!isHero && <div className="growthScoreIntro">
      <div className="eyebrow">Monsta Growth Score</div>
      <h2>How much work is your marketing leaving on the table?</h2>
      <p>Answer nine quick questions and get an instant diagnostic based on the way your business currently attracts and handles enquiries.</p>
      <div className="growthScoreMeta">
        <span>9 questions</span>
        <span>≈ 60 seconds</span>
        <span>Instant result</span>
      </div>
    </div>}

    <div className="growthScoreCard">
      <div className="growthScoreTop">
        <span>{finished ? "Your result" : `Question ${step+1} of ${questions.length}`}</span>
        <strong>{progress}%</strong>
      </div>
      <div className="growthScoreProgress"><i style={{width:`${progress}%`}} /></div>

      {!finished ? <>
        <div className="growthScoreQuestion" key={current.key}>
          {step===0 && <div className="growthScoreMiniBrand">Monsta Growth Score</div>}
          <h3>{current.title}</h3>
          <p>{current.helper}</p>
          <div className="growthScoreOptions">
            {current.options.map(option=>
              <button
                type="button"
                className={answers[current.key]===option ? "isSelected" : ""}
                onClick={()=>choose(option)}
                key={option}
              >
                <span>{option}</span><b>→</b>
              </button>
            )}
          </div>
        </div>

        <div className="growthScoreFooter">
          <button type="button" onClick={goBack} disabled={step===0}>← Back</button>
          <span>See your score instantly</span>
        </div>
      </> : <div className="growthScoreResult">
        <div className="growthScoreResultHero">
          <div>
            <span>Your Monsta Growth Score</span>
            <strong>{result.overall}<small>/100</small></strong>
          </div>
          <p>Diagnostic score based only on the answers you provided. It is an indicator of the areas to investigate, not a forecast or guarantee of results.</p>
        </div>

        <div className="growthScoreBars">
          {result.dimensions.map(item=>
            <div className="growthScoreBar" key={item.key}>
              <div><span>{item.label}</span><b>{item.score}</b></div>
              <em><i style={{width:`${item.score}%`}} /></em>
            </div>
          )}
        </div>

        {!breakdownUnlocked ? <div className="growthScoreUnlock">
          <div className="growthScoreUnlockCopy">
            <span>Free personalised breakdown</span>
            <h3>Unlock your free breakdown</h3>
            <p>See where you may be losing opportunities, what we’d prioritise first, and which Monsta services could help.</p>
          </div>

          <form className="growthScoreUnlockForm" onSubmit={unlockBreakdown}>
            <label>
              <span>Name</span>
              <input
                required
                value={leadDetails.name}
                onChange={e=>setLeadDetails(prev=>({...prev,name:e.target.value}))}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                required
                type="tel"
                value={leadDetails.phone}
                onChange={e=>setLeadDetails(prev=>({...prev,phone:e.target.value}))}
                placeholder="Phone number"
                autoComplete="tel"
              />
            </label>
            <label>
              <span>Email</span>
              <input
                required
                type="email"
                value={leadDetails.email}
                onChange={e=>setLeadDetails(prev=>({...prev,email:e.target.value}))}
                placeholder="Email address"
                autoComplete="email"
              />
            </label>
            <button className="button growthScoreUnlockButton" type="submit">
              Unlock your free breakdown <span>→</span>
            </button>
          </form>
          <small>Your score stays visible. Your details unlock the personalised breakdown below.</small>
        </div> : <>
          <div className="growthScoreOpportunity">
            <span>Your personalised diagnosis</span>
            <h3>{result.title}</h3>
            <p>{result.text}</p>
            <div className="growthScoreEvidence">
              <span>Based on your answers:</span>
              <ul>
                {answers.leadVolume && <li>Lead flow: <b>{answers.leadVolume}</b></li>}
                {answers.response && <li>Lead response: <b>{answers.response}</b></li>}
                {answers.quoteFollowup && <li>Quote follow-up: <b>{answers.quoteFollowup}</b></li>}
                {answers.tracking && <li>Tracking: <b>{answers.tracking}</b></li>}
              </ul>
            </div>
          </div>

          <div className="growthScoreRecommendations">
            <span className="growthScoreRecommendationsLabel">What we’d prioritise first</span>
            <div className="growthScoreRecommendationList">
              {result.recommendations.map(item=>
                <a
                  className="growthScoreRecommendation"
                  href={item.href}
                  key={item.name}
                  aria-label={`Learn more about ${item.name}`}
                >
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.reason}</p>
                    <span className="growthScoreRecommendationLink">Explore service →</span>
                  </div>
                  <span className="growthScoreRecommendationArrow">↗</span>
                </a>
              )}
            </div>
            {result.recommendations.some(item=>item.name==="Appointment Setting") &&
              <p className="growthScoreAppointmentNote">Appointment Setting can include follow-up of new leads and outstanding quotes where needed.</p>
            }
          </div>

          <div className="growthScoreResultActions">
            <a className="button" href="#contact">Build my growth plan <span>→</span></a>
            <button type="button" onClick={restart}>Retake score</button>
          </div>
        </>}
      </div>}
    </div>
  </div>;
}
