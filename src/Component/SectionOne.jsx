const SectionOne = () => {
  return (
    // تأكد إن الـ div ده ملوش position absolute
    <div className="py-5" style={{  minHeight: '50vh' }}>
      <div className="container">
        <div className="row text-center">
            <div className="col-12">
            <span className="badge rounded-pill text-danger bg p-3 fs-3">About Me</span>
            </div> 
        </div>
        <div className="row mt-5 d-flex justify-centent-between gx-5 text-dark">
            <div className="col-12 col-md-7 text-left">
            <h4> <span className="badge  text-danger bg p-3 fs-3">WHO AM I?</span></h4>
                <p className="lead">"I am a passionate MERN Stack Developer based in Alexandria, Egypt. I specialize in building high-quality web applications using MongoDB, Express.js, React, and Node.js. My goal is to create seamless user experiences and efficient backend systems that solve real-world problems."</p>
            </div>
             <div className="col-12 col-md-4 text-left">
            <h4> <span className="badge  text-danger bg p-3 fs-3">Personal Details</span></h4>
                
                   <ul className="list-unstyled mb-0">
            <li className="mb-3">
                <strong className="text-dark">Name:</strong> 
                <span className="ms-2 text-secondary">Mohamed Sayed</span>
            </li>
            <li className="mb-3">
                <strong className="text-dark">Email:</strong> 
                <span className="ms-2 text-danger">ms1701240@gmail.com</span>
            </li>
            <li className="mb-3">
                <strong className="text-dark">Age:</strong> 
                <span className="ms-2 text-secondary">23 Years</span>
            </li>
            <li className="mb-3">
                <strong className="text-dark">Education:</strong> 
                <span className="ms-2 text-secondary">Bachelor of Law</span>
            </li>
            <li className="mb-3">
                <strong className="text-dark">From:</strong> 
                <span className="ms-2 text-secondary">Alexandria, Egypt</span>
            </li>
            <li>
                <strong className="text-dark">Freelance:</strong> 
                <span className="ms-2 text-success fw-bold">Available</span>
            </li>
        </ul>
                
            </div>
            <div className="col-12  d-flex justify-content-around">
             <a 
  href="/portfolio-frontend/CV.pdf" 
  download="Mohamed_Sayed_CV.pdf" 
  className="btn btn-danger btn-lg rounded-pill px-4 shadow-sm fw-bold mt-4 "
>
  Download CV
  </a>
          <a 
  href="/portfolio-frontend/MohamedSayedResume.pdf" 
  download="MohamedSayedRESUME.pdf" 
  className="btn btn-danger btn-lg rounded-pill px-2 shadow-sm fw-bold mt-4"
>
  Download Resume
  </a>
            </div>
        </div>
      </div>
    </div>
  )
}
export default SectionOne