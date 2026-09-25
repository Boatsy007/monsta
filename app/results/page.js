import { publishedCaseStudies, proofFramework } from "./resultData";

export const metadata={
  title:"Digital Marketing Results & Case Studies | Monsta Miami",
  description:"See how Monsta Miami measures digital marketing performance for Australian tradies, with verified case studies covering acquisition, conversion, follow-up and booked-work outcomes."
};

function Header(){
  return <header className="site-header">
    <div className="header-inner">
      <a className="header-brand" href="/"><img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
      <nav className="desktop-nav" aria-label="Primary">
        <a href="/services">Services</a>
        <a href="/results">Results</a>
        <a href="/university">University</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className="headerActions"><a className="button buttonSmall primaryCta" href="/#contact">Get More Jobs <span>→</span></a></div>
    </div>
  </header>;
}

export default function ResultsPage(){
  const hasCases=publishedCaseStudies.length>0;

  return <>
    <Header/>
    <main className="site-main proofPage">
      <section className="proofHero">
        <div className="proofHeroGlow"></div>
        <div className="shell proofHeroInner">
          <div className="eyebrow">Results & case studies</div>
          <h1>Proof should show the whole journey, not just the best-looking number.</h1>
          <p>Monsta Miami case studies are designed to show where leads came from, what they cost, what happened after the enquiry and — where the client can verify it — what turned into quoted or booked work.</p>
          <div className="proofHeroActions">
            <a className="button" href="/#contact">Talk about your growth <span>→</span></a>
            <a className="proofSecondaryCta" href="#proof-method">How we measure results</a>
          </div>
        </div>
      </section>

      <section id="proof-method" className="section proofFrameworkSection">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">The proof framework</div>
              <h2>Every case study will answer three questions.</h2>
            </div>
            <p>No vanity-metric theatre. The goal is to connect marketing activity to genuine commercial opportunities as far as the available data allows.</p>
          </div>
          <div className="proofFrameworkGrid">
            {proofFramework.map((item,i)=><article className="proofFrameworkCard" key={item.key}>
              <span>{String(i+1).padStart(2,"0")} · {item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section proofLibrarySection">
        <div className="shell">
          <div className="sectionHeader">
            <div>
              <div className="eyebrow">Verified case-study library</div>
              <h2>{hasCases ? "Real campaigns. Real context." : "Built for real evidence when it is ready."}</h2>
            </div>
            <p>{hasCases
              ? "Open a case study to see the challenge, work completed, measured outcomes and the context behind the numbers."
              : "The case-study system is ready. We will publish campaign metrics and testimonials here only after the underlying data has been checked and permission has been confirmed where required."}</p>
          </div>

          {hasCases ? <div className="proofCaseGrid">
            {publishedCaseStudies.map(item=><a className="proofCaseCard" href={"/results/"+item.slug} key={item.slug}>
              <div className="proofCaseMeta"><span>{item.trade}</span><span>{item.location}</span></div>
              <h3>{item.headline}</h3>
              <p>{item.summary}</p>
              <div className="proofCaseMetrics">
                {item.metrics.slice(0,3).map(metric=><div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}
              </div>
              <strong>View case study →</strong>
            </a>)}
          </div> : <div className="proofEmptyState">
            <div className="proofEmptyBadge">No fabricated numbers</div>
            <h3>We would rather publish nothing than manufacture proof.</h3>
            <p>When a case study is added, this page is already built to show campaign period, services used, spend, lead definitions, qualified opportunities, cost metrics, booked-work data where available, methodology notes and client-approved testimonials.</p>
            <div className="proofFieldGrid">
              <span>Campaign period</span><span>Services used</span><span>Ad spend</span><span>Lead volume</span>
              <span>Qualified leads</span><span>Cost per lead</span><span>Booked work</span><span>Client testimonial</span>
            </div>
          </div>}
        </div>
      </section>

      <section className="section proofStandardsSection">
        <div className="shell proofStandardsGrid">
          <div>
            <div className="eyebrow">How proof gets published</div>
            <h2>Context stays attached to the result.</h2>
          </div>
          <div className="proofStandardsList">
            <div><span>01</span><p><b>Define the metric.</b> A lead, qualified lead, appointment and booked job are not treated as the same thing.</p></div>
            <div><span>02</span><p><b>State the period.</b> Results are tied to a specific campaign or reporting window.</p></div>
            <div><span>03</span><p><b>Show the source.</b> Platform data, CRM data and client-confirmed sales outcomes are identified where relevant.</p></div>
            <div><span>04</span><p><b>Keep the limitations.</b> A case study describes what happened for that business; it is not a promise that another business will get the same result.</p></div>
          </div>
        </div>
      </section>

      <section className="section finalSection">
        <div className="shell finalCard">
          <div><div className="eyebrow">Your numbers matter more than our claims.</div><h2>Build a marketing system you can actually measure.</h2></div>
          <a className="button" href="/#contact">Talk to Monsta <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <a href="/"><img src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
          <div className="footerLinks"><a href="/services">Services</a><a href="/results">Results</a><a href="/university">University</a><a href="/#contact">Contact</a></div>
          <a className="footerCta" href="/#contact">Get More Jobs →</a>
        </div>
      </footer>
    </main>
  </>;
}
