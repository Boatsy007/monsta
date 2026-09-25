export default function SiteHeader({showOffer=false}){
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="header-brand" href="/" aria-label="Monsta Miami home">
          <img className="header-logo" src="/monsta-miami-logo.png" alt="Monsta Miami"/>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <a href="/services/">Services</a>
          <a href="/#process">Process</a>
          <a href="/university/">University</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="headerActions">
          <a className="button buttonSmall primaryCta" href="/#contact">Get More Jobs <span>→</span></a>
          {showOffer && <a className="offerButton headerOffer" href="/#contact">Free Month Offer</a>}
        </div>

        <details className="mobile-nav">
          <summary className="menu-button" aria-label="Open menu">
            <span></span><span></span><span></span>
          </summary>
          <nav className="mobile-nav-panel" aria-label="Mobile primary">
            <a href="/services/">Services</a>
            <a href="/#process">Process</a>
            <a href="/university/">University</a>
            <a href="/#contact">Contact</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
