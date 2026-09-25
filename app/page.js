import CalculatorClient from "./CalculatorClient";

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
  ["◢","Google Ads","Get found when people are actively searching for your trade."],
  ["∞","Meta Ads","Reach local homeowners and create demand in your service area."],
  ["▣","Websites","Turn traffic into enquiries with a clear, high-converting website."],
  ["▤","Follow Up","Respond faster and keep good leads from slipping through the cracks."],
  ["⌕","SEO","Build long-term local visibility and be found when it matters."],
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
              <a href="#services">Services</a>
              <a href="#results">Results</a>
              <a href="#process">Process</a>
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
                <a href="#services">Services</a>
                <a href="#results">Results</a>
                <a href="#process">Process</a>
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

        <CalculatorClient trades={trades}/>
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
          {services.map(([icon,name,desc])=>
            <article className="serviceCard" key={name}>
              <div className="serviceIcon">{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <a href="#contact">Learn more <span>→</span></a>
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
        <div className="footerLinks"><a href="#services">Services</a><a href="#results">Results</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <a className="footerCta" href="#contact">Get More Jobs →</a>
      </div>
    </footer>
  </main>
  </>;
}