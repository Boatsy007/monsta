const TRADE_PAGES={
  roofing:{
    name:"Roofing",
    eyebrow:"Marketing for roofers",
    title:"More roofing enquiries. Better jobs. Less chasing.",
    intro:"We help roofing businesses get found when homeowners and commercial buyers are actively searching, then turn that traffic into quote-ready enquiries.",
    problems:["High-value jobs with long consideration cycles","Expensive clicks in competitive metro markets","Seasonal demand and storm-driven spikes","Too many weak leads that waste quoting time"],
    services:[
      ["Google Ads","Capture high-intent searches for roof repairs, replacements, restorations and emergency work."],
      ["Local SEO","Build suburb-by-suburb visibility so your business keeps appearing beyond paid campaigns."],
      ["Landing Pages","Send each campaign to a page built around the exact roofing service being searched."],
      ["Lead Follow-up","Respond fast, qualify enquiries and keep homeowners moving toward a booked quote."],
    ],
    search:["roof repairs","roof replacement","roof restoration","leaking roof","metal roofing","storm damage"],
    cta:"Build my roofing lead plan",
  },
  plumbing:{
    name:"Plumbing",
    eyebrow:"Marketing for plumbers",
    title:"Be the plumber they find when the problem can’t wait.",
    intro:"Plumbing is won on speed, intent and local visibility. We build campaigns designed to put your business in front of customers at the exact moment they need help.",
    problems:["Emergency searches where response time matters","Heavy local Google Ads competition","Low-quality price shoppers","A constant need for fresh booked jobs"],
    services:[
      ["Google Ads","Target urgent and high-intent plumbing searches across the suburbs you actually service."],
      ["Local SEO","Strengthen Maps and organic visibility for plumbing services and location-based searches."],
      ["Conversion Pages","Make it effortless to call, enquire or request an urgent booking from mobile."],
      ["Lead Automation","Follow up missed calls and enquiries quickly so valuable jobs do not go cold."],
    ],
    search:["emergency plumber","blocked drain","hot water repair","burst pipe","toilet repair","gas plumber"],
    cta:"Build my plumbing lead plan",
  },
  electrical:{
    name:"Electrical",
    eyebrow:"Marketing for electricians",
    title:"Turn local electrical searches into booked work.",
    intro:"From emergency faults to switchboards, EV chargers and larger electrical projects, we help electricians attract the work they want rather than relying on referrals alone.",
    problems:["Crowded local search results","A mix of small jobs and high-value projects","Customers comparing multiple electricians","Difficulty keeping the pipeline consistent"],
    services:[
      ["Google Ads","Separate campaigns by service so emergency work and project work can be targeted differently."],
      ["SEO","Build long-term visibility for core electrical services across your target suburbs."],
      ["Website Conversion","Make licences, reviews, response times and service areas immediately clear."],
      ["Lead Nurture","Automatically follow up quote requests and project enquiries."],
    ],
    search:["electrician near me","emergency electrician","switchboard upgrade","EV charger installation","power fault","smoke alarms"],
    cta:"Build my electrical lead plan",
  },
  hvac:{
    name:"HVAC",
    eyebrow:"Marketing for air conditioning & HVAC",
    title:"Fill the calendar before the temperature does it for you.",
    intro:"We help air conditioning and HVAC businesses capture installation, replacement, servicing and repair demand with campaigns that can scale around the seasons.",
    problems:["Strong seasonal swings in demand","Different economics for installs versus repairs","Competitive summer search auctions","Customers researching brands before choosing an installer"],
    services:[
      ["Google Ads","Segment installation, servicing and repair campaigns so budget follows the best opportunities."],
      ["SEO","Create persistent visibility for air conditioning searches between peak seasons."],
      ["Landing Pages","Build service-specific pages with clear brands, finance, warranty and booking information."],
      ["Remarketing","Stay visible to customers comparing systems and installers over several days or weeks."],
    ],
    search:["air conditioning installation","aircon repair","split system installation","ducted air conditioning","aircon service","HVAC contractor"],
    cta:"Build my HVAC lead plan",
  },
  fencing:{
    name:"Fencing",
    eyebrow:"Marketing for fencing contractors",
    title:"More fence quotes from the areas you actually want to work in.",
    intro:"Fencing is visual, local and quote-driven. We build a lead system around project type, service area and job value so your team spends more time quoting worthwhile work.",
    problems:["Large service areas that can waste ad spend","Customers shopping several quotes","Very different values across fence types","Strong need for visual proof and trust"],
    services:[
      ["Google Ads","Target high-intent searches for the fence types and suburbs you most want."],
      ["Meta Ads","Use completed projects to create demand and stay visible to local homeowners."],
      ["Project Pages","Show materials, finishes, recent work and clear quote pathways."],
      ["Lead Qualification","Collect project type, location and timing before the quote conversation."],
    ],
    search:["Colorbond fencing","timber fencing","pool fencing","front fence","commercial fencing","fence replacement"],
    cta:"Build my fencing lead plan",
  },
  building:{
    name:"Building",
    eyebrow:"Marketing for builders",
    title:"A better pipeline of serious building enquiries.",
    intro:"Builders do not need hundreds of random leads. They need the right projects, in the right locations, from people who are ready to take the next step.",
    problems:["Long sales cycles","Large differences in project value","Unqualified renovation enquiries","Trust and portfolio quality matter enormously"],
    services:[
      ["Google Ads","Target project-specific searches rather than broad traffic that rarely converts."],
      ["SEO","Build authority around the project types and locations your business specialises in."],
      ["Project Landing Pages","Show relevant builds, process, service area and a clear qualification pathway."],
      ["Lead Nurture","Keep serious prospects engaged throughout a longer research and decision process."],
    ],
    search:["custom home builder","home renovations","home extension","second storey addition","luxury builder","commercial builder"],
    cta:"Build my building lead plan",
  },
  landscaping:{
    name:"Landscaping",
    eyebrow:"Marketing for landscapers",
    title:"Turn beautiful work into a consistent flow of new projects.",
    intro:"Landscaping sells visually, but customers still search when they are ready to act. We combine high-intent search with strong creative and project proof.",
    problems:["Customers often need inspiration before enquiring","Project values vary dramatically","Large numbers of low-budget enquiries","A portfolio matters as much as the ad itself"],
    services:[
      ["Google Ads","Capture active searches for landscaping, retaining walls, turf and outdoor projects."],
      ["Meta Ads","Put strong before-and-after work in front of homeowners in your target areas."],
      ["Portfolio Pages","Turn your best projects into conversion assets rather than a passive gallery."],
      ["Lead Qualification","Ask the right questions early around suburb, project type, timing and budget."],
    ],
    search:["landscaper near me","landscape design","retaining walls","turf installation","garden landscaping","outdoor renovation"],
    cta:"Build my landscaping lead plan",
  },
};

export function generateStaticParams(){
  return Object.keys(TRADE_PAGES).map(slug=>({slug}));
}

export async function generateMetadata({params}){
  const {slug}=await params;
  const data=TRADE_PAGES[slug];
  if(!data) return {title:"Trade Marketing | Monsta Miami"};
  return {
    title:`${data.name} Marketing | Monsta Miami`,
    description:`Digital marketing for ${data.name.toLowerCase()} businesses. Google Ads, SEO, landing pages and lead follow-up built to generate more booked work.`,
  };
}

export default async function TradePage({params}){
  const {slug}=await params;
  const data=TRADE_PAGES[slug];
  if(!data) return null;

  return (
    <>
      <header className="tradePageHeader">
        <div className="tradePageHeaderInner">
          <a href="/" className="tradePageLogo"><img src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
          <a href="/#contact" className="tradePageHeaderCta">Get More Jobs <span>→</span></a>
        </div>
      </header>

      <main className="tradePage">
        <section className="tradeHero">
          <div className="tradeHeroGlow"></div>
          <div className="tradePageShell tradeHeroGrid">
            <div className="tradeHeroCopy">
              <a className="tradeBack" href="/">← All trades</a>
              <div className="eyebrow">{data.eyebrow}</div>
              <h1>{data.title}</h1>
              <p>{data.intro}</p>
              <div className="tradeHeroActions">
                <a className="button" href="/#contact">{data.cta} <span>→</span></a>
                <a className="tradeSecondaryCta" href="#how-we-help">See how we help</a>
              </div>
            </div>

            <div className="tradeHeroPanel">
              <span className="tradePanelLabel">What we focus on</span>
              <h2>More of the work you actually want.</h2>
              <div className="tradeProblemList">
                {data.problems.map((item,i)=><div key={item}><span>0{i+1}</span><p>{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="how-we-help" className="tradeDetailSection">
          <div className="tradePageShell">
            <div className="tradeSectionIntro">
              <div className="eyebrow">How Monsta helps {data.name.toLowerCase()} businesses</div>
              <h2>A complete lead system, not another random marketing service.</h2>
              <p>Each part is built around the way customers search for, compare and choose a {data.name.toLowerCase()} business.</p>
            </div>

            <div className="tradeServiceCards">
              {data.services.map(([title,copy],i)=>(
                <article className="tradeServiceCard" key={title}>
                  <span>0{i+1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tradeSearchSection">
          <div className="tradePageShell tradeSearchGrid">
            <div>
              <div className="eyebrow">High-intent demand</div>
              <h2>Show up for the searches that can become real jobs.</h2>
              <p>Campaigns are structured around services with commercial intent rather than sending budget into broad, generic traffic.</p>
            </div>
            <div className="tradeSearchTerms">
              {data.search.map(term=><span key={term}>{term}</span>)}
            </div>
          </div>
        </section>

        <section className="tradeProcessSection">
          <div className="tradePageShell">
            <div className="tradeSectionIntro">
              <div className="eyebrow">The system</div>
              <h2>From search to booked quote.</h2>
            </div>
            <div className="tradeProcessGrid">
              <div><span>01</span><h3>Get found</h3><p>Put the business in front of people actively looking for the service.</p></div>
              <div><span>02</span><h3>Convert</h3><p>Give them a fast, clear reason to enquire rather than keep comparing.</p></div>
              <div><span>03</span><h3>Follow up</h3><p>Respond quickly and keep good leads moving toward a quote.</p></div>
              <div><span>04</span><h3>Optimise</h3><p>Shift budget and attention toward the campaigns producing worthwhile jobs.</p></div>
            </div>
          </div>
        </section>

        <section className="tradeFinalSection">
          <div className="tradePageShell tradeFinalCard">
            <div>
              <div className="eyebrow">{data.name} growth</div>
              <h2>Want more {data.name.toLowerCase()} jobs without more chasing?</h2>
              <p>We’ll show you what we would target first and how we would structure the lead system.</p>
            </div>
            <a className="button" href="/#contact">{data.cta} <span>→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
