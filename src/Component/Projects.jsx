import img1 from '../img/assests/لقطة شاشة 2026-01-26 221235.png'
import img2 from '../img/assests/لقطة شاشة 2026-01-26 221351.png'
import img3 from '../img/assests/لقطة شاشة 2026-01-26 221428.png'
import img4 from '../img/assests/لقطة شاشة 2025-12-21 152431.png'
import img5 from '../img/assests/لقطة شاشة 2026-01-26 222914.png'
import img6 from '../img/assests/لقطة شاشة 2026-01-26 230308.png'
import img7 from '../img/assests/لقطة شاشة 2025-12-21 141918.png'
import img8 from '../img/assests/Screenshot 2026-03-11 040029.png'
import img9 from '../img/assests/Screenshot 2026-05-10 001013.png'
import { image } from 'framer-motion/client'
const Projects = () => {
    const projectsData = [
  {
    id: 1,
    title: "CLOTHES MARKET",
    description: 'Clothes market web-site by used vanila java script html css bootstrap',
    image: img1, // اسم الصورة اللي هتحطها في فولدر الـ assets
    demoLink: 'https://ms1701240-cell.github.io/clothes/'
  },
  {
    id: 2,
    title: "MARKET",
    description: 'Market web site by used framework react.js',
    image: img2,
    demoLink: "https://elegentstore.netlify.app/#"
  },
   {
    id: 3,
    title: "Hero Section1",
    description: 'used css html bootstrap',
    image: img3,
    demoLink: "https://ms1701240-cell.github.io/Hero-section/"
  },
   {
    id:4 ,
    title: "Landing-Page",
    description: 'used css html bootstrap',
    image: img4,
    demoLink: 'https://ms1701240-cell.github.io/portofolio/'
  },
  {
    id:5 ,
    title: "Hero section2",
    description: 'used css html bootstrap',
    image: img5,
    demoLink: 'https://ms1701240-cell.github.io/hero-sec/'
  },
  {
     id: 6,
    title: "School-tools web-site",
    description: 'web-site by used frame work react.js',
    image: img6,
    demoLink: "https://ms1701240-cell.github.io/school/"
  },
   {
     id: 7,
    title: "CRUD Opperator",
    description: 'by used html css javascript',
    image: img7,
    demoLink: "https://ms1701240-cell.github.io/portofolio/crud%20schooltools/Crud2.html"
  },
   {
     id: 8,
    title: "Simple Store web-site by React.js",
    description: '"A modern E-commerce platform built with React.js and Tailwind CSS',
    image: img8,
    demoLink: "https://storestyles.netlify.app"
  },
  {
    id:9,
    title:"KORACOM WEB-SITE",
    description:"web-site by next.js for football news ",
    image:img9,
    demoLink: "https://koralivecom.netlify.app"
  }
];
  return (
    <div className="proj">
      <h4 className="text-center mb-5"> 
                <span className="badge mt-5 text-danger bg-dark border border-danger p-3 fs-3">MY PROJECTS</span>
            </h4>
        <div className="container">
            <div className="row gy-3">
                {projectsData.map((items,index)=>{
                    return <div className="col-12 col-md-6" key={index} data-aos='fade-up' data-aos-delay={index * 100}>
                        <div class="card bg-danger " >
  <img src={items.image} class="card-img-top" alt="..."/>
  <div className="card-body h-100 border border-secondary shadow-lg">
    <h5 className="card-title">{items.title}</h5>
    <p className="card-text">{items.description}</p>
    <a href={items.demoLink}  target='_blank' class="btn btn-dark">View Project</a>
  </div>
</div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Projects