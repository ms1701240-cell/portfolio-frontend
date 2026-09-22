

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav " style={{zIndex:10}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white font-bold fs-3" href="#">M.S</a>
    <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <a className="nav-link active text-white font-bold" aria-current="page" href="#header">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a class="nav-link text-white" href="#skill">SKILLS</a>
        </li>
        <li className="nav-item">
          <a class="nav-link text-white" href="#project">PROJECTS</a>
        </li>
         <li className="nav-item">
          <a className="nav-link text-white" href="#feeds">FEEDBACK</a>
        </li>
         <li className="nav-item">
          <a className="nav-link text-white text-uppercase" href="#contact">Contact</a>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav