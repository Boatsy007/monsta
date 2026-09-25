"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    key:"trade",
    title:"What kind of trade business do you run?",
    helper:"This helps tailor the rest of the score.",
    options:["Roofing","Plumbing","Electrical","HVAC","Fencing","Building","Landscaping","Other"],
  },
  {
    key:"leadSource",
    title:"Where do most of your new enquiries come from?",
    helper:"Pick the closest match.",
    options:["Mostly referrals","Google / search","Facebook or Instagram","A mix of channels","It changes month to month"],
  },
  {
    key:"adSpend",
    title:"Roughly what do you spend on paid advertising each month?",
    helper:"An estimate is completely fine.",
    options:["$0","Under $1,000","$1,000–$3,000","$3,000–$6,000","$6,000+"],
  },
  {
    key:"response",
    title:"How quickly do you usually respond to a new lead?",
    helper:"Think about a normal working day.",
    options:["Under 5 minutes","Within 30 minutes","Within a few hours","Usually the same day","Often the next day"],
  },
  {
    key:"conversion",
    title:"Roughly how many genuine enquiries turn into booked work?",
    helper:"Use your best estimate.",
    options:["More than half","Around 1 in 3","Around 1 in 4","Less than 1 in 4","I don't really track it"],
  },
  {
    key:"tracking",
    title:"How clearly can you tell which marketing actually makes you money?",
    helper:"Last one.",
    options:["Very clearly","Mostly","Somewhat","Not really","I have no idea"],
  },
];

const scoreMap = {
  leadSource:{
    "Mostly referrals":[42,32,56],
    "Google / search":[76,72,62],
    "Facebook or Instagram":[64,70,58],
    "A mix of channels":[84,82,68],
    "It changes month to month":[52,48,54],
  },
  adSpend:{
    "$0":[48,28,55],
    "Under $1,000":[58,48,56],
    "$1,000–$3,000":[70,68,60],
    "$3,000–$6,000":[78,80,64],
    "$6,000+":[82,84,68],
  },
  response:{
    "Under 5 minutes":[72,68,94],
    "Within 30 minutes":[70,66,86],
    "Within a few hours":[68,64,68],
    "Usually the same day":[66,62,52],
    "Often the next day":[64,58,34],
  },
  conversion:{
    "More than half":[72,70,92],
    "Around 1 in 3":[70,68,78],
    "Around 1 in 4":[68,66,64],
    "Less than 1 in 4":[66,64,46],
    "I don't really track it":[58,56,42],
  },
  tracking:{
    "Very clearly":[88,84,84],
    "Mostly":[78,76,74],
    "Somewhat":[66,64,62],
    "Not really":[54,52,50],
    "I have no idea":[42,40,44],
  },
};

function clampScore(value){
  return Math.max(28,Math.min(96,Math.round(value)));
}

export default function GrowthScoreClient({variant="section"}){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState({});
  const [finished,setFinished]=useState(false);

  const current=questions[step];
  const progress=finished ? 100 : Math.round((step/questions.length)*100);

  const result=useMemo(()=>{
    const totals=[0,0,0];
    let counted=0;

    Object.entries(scoreMap).forEach(([key,map])=>{
      const choice=answers[key];
      if(!choice || !map[choice]) return;
      const values=map[choice];
      totals[0]+=values[0];
      totals[1]+=values[1];
      totals[2]+=values[2];
      counted+=1;
    });

    const base=counted ? totals.map(v=>v/counted) : [60,60,60];
    const visibility=clampScore(base[0]);
    const leads=clampScore(base[1]);
    const conversion=clampScore(base[2]);
    const overall=clampScore((visibility+leads+conversion)/3);

    const dimensions=[
      {key:"visibility",label:"Visibility",score:visibility},
      {key:"leads",label:"Lead generation",score:leads},
      {key:"conversion",label:"Conversion",score:conversion},
    ];
    const weakest=[...dimensions].sort((a,b)=>a.score-b.score)[0];

    const copy={
      visibility:{
        title:"Your biggest opportunity is visibility.",
        text:"There looks to be room to put your business in front of more local customers who are already looking for the work you do.",
      },
      leads:{
        title:"Your biggest opportunity is lead generation.",
        text:"Your next gain is likely to come from building a more consistent flow of enquiries instead of relying on work to arrive unpredictably.",
      },
      conversion:{
        title:"Your biggest opportunity is conversion.",
        text:"You may already be creating interest, but faster follow-up, clearer tracking and a stronger enquiry-to-booking process could help more of those leads turn into work.",
      },
    }[weakest.key];

    return {overall,dimensions,...copy};
  },[answers]);

  function choose(option){
    const nextAnswers={...answers,[current.key]:option};
    setAnswers(nextAnswers);

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
  }

  const isHero=variant==="hero";

  return <div id={isHero ? "growth-score" : undefined} className={isHero ? "growthScoreHeroWrap" : "growthScoreSectionInner"}>
    {!isHero && <div className="growthScoreIntro">
      <div className="eyebrow">Monsta Growth Score</div>
      <h2>How much work is your marketing leaving on the table?</h2>
      <p>Answer six quick questions and get an instant snapshot of where your biggest growth opportunity may be.</p>
      <div className="growthScoreMeta">
        <span>6 questions</span>
        <span>≈ 45 seconds</span>
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
            <span>No email required</span>
          </div>
        </> : <div className="growthScoreResult">
          <div className="growthScoreResultHero">
            <div>
              <span>Your Monsta Growth Score</span>
              <strong>{result.overall}<small>/100</small></strong>
            </div>
            <p>Indicative score based on your answers — not a guarantee of marketing performance.</p>
          </div>

          <div className="growthScoreBars">
            {result.dimensions.map(item=>
              <div className="growthScoreBar" key={item.key}>
                <div><span>{item.label}</span><b>{item.score}</b></div>
                <em><i style={{width:`${item.score}%`}} /></em>
              </div>
            )}
          </div>

          <div className="growthScoreOpportunity">
            <span>Biggest opportunity</span>
            <h3>{result.title}</h3>
            <p>{result.text}</p>
          </div>

          <div className="growthScoreResultActions">
            <a className="button" href="#contact">Build my growth plan <span>→</span></a>
            <button type="button" onClick={restart}>Retake score</button>
          </div>
        </div>}
      </div>
  </div>;
}
