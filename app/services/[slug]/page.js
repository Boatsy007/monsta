import { notFound } from "next/navigation";
import { services, serviceSlugs } from "../serviceData";
import { absoluteUrl } from "../../siteConfig";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";

export function generateStaticParams(){
  return serviceSlugs.map(slug=>({slug}));
}

export function generateMetadata({params}){
  const service=services[params.slug];
  if(!service) return {};
  const canonical=`/services/${params.slug}/`;
  return {
    title:{absolute:service.metaTitle},
    description:service.metaDescription,
    alternates:{canonical},
    openGraph:{
      title:service.metaTitle,
      description:service.metaDescription,
      type:"website",
      url:canonical
    },
    twitter:{
      card:"summary_large_image",
      title:service.metaTitle,
      description:service.metaDescription
    }
  };
}

export default function ServicePage({params}){
  const service=services[params.slug];
  if(!service) notFound();

  const faqSchema={
    "@context":"https://schema.org",
    "@type":"FAQPage",
    mainEntity:service.faq.map(([question,answer])=>({
      "@type":"Question",
      name:question,
      acceptedAnswer:{"@type":"Answer",text:answer}
    }))
  };

  const canonical=`/services/${params.slug}/`;

  const serviceSchema={
    "@context":"https://schema.org",
    "@type":"Service",
    "@id":absoluteUrl(`${canonical}#service`),
    url:absoluteUrl(canonical),
    name:service.name,
    description:service.description,
    provider:{"@id":absoluteUrl("/#organization")},
    areaServed:{"@type":"Country",name:"Australia"},
    audience:{"@type":"BusinessAudience",audienceType:"Trade businesses"}
  };

  const breadcrumbSchema={
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:absoluteUrl("/")},
      {"@type":"ListItem",position:2,name:"Services",item:absoluteUrl("/services/")},
      {"@type":"ListItem",position:3,name:service.shortName,item:absoluteUrl(canonical)}
    ]
  };

  return <>
    <SiteHeader/>
    <main className="site-main servicePage">
      <section className="serviceHero">
        <div className="serviceHeroGlow"></div>
        <div className="shell serviceHeroInner">
          <div className="serviceBreadcrumb"><a href="/">Home</a><span>›</span><a href="/services">Services</a><span>›</span><b>{service.shortName}</b></div>
          <div className="eyebrow">{service.kicker}</div>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <div className="serviceHeroActions">
            <a className="button" href="/#contact">Talk about your growth <span>→</span></a>
            <a className="serviceSecondaryCta" href="/#growth-score">Take the Growth Score</a>
          </div>
        </div>
      </section>

      <section className="section serviceIntroSection">
        <div className="shell serviceIntroGrid">
          <div>
            <div className="eyebrow">Why it matters</div>
            <h2>{service.introTitle}</h2>
          </div>
          <p>{service.intro}</p>
        </div>
      </section>

      <section className="section serviceBenefitsSection">
        <div className="shell">
          <div className="sectionHeader">
            <div><div className="eyebrow">What this can improve</div><h2>Built around outcomes that matter to a trade business.</h2></div>
            <p>Every recommendation starts with the commercial problem, then works backwards to the marketing or sales system required.</p>
          </div>
          <div className="serviceBenefitGrid">
            {service.benefits.map(([title,text],i)=><article className="serviceBenefitCard" key={title}>
              <span>0{i+1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section serviceIncludedSection">
        <div className="shell serviceIncludedGrid">
          <div className="serviceIncludedCopy">
            <div className="eyebrow">What we can cover</div>
            <h2>What’s included in {service.shortName}.</h2>
            <p>The exact scope depends on your business, current setup and growth priorities. We keep the work tied to the outcome rather than adding activity that does not serve a purpose.</p>
          </div>
          <div className="serviceChecklist">
            {service.includes.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section serviceProcessSection">
        <div className="shell">
          <div className="sectionHeader">
            <div><div className="eyebrow">How it works</div><h2>A practical path from diagnosis to improvement.</h2></div>
          </div>
          <div className="processGrid serviceProcessGrid">
            {service.process.map(([title,text],i)=><article className="processCard" key={title}>
              <span className="stepNum">{String(i+1).padStart(2,"0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section serviceFaqSection">
        <div className="shell serviceFaqGrid">
          <div className="serviceFaqIntro">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>What tradies usually want to know.</h2>
          </div>
          <div className="serviceFaqList">
            {service.faq.map(([q,a])=><details key={q}>
              <summary>{q}<span>+</span></summary>
              <p>{a}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="section serviceRelatedSection">
        <div className="shell">
          <div className="sectionHeader">
            <div><div className="eyebrow">Part of the wider system</div><h2>Services that work well alongside this.</h2></div>
          </div>
          <div className="serviceRelatedGrid">
            {service.related.map(slug=>{
              const item=services[slug];
              return <a href={"/services/"+slug} key={slug}>
                <span>{item.kicker}</span>
                <h3>{item.shortName}</h3>
                <p>{item.description}</p>
                <b>Explore service →</b>
              </a>;
            })}
          </div>
        </div>
      </section>

      <section className="section finalSection serviceFinalSection">
        <div className="shell finalCard">
          <div><div className="eyebrow">Built for Australian tradies</div><h2>Find the gap. Fix the system. Win more opportunities.</h2></div>
          <a className="button" href="/#contact">Talk to Monsta <span>→</span></a>
        </div>
      </section>

      <SiteFooter/>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
    </main>
  </>;
}
