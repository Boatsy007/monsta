import { notFound } from "next/navigation";
import { publishedCaseStudies } from "../resultData";

export function generateStaticParams(){
  return publishedCaseStudies.map(item=>({slug:item.slug}));
}

export async function generateMetadata({params}){
  const {slug}=await params;
  const item=publishedCaseStudies.find(entry=>entry.slug===slug);
  if(!item) return {};
  return {
    title:`${item.headline} | Monsta Miami Case Study`,
    description:item.summary
  };
}

export default async function CaseStudyPage({params}){
  const {slug}=await params;
  const item=publishedCaseStudies.find(entry=>entry.slug===slug);
  if(!item) notFound();

  return <>
    <header className="site-header">
      <div className="header-inner">
        <a className="header-brand" href="/"><img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
        <nav className="desktop-nav" aria-label="Primary"><a href="/services">Services</a><a href="/results">Results</a><a href="/university">University</a><a href="/#contact">Contact</a></nav>
        <div className="headerActions"><a className="button buttonSmall primaryCta" href="/#contact">Get More Jobs <span>→</span></a></div>
      </div>
    </header>

    <main className="site-main proofPage">
      <section className="proofHero proofCaseHero">
        <div className="proofHeroGlow"></div>
        <div className="shell proofHeroInner">
          <div className="proofBreadcrumb"><a href="/results">Results</a><span>›</span><b>{item.trade}</b></div>
          <div className="eyebrow">{item.trade} · {item.location} · {item.period}</div>
          <h1>{item.headline}</h1>
          <p>{item.summary}</p>
          <div className="proofServiceTags">{item.services.map(service=><span key={service}>{service}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="shell proofMetricGrid">
          {item.metrics.map(metric=><article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.context}</p>
          </article>)}
        </div>
      </section>

      <section className="section proofNarrativeSection">
        <div className="shell proofNarrativeGrid">
          <div>
            <div className="eyebrow">The challenge</div>
            <h2>{item.challenge}</h2>
          </div>
          <div>
            <div className="eyebrow">What Monsta changed</div>
            <ol>{item.approach.map(step=><li key={step}>{step}</li>)}</ol>
          </div>
        </div>
      </section>

      {item.testimonial && <section className="section proofQuoteSection">
        <div className="shell proofQuoteCard">
          <blockquote>“{item.testimonial.quote}”</blockquote>
          <p>{item.testimonial.name} · {item.testimonial.role}</p>
        </div>
      </section>}

      <section className="section proofEvidenceSection">
        <div className="shell">
          <div className="eyebrow">Evidence & context</div>
          <p>{item.evidenceNote}</p>
          {item.clientDisclosure && <small>{item.clientDisclosure}</small>}
        </div>
      </section>

      <section className="section finalSection">
        <div className="shell finalCard">
          <div><div className="eyebrow">Your business will have different numbers.</div><h2>Build the system around your market, services and capacity.</h2></div>
          <a className="button" href="/#contact">Talk to Monsta <span>→</span></a>
        </div>
      </section>
    </main>
  </>;
}
