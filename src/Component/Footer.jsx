

 const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          {/* اسم المشروع أو اللوجو */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Feedback App</h5>
            <p>Thank you for visiting our site. Your feedback is essential for our growth and helps us continuously provide better services.</p>
          </div>

          

          {/* معلومات التواصل */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-2">
            <h5 className="text-uppercase text-center mb-4 font-weight-bold text-primary">Contact</h5>
            <div className=" d-flex justify-content-around mt-5">
               <a href='https://linkedin.com/in/mohamed-sayed-9203b1402' target="_blank" className="text-white ">
          <i className="fab fa-linkedin fa-2x" style={{ color: "#0077b5" }}></i>
          </a>
            <a href='https://github.com/ms1701240-cell' target="_blank" className="text-white ">
               <i class="fa-brands fa-github fa-2x" ></i>
             </a>
            <a href='https://wa.me/201287025435' target="_blank" rel="noreferrer" className="text-white ">
               <i className="fa-brands fa-whatsapp fa-2x" style={{color:" green"}}></i>
             </a>
              <a href='mailto:ms1701240@gmail.com' target="_blank" className="text-white ">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="wgmail" ></img>
             </a>
            </div>
          
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p>
              Copyright ©2026 All rights reserved by: 
              <strong className="text-primary"> Mohamed Sayed</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;