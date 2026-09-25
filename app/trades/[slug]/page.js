import { absoluteUrl } from "../../siteConfig";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

const TRADE_PAGES={
  roofing:{
    name:"Roofing",
    eyebrow:"Digital marketing for roofers",
    title:"Win more roofing work without relying on referrals alone.",
    intro:"Roofing is a high-trust, high-value category where customers often compare several contractors before requesting a quote. Monsta helps roofing businesses get found for the right services, show proof quickly and follow up consistently so more enquiries become real quoting opportunities.",
    metaTitle:"Digital Marketing for Roofers | Roofing Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian roofing businesses. Google Ads, SEO, websites, CRM and follow-up strategies built around roof repairs, restorations, replacements and higher-value roofing work.",
    challenges:[
      ["High-value decisions","Roof replacements and restorations are considered purchases, so customers often compare multiple businesses before committing."],
      ["Storm-driven demand","Weather events can create sudden spikes in urgent searches that require fast campaign and lead response."],
      ["Lead quality","Broad roofing terms can attract research traffic, tiny repair jobs or enquiries outside your preferred service area."],
      ["Proof matters","Before-and-after work, licences, reviews, warranties and recent projects can heavily influence who gets invited to quote."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Target high-intent searches for roof repairs, replacements, restorations, leaks, metal roofing and storm damage in the areas you actually service."],
      ["SEO","/services/seo","Build long-term local visibility around the roofing services and suburbs that matter most to your business."],
      ["Website Development","/services/website-development","Create service-specific pages that show your work, establish trust and make requesting a quote simple on mobile."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Track every enquiry and keep longer-consideration roofing prospects moving after the first quote or site visit."],
      ["Appointment Setting","/services/appointment-setting","Respond to new leads faster and follow up outstanding quotes where needed so good opportunities do not disappear."]
    ],
    jobs:["roof repairs","roof replacement","roof restoration","leaking roof","metal roofing","storm damage","commercial roofing"],
    journey:[
      ["Search","A homeowner or property manager starts looking for a roofing solution."],
      ["Proof","They compare reviews, projects, licences, warranties and the quality of your website."],
      ["Quote","The enquiry needs to be qualified by service, location, urgency and project type."],
      ["Follow-up","A considered roofing quote may need more than one touch before a decision is made."]
    ],
    faq:[
      ["Can Monsta target specific types of roofing work?","Yes. Campaigns and landing pages can be structured around the services you most want to sell, such as repairs, restorations, replacements, metal roofing or commercial work."],
      ["Can we target only selected service areas?","Yes. Paid campaigns can be geographically restricted, and SEO can focus on the suburbs and service regions most valuable to the business."],
      ["How do you reduce low-quality roofing leads?","Better service-specific keywords, exclusions, landing-page messaging and lead qualification can reduce avoidable enquiries, although no campaign can eliminate every unsuitable lead."],
      ["Can Monsta help follow up roofing quotes?","Yes. CRM workflows and Appointment Setting can support new lead response and outstanding quote follow-up where that is part of the agreed scope."]
    ],
    cta:"Build my roofing growth plan"
  },
  plumbing:{
    name:"Plumbing",
    eyebrow:"Digital marketing for plumbers",
    title:"Be the plumber they find when the problem cannot wait.",
    intro:"Plumbing demand is often urgent, local and mobile-first. A customer with a blocked drain, failed hot water system or burst pipe is usually looking for a fast answer, which makes visibility, call conversion and response time especially important.",
    metaTitle:"Digital Marketing for Plumbers | Plumbing Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian plumbers. Google Ads, local SEO, websites, CRM and lead follow-up built around emergency plumbing, blocked drains, hot water, gas and installations.",
    challenges:[
      ["Urgent search intent","Many plumbing customers want help immediately, so slow responses can cost the opportunity."],
      ["Expensive competition","Local plumbing searches can attract aggressive competition, making wasted clicks and broad targeting costly."],
      ["Mixed job values","An emergency leak, hot water replacement and new-home plumbing project require different marketing and qualification."],
      ["Missed-call risk","A strong campaign can still fail commercially if enquiries arrive while the team is on the tools and nobody responds quickly."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Capture urgent, high-intent searches for blocked drains, hot water, leaks, gas work and other priority services."],
      ["SEO","/services/seo","Improve visibility in Google Search and Maps for service-plus-suburb searches across your local area."],
      ["Website Development","/services/website-development","Make emergency call buttons, core services, service areas and trust signals obvious from the first mobile screen."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Centralise form, ad and other enquiries so the team can see who needs a response and what stage each lead is at."],
      ["Appointment Setting","/services/appointment-setting","Support faster first contact and follow-up when your plumbers are busy on jobs."]
    ],
    jobs:["emergency plumber","blocked drains","hot water systems","burst pipes","gas fitting","leaking taps","plumbing installations"],
    journey:[
      ["Search","The customer searches by problem, urgency and location."],
      ["Call","They want a fast, credible business that looks available and easy to contact."],
      ["Qualify","The enquiry needs the right service, location and urgency identified quickly."],
      ["Book","Fast response and a clear next step can matter as much as generating the lead itself."]
    ],
    faq:[
      ["Is Google Ads suitable for emergency plumbing?","It can be a strong fit because search ads can target people actively looking for urgent plumbing help. Results still depend on competition, budget, targeting and how quickly leads are handled."],
      ["Can you market higher-value plumbing services too?","Yes. Campaigns can separate urgent call-outs from services such as hot water replacements, gas work, renovations or installation projects."],
      ["Can you help with missed enquiries?","CRM and Appointment Setting services can help create a more consistent response and follow-up process for new leads."],
      ["Do you work with plumbers outside the Gold Coast?","The marketing system can be structured around an Australian plumbing business's actual service area rather than being limited to one suburb or city."]
    ],
    cta:"Build my plumbing growth plan"
  },
  electrical:{
    name:"Electrical",
    eyebrow:"Digital marketing for electricians",
    title:"Turn local electrical searches into better booked work.",
    intro:"Electrical businesses often serve everything from urgent faults to switchboard upgrades, lighting, EV charging and larger installations. Monsta helps separate those opportunities so your marketing is built around the jobs you actually want.",
    metaTitle:"Digital Marketing for Electricians | Electrical Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian electricians. Google Ads, SEO, websites, CRM and lead follow-up for emergency electrical work, switchboards, EV chargers, lighting and installations.",
    challenges:[
      ["Too many service types","Emergency faults, compliance work and project-based installations behave differently and should not all share one generic campaign."],
      ["Local competition","Customers can compare several electricians quickly across Google Ads, Maps and organic results."],
      ["Trust and compliance","Licensing, reviews, workmanship and clear service information all influence customer confidence."],
      ["Quote follow-up","Higher-value upgrades and installations can involve a longer decision period than a simple call-out."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Separate urgent call-outs from project services such as switchboards, EV chargers, lighting and rewiring."],
      ["SEO","/services/seo","Build local visibility for the electrical services and suburbs that are strategically important."],
      ["Website Development","/services/website-development","Present licences, reviews, service categories and project proof in a way that helps customers choose quickly."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Track where enquiries came from and keep project opportunities organised from first contact to quote."],
      ["Appointment Setting","/services/appointment-setting","Help new enquiries and outstanding quotes receive consistent follow-up while your team stays focused on the work."]
    ],
    jobs:["emergency electrician","switchboard upgrades","EV charger installation","power faults","smoke alarms","lighting upgrades","rewiring"],
    journey:[
      ["Intent","The customer searches for a specific electrical problem or upgrade."],
      ["Trust","Licensing, reviews, service clarity and availability help narrow the shortlist."],
      ["Enquiry","The lead should be routed to the right service rather than treated as a generic contact."],
      ["Follow-up","Project work may require reminders or additional contact after the first quote."]
    ],
    faq:[
      ["Can campaigns focus on higher-value electrical jobs?","Yes. The account can prioritise specific services such as switchboards, EV chargers, rewiring or larger installation work instead of treating every electrical search equally."],
      ["Can emergency electrical work and project work run separately?","Yes. Separating different search intents can make messaging, budgets and landing pages more relevant."],
      ["Can SEO target multiple suburbs?","Yes, provided the content is genuinely useful and accurately reflects the areas the business serves rather than creating thin duplicate location pages."],
      ["Can Monsta help follow up electrical quotes?","Yes. CRM workflows and Appointment Setting can support consistent lead and quote follow-up."]
    ],
    cta:"Build my electrical growth plan"
  },
  hvac:{
    name:"HVAC",
    eyebrow:"Digital marketing for air conditioning & HVAC",
    title:"Build demand before the weather fills your calendar for you.",
    intro:"HVAC demand changes with the season, but installation, replacement, servicing and repair all have different customer intent and economics. Monsta helps structure your marketing around those differences instead of treating air conditioning as one generic service.",
    metaTitle:"HVAC & Air Conditioning Marketing | Leads for Tradies | Monsta Miami",
    metaDescription:"Digital marketing for Australian HVAC and air conditioning businesses. Generate installation, replacement, servicing and repair enquiries with Google Ads, SEO, websites, CRM and follow-up.",
    challenges:[
      ["Seasonal demand","Heatwaves and cold snaps can produce rapid changes in search volume, lead cost and capacity."],
      ["Install versus repair","A ducted-system installation and an urgent repair require different offers, landing pages and follow-up."],
      ["Brand research","Customers may compare system types, brands, warranties, efficiency and finance before choosing an installer."],
      ["Longer sales cycle","Higher-value installations often need quoting, follow-up and continued trust-building before they are won."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Separate installation, replacement, servicing and repair campaigns so budget can follow the work with the strongest commercial value."],
      ["SEO","/services/seo","Build year-round visibility for air conditioning services instead of relying only on seasonal paid demand."],
      ["Website Development","/services/website-development","Create pages for split, ducted and other system types with clear service information, proof and quote pathways."],
      ["Meta Ads","/services/meta-ads","Use visual creative, seasonal campaigns and retargeting to stay visible to homeowners considering a new system."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Keep installation leads and outstanding quotes organised through a longer buying process."]
    ],
    jobs:["air conditioning installation","aircon repair","split systems","ducted air conditioning","aircon servicing","HVAC contractor","system replacement"],
    journey:[
      ["Research","The customer may compare system type, brand, efficiency and expected cost."],
      ["Search","High-intent customers then look for local installers, repairers or service technicians."],
      ["Quote","Install enquiries often need site information, qualification and a formal proposal."],
      ["Nurture","Larger jobs may require follow-up while the customer compares systems and installers."]
    ],
    faq:[
      ["Can campaigns separate installs from repairs?","Yes. Different services can have their own keywords, ads, budgets and landing pages so urgent repair demand does not blur together with higher-value installation work."],
      ["Can marketing scale up during peak weather periods?","Budgets and campaign emphasis can be adjusted around seasonality and business capacity, although competitive conditions may also change during peak periods."],
      ["Can you promote ducted and split systems separately?","Yes. Separate service pages and campaign structures can better match the customer's specific search intent."],
      ["Can CRM help with HVAC installation quotes?","Yes. A CRM can track long-consideration leads, reminders, quote stages and follow-up activity in one place."]
    ],
    cta:"Build my HVAC growth plan"
  },
  fencing:{
    name:"Fencing",
    eyebrow:"Digital marketing for fencing contractors",
    title:"Generate better fence enquiries from the areas you actually want to work in.",
    intro:"Fencing is visual, local and heavily quote-driven. The challenge is not simply generating enquiries; it is attracting projects with the right fence type, location, timing and value so your team spends more time quoting worthwhile work.",
    metaTitle:"Digital Marketing for Fencing Contractors | Fencing Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian fencing contractors. Generate better enquiries for Colorbond, timber, pool, front and commercial fencing with Google Ads, Meta Ads, SEO and lead qualification.",
    challenges:[
      ["Quote shopping","Customers commonly request several quotes, which makes proof and consistent follow-up important."],
      ["Different project values","A small side fence, pool fence and large commercial boundary are very different opportunities."],
      ["Service-area waste","Broad geographic targeting can generate enquiries that are too far away to quote profitably."],
      ["Visual decision-making","Materials, finishes and completed projects strongly influence what customers want and who they contact."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Target searches for specific fence types and locations instead of paying for broad, low-intent traffic."],
      ["Meta Ads","/services/meta-ads","Use completed projects, before-and-after work and strong creative to create demand with local homeowners."],
      ["Website Development","/services/website-development","Give each major fence type its own clear page with project proof and a straightforward quote pathway."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Capture project type, suburb, timing and lead status so quote opportunities stay organised."],
      ["Appointment Setting","/services/appointment-setting","Follow up new leads and outstanding quotes to keep genuine fencing projects moving."]
    ],
    jobs:["Colorbond fencing","timber fencing","pool fencing","front fencing","commercial fencing","fence replacement","aluminium fencing"],
    journey:[
      ["Inspiration","Customers often begin by comparing materials, styles and completed projects."],
      ["Search","They look for local contractors who install the fence type they want."],
      ["Qualify","Project type, metres, suburb, access and timing can determine whether the enquiry is worthwhile."],
      ["Quote","Consistent follow-up matters because homeowners may be comparing several contractors."]
    ],
    faq:[
      ["Can Monsta target specific fence types?","Yes. Campaigns can be separated by services such as Colorbond, timber, pool, aluminium or commercial fencing."],
      ["Can we exclude suburbs that are too far away?","Paid campaigns can use geographic targeting, while forms and qualification steps can make your preferred service area clear."],
      ["Can you help reduce poor-fit enquiries?","Better targeting, service-specific landing pages and qualification questions can reduce avoidable poor-fit leads, although no system can remove them entirely."],
      ["Is Meta Ads useful for fencing?","It can be useful because fencing is highly visual. Strong project imagery can create interest before a homeowner begins an active Google search."]
    ],
    cta:"Build my fencing growth plan"
  },
  building:{
    name:"Building",
    eyebrow:"Digital marketing for builders",
    title:"Build a pipeline of serious project enquiries, not a pile of random leads.",
    intro:"For builders, lead volume alone is a poor target. The real opportunity is attracting the right project types, budgets and locations, then nurturing those prospects through a much longer decision process than most trade call-outs.",
    metaTitle:"Digital Marketing for Builders | Building Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian builders. Attract qualified enquiries for custom homes, renovations, extensions and higher-value building projects with SEO, Google Ads, websites, CRM and nurture.",
    challenges:[
      ["Long sales cycles","Custom homes and major renovations can take months from first research to signed contract."],
      ["Qualification matters","Project type, budget, location, land status and timeframe can determine whether a lead is worth pursuing."],
      ["Trust is everything","Portfolio quality, process, reviews, credentials and positioning carry more weight on high-value projects."],
      ["Fewer but better leads","Builders often need qualified opportunities rather than the highest possible volume of form submissions."]
    ],
    services:[
      ["SEO","/services/seo","Build authority around the project types, locations and questions serious building prospects research over time."],
      ["Google PPC","/services/google-ppc","Target project-specific searches such as custom homes, renovations and extensions rather than generic building traffic."],
      ["Website Development","/services/website-development","Turn your portfolio, process and positioning into a site designed to qualify and convert serious project enquiries."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Track longer sales cycles and keep high-value prospects engaged after the initial enquiry."],
      ["Appointment Setting","/services/appointment-setting","Support consistent contact and next-step booking for qualified project enquiries."]
    ],
    jobs:["custom homes","home renovations","home extensions","second-storey additions","luxury homes","commercial building","knockdown rebuilds"],
    journey:[
      ["Research","Prospects compare builders, styles, budgets, locations, reviews and project experience."],
      ["Proof","A strong portfolio and clear process help establish whether your business belongs on the shortlist."],
      ["Qualify","Serious enquiries need to be screened by project type, budget, location and timing."],
      ["Nurture","The decision can take weeks or months, so organised follow-up matters far more than a single callback."]
    ],
    faq:[
      ["Should builders optimise for the most leads possible?","Not necessarily. For higher-value building work, lead quality and fit can matter more than raw volume."],
      ["Can the website help qualify building enquiries?","Yes. Forms and page structure can ask for useful project information before the first sales conversation."],
      ["Can SEO support long-consideration building projects?","Yes. Useful service, project and educational content can help a builder appear throughout the research process, although SEO results take time and rankings are not guaranteed."],
      ["Can different project types have separate campaigns?","Yes. Custom homes, renovations, extensions and commercial work can have different search intent and should often be treated separately."]
    ],
    cta:"Build my building growth plan"
  },
  landscaping:{
    name:"Landscaping",
    eyebrow:"Digital marketing for landscapers",
    title:"Turn great outdoor projects into a stronger pipeline of new work.",
    intro:"Landscaping customers often move between inspiration and active search. Monsta combines high-intent search with visual proof so your marketing can attract homeowners who like the work and are actually ready to discuss a project.",
    metaTitle:"Digital Marketing for Landscapers | Landscaping Leads | Monsta Miami",
    metaDescription:"Digital marketing for Australian landscapers. Generate better enquiries for landscape design, retaining walls, turf, garden construction and outdoor projects with Google Ads, Meta Ads, SEO and lead qualification.",
    challenges:[
      ["Visual buying process","Customers often need to see completed work before they can imagine what they want for their own property."],
      ["Huge budget variation","A turf job and a full outdoor transformation can both be called landscaping but have completely different value."],
      ["Low-budget enquiries","Broad marketing can create plenty of interest from people whose budget does not match the type of projects you want."],
      ["Project qualification","Suburb, access, scope, design needs, timing and budget all matter before a site visit is worthwhile."]
    ],
    services:[
      ["Google PPC","/services/google-ppc","Capture active searches for landscape design, retaining walls, turf, garden construction and outdoor projects."],
      ["Meta Ads","/services/meta-ads","Use project imagery and before-and-after creative to inspire homeowners in your target areas."],
      ["Website Development","/services/website-development","Turn your best projects into service and portfolio pages that explain what you do and encourage suitable enquiries."],
      ["SEO","/services/seo","Build long-term visibility around landscaping services and the local areas you want to work in."],
      ["CRM / Lead Nurture","/services/crm-lead-nurture","Keep project enquiries organised and follow up prospects who are still planning or budgeting."]
    ],
    jobs:["landscape design","retaining walls","turf installation","garden construction","outdoor renovations","paving","structural landscaping"],
    journey:[
      ["Inspire","Strong imagery gives homeowners ideas and builds confidence in your style and capability."],
      ["Search","When the project becomes real, customers start searching for specific landscaping services locally."],
      ["Qualify","Scope, property access, suburb, timing and budget help determine whether the project is a good fit."],
      ["Quote","Project-based work often needs structured follow-up after the first conversation or site visit."]
    ],
    faq:[
      ["Can Meta Ads work for landscapers?","It can be useful because landscaping is highly visual and strong project imagery can create demand among homeowners in selected local areas."],
      ["Can you target higher-value landscaping work?","Campaigns, content and qualification can be built around the services and project types you most want, although no marketing system can guarantee a particular project value."],
      ["Can forms qualify landscaping leads before a site visit?","Yes. Forms can collect information such as suburb, project type, timing and indicative budget to give the business more context before responding."],
      ["Should landscaping use both Google Ads and SEO?","The channels can complement each other. Google Ads can capture paid search demand while SEO builds organic visibility over a longer period."]
    ],
    cta:"Build my landscaping growth plan"
  }
};

export function generateStaticParams(){
  return Object.keys(TRADE_PAGES).map(slug=>({slug}));
}

export async function generateMetadata({params}){
  const {slug}=await params;
  const data=TRADE_PAGES[slug];
  if(!data) return {title:"Trade Marketing | Monsta Miami"};
  const canonical=`/trades/${slug}/`;
  return {
    title:{absolute:data.metaTitle},
    description:data.metaDescription,
    alternates:{canonical},
    openGraph:{
      title:data.metaTitle,
      description:data.metaDescription,
      type:"website",
      url:canonical
    },
    twitter:{
      card:"summary_large_image",
      title:data.metaTitle,
      description:data.metaDescription
    }
  };
}

export default async function TradePage({params}){
  const {slug}=await params;
  const data=TRADE_PAGES[slug];
  if(!data) return null;

  const canonical=`/trades/${slug}/`;

  const faqSchema={
    "@context":"https://schema.org",
    "@type":"FAQPage",
    mainEntity:data.faq.map(([question,answer])=>({
      "@type":"Question",
      name:question,
      acceptedAnswer:{"@type":"Answer",text:answer}
    }))
  };

  const breadcrumbSchema={
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:absoluteUrl("/")},
      {"@type":"ListItem",position:2,name:data.name,item:absoluteUrl(canonical)}
    ]
  };

  return (
    <>
      <SiteHeader/>
      <main className="site-main tradePage">
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
              <span className="tradePanelLabel">Where {data.name.toLowerCase()} marketing gets difficult</span>
              <h2>The problems we design around.</h2>
              <div className="tradeProblemList tradeProblemListDetailed">
                {data.challenges.map(([title,text],i)=><div key={title}>
                  <span>0{i+1}</span>
                  <div><b>{title}</b><p>{text}</p></div>
                </div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="how-we-help" className="tradeDetailSection">
          <div className="tradePageShell">
            <div className="tradeSectionIntro">
              <div className="eyebrow">How Monsta helps {data.name.toLowerCase()} businesses</div>
              <h2>Marketing built around how your customers actually choose.</h2>
              <p>We connect the channels that create demand with the systems that convert and follow up the opportunity.</p>
            </div>

            <div className="tradeServiceCards tradeServiceCardsRich">
              {data.services.map(([title,href,copy],i)=>(
                <a className="tradeServiceCard" href={href} key={title}>
                  <span>0{i+1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <b>Explore service →</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="tradeSearchSection">
          <div className="tradePageShell tradeSearchGrid">
            <div>
              <div className="eyebrow">Search demand</div>
              <h2>Build visibility around the jobs that matter.</h2>
              <p>These are examples of the kinds of service themes a campaign or SEO strategy can be structured around. The actual mix should reflect your margins, capacity, locations and growth goals.</p>
            </div>
            <div className="tradeSearchTerms">
              {data.jobs.map(term=><span key={term}>{term}</span>)}
            </div>
          </div>
        </section>

        <section className="tradeProcessSection tradeJourneySection">
          <div className="tradePageShell">
            <div className="tradeSectionIntro">
              <div className="eyebrow">The customer journey</div>
              <h2>What has to happen before an enquiry becomes work.</h2>
            </div>
            <div className="tradeProcessGrid">
              {data.journey.map(([title,text],i)=><div key={title}>
                <span>{String(i+1).padStart(2,"0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section className="tradeFaqSection">
          <div className="tradePageShell tradeFaqGrid">
            <div>
              <div className="eyebrow">{data.name} marketing FAQs</div>
              <h2>Questions worth answering before you spend more on marketing.</h2>
            </div>
            <div className="tradeFaqList">
              {data.faq.map(([q,a])=><details key={q}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>)}
            </div>
          </div>
        </section>

        <section className="tradeFinalSection">
          <div className="tradePageShell tradeFinalCard">
            <div>
              <div className="eyebrow">{data.name} growth</div>
              <h2>Want more of the right {data.name.toLowerCase()} opportunities?</h2>
              <p>We’ll look at where your current lead system is strongest, where opportunities are leaking, and what we would prioritise first.</p>
            </div>
            <a className="button" href="/#contact">{data.cta} <span>→</span></a>
          </div>
        </section>

        <SiteFooter/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      </main>
    </>
  );
}
