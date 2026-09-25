export default function SiteFooter(){
  return (
    <footer>
      <div className="shell footerInner">
        <a href="/" aria-label="Monsta Miami home">
          <img src="/monsta-miami-logo.png" alt="Monsta Miami"/>
        </a>
        <div className="footerLinks">
          <a href="/services/">Services</a>
          <a href="/results/">Results</a>
          <a href="/#process">Process</a>
          <a href="/university/">University</a>
          <a href="/#contact">Contact</a>
        </div>
        <a className="footerCta" href="/#contact">Get More Jobs →</a>
      </div>
    </footer>
  );
}
