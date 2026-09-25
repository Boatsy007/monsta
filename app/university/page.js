export const metadata={
  title:"Monsta University | Marketing Education for Tradies",
  description:"Practical marketing education, DIY guides, calculators and templates built for Australian trade businesses."
};

const categories=[
  ["01","Google Ads","Build campaigns around high-intent local searches and understand what drives CPL."],
  ["02","Meta Ads","Learn how to create local demand, test offers and turn attention into enquiries."],
  ["03","Websites","Understand the pages, messages and conversion elements that turn visits into leads."],
  ["04","SEO","Build long-term local visibility across Google Search and Maps."],
  ["05","Lead Follow-Up","Improve response speed, nurture enquiries and stop good opportunities going cold."],
  ["06","Sales & Growth","Measure the numbers that matter and build a repeatable path from lead to booked job."]
];

const tools=[
  ["CPL Calculator","Work out what a lead can realistically cost before your marketing stops making sense."],
  ["Marketing Budget Planner","Map a sensible monthly budget around your job value and growth target."],
  ["Lead Follow-Up Templates","Ready-to-adapt SMS and email follow-up sequences for new enquiries."],
  ["Landing Page Checklist","A practical checklist for reviewing whether a page is built to convert."]
];

const learningPath=[
  ["01","Know your numbers","Start with job value, close rate, margin and the CPL your business can afford."],
  ["02","Choose the right channel","Match Google, Meta, SEO and your website to the way customers actually find you."],
  ["03","Convert the enquiry","Improve the offer, landing page, response time and follow-up."],
  ["04","Measure booked work","Track marketing against genuine opportunities and jobs, not vanity metrics."]
];

export default function University(){
  return <>
    <header className="site-header universityHeader">
      <div className="header-inner">
        <a className="header-brand" href="/"><img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/></a>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/university" aria-current="page">University</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="headerActions">
          <a className="button buttonSmall primaryCta" href="/#contact">Get More Jobs <span>→</span></a>
        </div>

        <details className="mobile-nav">
          <summary className="menu-button" aria-label="Open menu"><span></span><span></span><span></span></summary>
          <nav className="mobile-nav-panel" aria-label="Mobile primary">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/university">University</a>
            <a href="/#contact">Contact</a>
          </nav>
        </details>
      </div>
    </header>

    <main id="top" className="site-main universityPage">
      <section className="universityHero">
        <div className="universityGlow"></div>
        <div className="universityShell universityHeroGrid">
          <div className="universityHeroCopy">
            <div className="universityBadge"><span>MU</span> Monsta University</div>
            <div className="eyebrow">Free marketing education for tradies</div>
            <h1>Learn the marketing.<br/><span>Understand the numbers.</span></h1>
            <p>Practical lessons, DIY guides, tools and templates designed to help Australian trade businesses make smarter marketing decisions.</p>
            <div className="universityHeroActions">
              <a className="button" href="#learn">Start learning <span>↓</span></a>
              <a className="universityGhostCta" href="#diy">Explore DIY tools <span>→</span></a>
            </div>
          </div>

          <div className="universityHeroCard">
            <div className="universityHeroCardTop">
              <span className="universityMiniLabel">Your starting point</span>
              <span className="universityPulse"></span>
            </div>
            <h2>Marketing should make commercial sense.</h2>
            <p>Monsta University is being built around the questions tradies actually need answered before spending money on marketing.</p>
            <div className="universityStatRow">
              <div><strong>06</strong><span>core topics</span></div>
              <div><strong>DIY</strong><span>tools & templates</span></div>
              <div><strong>AU</strong><span>trade focused</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="universitySection">
        <div className="universityShell">
          <div className="universitySectionHead">
            <div>
              <div className="eyebrow">Choose what you want to learn</div>
              <h2>Built around the way tradies actually grow.</h2>
            </div>
            <p>Each topic will become its own library of practical lessons. The structure is ready now; you can add the content as Monsta grows.</p>
          </div>

          <div className="universityCategoryGrid">
            {categories.map(([num,title,desc])=>(
              <article className="universityCategoryCard" key={title}>
                <span className="universityCardNum">{num}</span>
                <div className="universityCategoryIcon">↗</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="universityComing">Lessons coming soon</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diy" className="universitySection universityDiySection">
        <div className="universityShell">
          <div className="universitySectionHead">
            <div>
              <div className="eyebrow">Do it yourself</div>
              <h2>Useful tools before you spend a dollar.</h2>
            </div>
            <p>Simple resources for business owners who want to understand or improve their own marketing before bringing in help.</p>
          </div>

          <div className="universityToolGrid">
            {tools.map(([title,desc],index)=>(
              <article className="universityToolCard" key={title}>
                <div className="universityToolTop"><span>0{index+1}</span><b>DIY</b></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="universityToolStatus">Resource coming soon</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="universitySection universityFeatured">
        <div className="universityShell">
          <div className="universitySectionHead">
            <div>
              <div className="eyebrow">Featured lessons</div>
              <h2>The questions every growing trade business should understand.</h2>
            </div>
            <p>These are ready as article slots. Add your own lessons later without needing to redesign the page.</p>
          </div>

          <div className="universityLessonGrid">
            <article className="universityLessonCard universityLessonFeature">
              <div className="universityLessonMeta"><span>Google Ads</span><span>Guide</span></div>
              <h3>What should a tradie actually pay for a lead?</h3>
              <p>Add your first cornerstone lesson here. This featured position is designed for your most useful or highest-intent educational content.</p>
              <span className="universityLessonLink">Coming soon</span>
            </article>
            <article className="universityLessonCard">
              <div className="universityLessonMeta"><span>Websites</span><span>Checklist</span></div>
              <h3>Why traffic does not always turn into enquiries.</h3>
              <p>Use this slot for a conversion-focused lesson or practical website breakdown.</p>
              <span className="universityLessonLink">Coming soon</span>
            </article>
            <article className="universityLessonCard">
              <div className="universityLessonMeta"><span>Follow-Up</span><span>Playbook</span></div>
              <h3>What happens after the lead comes in?</h3>
              <p>Use this slot for sales process, response speed and lead nurture education.</p>
              <span className="universityLessonLink">Coming soon</span>
            </article>
          </div>
        </div>
      </section>

      <section className="universitySection universityPathSection">
        <div className="universityShell">
          <div className="universitySectionHead">
            <div>
              <div className="eyebrow">Start here</div>
              <h2>A simple path from guessing to understanding.</h2>
            </div>
            <p>When the lesson library grows, this can become a guided beginner pathway through Monsta University.</p>
          </div>

          <div className="universityPath">
            {learningPath.map(([num,title,desc])=>(
              <div className="universityPathStep" key={num}>
                <span>{num}</span>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="universitySection universityFinal">
        <div className="universityShell">
          <div className="universityFinalCard">
            <div>
              <div className="eyebrow">Rather have Monsta do it?</div>
              <h2>Learn it yourself. Or let us build the system for you.</h2>
              <p>University is here to make marketing clearer. When you want help putting it into practice, Monsta is ready.</p>
            </div>
            <a className="button" href="/#contact">Get More Jobs <span>→</span></a>
          </div>
        </div>
      </section>

      <footer className="universityFooter">
        <div className="universityShell footerInner">
          <img src="/monsta-miami-logo.png" alt="Monsta Miami"/>
          <div className="footerLinks"><a href="/">Home</a><a href="/#services">Services</a><a href="/university">University</a><a href="/#contact">Contact</a></div>
          <a className="footerCta" href="/#contact">Get More Jobs →</a>
        </div>
      </footer>
    </main>
  </>;
}
