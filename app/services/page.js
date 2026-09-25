import { services, serviceSlugs } from "./serviceData";

export const metadata={
  title:"Digital Marketing Services for Tradies | Monsta Miami",
  description:"Explore Monsta Miami digital marketing services for Australian tradies, including Google PPC, Meta Ads, SEO, websites, CRM, lead nurture and appointment setting."
};

export default function ServicesPage(){
  return <>
    <header className="site-header">
      <div className="header-inner">
        <a className="header-brand" href="/"><img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
        <nav className="desktop-nav" aria-label="Primary"><a href="/">Home</a><a href="/#results">Results</a><a href="/university">University</a><a href="/#contact">Contact</a></nav>
        <div className="headerActions"><a className="button buttonSmall primaryCta" href="/#contact">Get More Jobs <span>→</span></a></div>
      </div>
    </header>
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
      <footer>
        <div className="shell footerInner">
          <a href="/"><img src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>
          <div className="footerLinks"><a href="/">Home</a><a href="/#results">Results</a><a href="/university">University</a><a href="/#contact">Contact</a></div>
          <a className="footerCta" href="/#contact">Get More Jobs →</a>
        </div>
      </footer>
    </main>
  </>;
}
