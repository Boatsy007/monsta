import { services, serviceSlugs } from "./serviceData";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

export const metadata={
  title:"Digital Marketing Services for Tradies",
  description:"Explore Monsta Miami digital marketing services for Australian tradies, including Google PPC, Meta Ads, SEO, websites, CRM, lead nurture and appointment setting.",
  alternates:{canonical:"/services/"},
  openGraph:{
    title:"Digital Marketing Services for Tradies | Monsta Miami",
    description:"Google PPC, Meta Ads, SEO, websites, CRM, lead nurture and appointment setting for Australian tradies.",
    url:"/services/",
  },
  twitter:{
    card:"summary_large_image",
    title:"Digital Marketing Services for Tradies | Monsta Miami",
    description:"Google PPC, Meta Ads, SEO, websites, CRM, lead nurture and appointment setting for Australian tradies.",
  }
};

export default function ServicesPage(){
  return <>
    <SiteHeader/>
    <main className="site-main servicePage serviceHubPage">
      <section className="serviceHero">
        <div className="serviceHeroGlow"></div>
        <div className="shell serviceHeroInner">
          <div className="eyebrow">Digital marketing services for tradies</div>
          <h1>One growth system. <span>Eight ways to strengthen it.</span></h1>
          <p>From generating demand to converting and following up leads, explore the services Monsta Miami can combine around the way your trade business actually wins work.</p>
          <div className="serviceHeroActions"><a className="button" href="/#growth-score">Find your biggest gap <span>→</span></a></div>
        </div>
      </section>
      <section className="section">
        <div className="shell serviceHubGrid">
          {serviceSlugs.map(slug=>{
            const service=services[slug];
            return <a className="serviceHubCard" href={"/services/"+slug} key={slug}>
              <span>{service.kicker}</span>
              <h2>{service.shortName}</h2>
              <p>{service.description}</p>
              <b>Explore service →</b>
            </a>;
          })}
        </div>
      </section>
      <SiteFooter/>
    </main>
  </>;
}
