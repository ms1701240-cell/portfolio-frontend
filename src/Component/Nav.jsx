

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark portfolio-nav sticky-top" aria-label="Main navigation">
      <div className="container">
        <a className="navbar-brand portfolio-brand" href="#header" aria-label="Mohamed Sayed, home">
          <span className="portfolio-brand-mark">M</span>
          <span>Mohamed Sayed</span>
        </a>
        <button
          className="navbar-toggler portfolio-nav-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavigation"
          aria-controls="portfolioNavigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNavigation">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#header">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skill">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#project">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#feeds">Feedback</a></li>
            <li className="nav-item portfolio-contact-item">
              <a className="nav-link portfolio-contact-link" href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav