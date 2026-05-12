

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav " style={{zIndex:10}}>
  <div className="container-fluid">
    <a className="navbar-brand text-danger fs-3" href="#">M.S</a>
    <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#about">ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a class="nav-link text-danger" href="#skill">SKILLS</a>
        </li>
        <li className="nav-item">
          <a class="nav-link text-danger" href="#project">PROJECTS</a>
        </li>
         <li className="nav-item">
          <a className="nav-link text-danger" href="#feeds">FEEDBACK</a>
        </li>
         <li className="nav-item">
          <a className="nav-link text-danger" href="#contact">Contact</a>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav