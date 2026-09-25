import CalculatorClient from "./CalculatorClient";
import GrowthScoreClient from "./GrowthScoreClient";

const trades=[
  ["⌂","Roofing"],
  ["⌕","Plumbing"],
  ["ϟ","Electrical"],
  ["❄","HVAC"],
  ["♜","Fencing"],
  ["▦","Building"],
  ["◒","Landscaping"],
];

const services=[
  ["◎","Growth Packages","A connected system across acquisition, conversion and follow-up.","growth-packages"],
  ["∞","Meta Ads","Reach local homeowners and create demand in your service area.","meta-ads"],
  ["◢","Google PPC","Get found when people are actively searching for your trade.","google-ppc"],
  ["▤","CRM & Lead Nurture","Track, nurture and follow up opportunities more consistently.","crm-lead-nurture"],
  ["▣","Website Development","Turn traffic into enquiries with a clear, scalable website.","website-development"],
  ["⌕","SEO","Build long-term local visibility and be found when it matters.","seo"],
  ["◉","Social Media","Stay visible with proof, useful content and consistent activity.","social-media-management"],
  ["↗","Appointment Setting","Work new leads and follow up outstanding quotes more consistently.","appointment-setting"],
];

const steps=[
  ["01","Enquiry","Tell us about your trade, service area and growth goals."],
  ["02","Plan","We map the right channel mix and customer journey for your business."],
  ["03","Launch","We build the campaigns, pages and follow-up needed to go live."],
  ["04","Grow","We keep improving the system around the jobs you actually want."],
];

export default function Home(){
  return <>
        <header className="site-header">
          <div className="header-inner">
            <a className="header-brand" href="#top"><img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>

            <nav className="desktop-nav" aria-label="Primary">
              <a href="/services">Services</a>
              <a href="#results">Results</a>
              <a href="#process">Process</a>
              <a href="/university">University</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="headerActions">
              <a className="button buttonSmall primaryCta" href="#contact">Get More Jobs <span>→</span></a>
              <a className="offerButton headerOffer" href="#contact">Free Month Offer</a>
            </div>

            <details className="mobile-nav">
              <summary className="menu-button" aria-label="Open menu">
                <span></span><span></span><span></span>
              </summary>
              <nav className="mobile-nav-panel" aria-label="Mobile primary">
                <a href="/services">Services</a>
                <a href="#results">Results</a>
                <a href="#process">Process</a>
                <a href="/university">University</a>
                <a href="#contact">Contact</a>
              </nav>
            </details>
          </div>
        </header>

    <main id="top" className="site-main">
    <section className="hero">
      <div className="heroGlow heroGlowOne"></div>
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">Digital marketing for tradies</div>
          <h1>More jobs.<br/><span>Less chasing.</span></h1>
          <p>We help tradies get found, generate more enquiries and turn them into booked work.</p>
          <div className="heroActions">
            <a className="button primaryCta" href="#contact">Get More Jobs <span>→</span></a>
            <a className="offerButton" href="#contact">Free Month Offer</a>
          </div>
        </div>

        <GrowthScoreClient variant="hero"/>
      </div>
    </section>

    <section className="tradeSection">
      <div className="shell tradebar">
        {trades.map(([icon,name])=>{
          const slug=name.toLowerCase();
          return <a className="tradeItem" key={name} href={`/trades/${slug}`} aria-label={`Learn how Monsta helps ${name.toLowerCase()} businesses`}>
            {name==="Roofing"
              ? <img className="tradeWordmark" src="/roofing-wordmark.svg" alt="Roofing"/>
              : name==="Plumbing"
                ? <img className="tradeWordmark" src="/plumbing-wordmark.webp" alt="Plumbing"/>
                : <><b>{icon}</b><span>{name}</span></>}
          </a>
        })}
      </div>
    </section>


    <section className="section founderStory">
      <div className="shell founderStoryGrid">
        <div className="founderStoryVideoWrap">
          <div className="founderStoryVideo">
            <div className="founderStoryVideoGlow"></div>
            <div className="founderStoryVideoOverlay">
              <span className="founderStoryKicker">Meet Rohan</span>
              <button className="founderStoryPlay" type="button" aria-label="Play introduction video">▶</button>
              <span className="founderStoryVideoLabel">Video coming soon</span>
            </div>
          </div>
        </div>

        <div className="founderStoryCopy">
          <div className="eyebrow">From the tools to digital</div>
          <h2>I might not have been the best welder.<br/><span>I sucked as a fabricator.</span></h2>
          <p>But working as a boilermaker taught me what life on the tools is actually like — long days, early starts, quoting after hours and constantly needing the next job lined up.</p>
          <p>Eventually I realised my real strength was marketing. That’s what led me to Monsta: helping tradies grow online instead of trying to be the bloke building everything myself.</p>

          <div className="founderStoryQuote">
            <span>“</span>
            <p>I might not be the bloke you want welding your next job — but if you want more leads coming into your business, that’s a different story.</p>
          </div>

          <a className="founderStoryLink" href="#contact">See how Monsta can help <span>→</span></a>
        </div>
      </div>
    </section>

    <section className="section growthFlow">
      <div className="shell">
        <div className="sectionHeader growthFlowHeader">
          <div>
            <div className="eyebrow">From ad spend to booked jobs</div>
            <h2>A marketing system built around the outcome that matters.</h2>
          </div>
          <p>Not just clicks and impressions. We connect the steps from being found to turning a genuine enquiry into booked work.</p>
        </div>

        <div className="growthFlowGrid">
          <article className="growthFlowCard">
            <span>01</span>
            <div className="growthFlowIcon">⌕</div>
            <h3>Get found</h3>
            <p>Put your business in front of local people already looking for the work you do.</p>
          </article>
          <article className="growthFlowCard">
            <span>02</span>
            <div className="growthFlowIcon">↗</div>
            <h3>Generate enquiries</h3>
            <p>Use focused ads and landing pages designed to turn attention into genuine leads.</p>
          </article>
          <article className="growthFlowCard">
            <span>03</span>
            <div className="growthFlowIcon">◉</div>
            <h3>Follow up faster</h3>
            <p>Keep good opportunities moving instead of letting valuable enquiries go cold.</p>
          </article>
          <article className="growthFlowCard">
            <span>04</span>
            <div className="growthFlowIcon">✓</div>
            <h3>Book more work</h3>
            <p>Measure the system around quoting opportunities and booked jobs, not vanity metrics.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section calculatorSection">
      <div className="shell calculatorSectionGrid">
        <div className="calculatorSectionIntro">
          <div className="eyebrow">Lead potential calculator</div>
          <h2>Now put some numbers around the opportunity.</h2>
          <p>Choose your trade and ad spend to see an indicative estimate of how many leads that budget could generate.</p>
        </div>
        <CalculatorClient trades={trades}/>
      </div>
    </section>

    <section id="services" className="section services">
      <div className="shell">
        <div className="sectionHeader">
          <div>
            <div className="eyebrow">Our services</div>
            <h2>Everything you need for a steady flow of jobs.</h2>
          </div>
          <p>A complete digital system built around the way trade businesses actually win work.</p>
        </div>

        <div className="serviceGrid">
          {services.map(([icon,name,desc,slug])=>
            <article className="serviceCard" key={name}>
              <div className="serviceIcon">{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <a href={`/services/${slug}`}>Learn more <span>→</span></a>
            </article>
          )}
        </div>
      </div>
    </section>

    <section id="results" className="section results">
      <div className="shell resultsGrid">
        <div className="resultsCopy">
          <div className="eyebrow">What the system is built to improve</div>
          <h2>More visibility.<br/>Better follow-up.<br/>More booked work.</h2>
          <p>Every part of the system is designed around one commercial goal: turning attention into real enquiries and real jobs.</p>
          <div className="metricRow">
            <div><b>01</b><span>Get found</span></div>
            <div><b>02</b><span>Convert enquiries</span></div>
            <div><b>03</b><span>Follow up faster</span></div>
          </div>
        </div>

        <div className="resultFeature">
          <div className="resultLabel">What we optimise</div>
          <div className="optimiseList">
            <div><span>01</span><div><b>Visibility</b><p>Show up when local customers are actively looking for your trade.</p></div></div>
            <div><span>02</span><div><b>Conversion</b><p>Turn more of that attention into genuine enquiries and quoting opportunities.</p></div></div>
            <div><span>03</span><div><b>Follow-up</b><p>Respond faster and keep valuable leads moving instead of going cold.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="section contact">
      <div className="shell contactCard">
        <div className="contactCopy">
          <div className="eyebrow">Ready for more jobs?</div>
          <h2>Let’s grow your business.</h2>
          <p>Tell us what you do and where you work. We’ll show you what we’d focus on first.</p>
          <div className="contactPoints"><span>✓ No obligation</span><span>✓ Tailored to your business</span><span>✓ Clear next step</span></div>
        </div>
        <form className="leadForm">
          <input placeholder="Full name"/>
          <input placeholder="Phone number"/>
          <select defaultValue=""><option value="" disabled>Your trade / business type</option>{trades.map(([,t])=><option key={t}>{t}</option>)}</select>
          <button type="button">Show Me The Opportunity <span>→</span></button>
        </form>
      </div>
    </section>

    <section id="process" className="section process">
      <div className="shell">
        <div className="sectionHeader processHeader">
          <div><div className="eyebrow">Our process</div><h2>Simple. Strategic. Effective.</h2></div>
          <p>A clear four-step path from first conversation to a marketing system that is live and improving.</p>
        </div>
        <div className="processGrid">
          {steps.map(([num,title,desc])=>
            <article className="processCard" key={num}>
              <span className="stepNum">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          )}
        </div>
      </div>
    </section>

    <section className="section finalSection">
      <div className="shell finalCard">
        <div><div className="eyebrow">More jobs are closer than you think.</div><h2>Build a system that brings the work to you.</h2></div>
        <a className="button" href="#contact">Get More Jobs <span>→</span></a>
      </div>
    </section>

    <footer>
      <div className="shell footerInner">
        <img src="/monsta-miami-logo.png" alt="Monsta Miami"/>
        <div className="footerLinks"><a href="/services">Services</a><a href="#results">Results</a><a href="#process">Process</a><a href="/university">University</a><a href="#contact">Contact</a></div>
        <a className="footerCta" href="#contact">Get More Jobs →</a>
      </div>
    </footer>
  </main>
  </>;
}