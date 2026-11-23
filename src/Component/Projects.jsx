import img1 from '../img/assests/لقطة شاشة 2026-01-26 221235.png'
import img2 from '../img/assests/لقطة شاشة 2026-01-26 221351.png'
import img3 from '../img/assests/لقطة شاشة 2026-01-26 221428.png'
import img4 from '../img/assests/لقطة شاشة 2025-12-21 152431.png'
import img5 from '../img/assests/لقطة شاشة 2026-01-26 222914.png'
import img6 from '../img/assests/لقطة شاشة 2026-01-26 230308.png'
import img7 from '../img/assests/لقطة شاشة 2025-12-21 141918.png'
import img8 from '../img/assests/Screenshot 2026-03-11 040029.png'
import img9 from '../img/assests/Screenshot 2026-05-10 001013.png'
import img10 from '../img/assests/Screenshot 2026-06-25 230214.png'
import img11 from '../img/assests/Screenshot 2026-08-22 142209.png'
import img12 from '../img/assests/Screenshot 2026-09-14 220237.png'
import img13 from '../img/assests/Screenshot 2026-09-15 190511.png'
import img14 from '../img/assests/Screenshot 2026-09-23 145335.png'

import { useEffect, useState } from 'react'
const Projects = () => {
   const projectsData = [
    {
    id: 9,
    title: "KORACOM WEB-SITE",
    description: 'A real-time football news and match-tracking web application built with Next.js for optimized performance and SEO.',
    image: img9,
    demoLink: "https://kora-gamma-three.vercel.app"
  },
   {
    id: 10,
    title: "E-Commerce Store WEB-SITE",
    description: 'An advanced full-featured e-commerce web application powered by Next.js, featuring server-side rendering and fast loading times.',
    image: img10,
    demoLink: "https://next-store-inky-tau.vercel.app"
  },
   {
    id: 11,
    title: "E-Commerce Store Application By React Native",
    description: 'A cross-platform mobile shopping app built with React Native and NativeWind, offering a seamless and native UI/UX design experience.',
    image: img11,
    demoLink: "https://lnkd.in/p/e6pkZF4b"
  },
  {
    id: 12,
    title: "School Management Dashboard by Angular Framework",
    description: 'Comprehensive educational admin dashboard built with Angular for managing students, teachers, courses, and attendance with advanced filtering and dynamic tables.',
    image: img12,
    demoLink: "https://ms1701240-cell.github.io/angular-dashboard-app/login",
  },
  {
    id: 13,
    title: "Octa Loans - Advanced Admin Dashboard",
    description: "A fully responsive loan management dashboard built with Angular, featuring comprehensive CRUD operations, interactive data tables, and multi-language support (EN/AR).",
    image: img13,
    demoLink: "https://ms1701240-cell.github.io/workloan/loan",
  },
  {
     id: 14,
    title: "teercom Application Store",
    description:"A modern e-commerce mobile app built with React Native & NativeWind, featuring cart, map tracking, and MongoDB.",
    image: img14,
    demoLink: "https://lnkd.in/p/esuN8_jB",
  },

  {
    id: 1,
    title: "CLOTHES MARKET",
    description: 'A responsive e-commerce web application built using Vanilla JavaScript, HTML5, CSS3, and Bootstrap with dynamic product display.',
    image: img1,
    demoLink: 'https://ms1701240-cell.github.io/clothes/'
  },
  {
    id: 2,
    title: "MARKET",
    description: 'A modern online store frontend developed with React.js, featuring component-based architecture and smooth user navigation.',
    image: img2,
    demoLink: "https://momen-storefront.vercel.app"
  },
   
   {
    id:4 ,
    title: "Landing-Page",
    description: 'A fully responsive portfolio landing page built using modern CSS, HTML, and Bootstrap grid systems.',
    image: img4,
    demoLink: 'https://ms1701240-cell.github.io/portofolio/'
  },
  
  {
     id: 6,
    title: "School-tools web-site",
    description: 'An interactive school tools web platform developed using React.js for managing educational utilities seamlessly.',
    image: img6,
    demoLink: "https://ms1701240-cell.github.io/school/"
  },
   {
     id: 7,
    title: "CRUD Operator",
    description: 'A comprehensive data management system implementing full Create, Read, Update, and Delete operations using Vanilla JavaScript.',
    image: img7,
    demoLink: "https://ms1701240-cell.github.io/portofolio/crud%20schooltools/Crud2.html"
  },
   {
     id: 8,
    title: "Simple Store web-site by React.js",
    description: 'A modern, responsive e-commerce platform built with React.js and Tailwind CSS, featuring sleek UI components and clean layout.',
    image: img8,
    demoLink: "https://ms1701240-cell.github.io/stylestore/#/home"
  },
  
];
const API_BASE = 'https://black-art-a705portfolio-api-proxy.ms1701240.workers.dev';
const STORAGE_BASE = 'https://porfoliod.free.nf';
const[projects,setproject]=useState(projectsData)
useEffect(()=>{
  const fetchprojects=async()=>{
try{
const res=await fetch(`${API_BASE}/api/projects`, {
  headers: { Accept: 'application/json' }
});
if (!res.ok) {
  throw new Error(`API returned ${res.status} ${res.statusText}`);
}

const payload=await res.json();
const apiProjects=Array.isArray(payload)
  ? payload
  : Array.isArray(payload.data)
    ? payload.data
    : [];

const normalizedProjects=apiProjects.map((project)=>({
  ...project,
  title: project.title || project.name || 'Untitled Project',
  description: project.description || '',
  image: project.image || project.image_url || project.imageUrl || '',
  demoLink: project.demoLink || project.demo_link || project.link || '#'
}));

setproject([...normalizedProjects,...projectsData])
}catch(err){
  console.error('Unable to fetch projects from the API:', err);
}
  };
  fetchprojects();
},[])
  return (
    <div className="proj">
      <h4 className="text-center mb-5"> 
                <span className="badge mt-5 text-white bg  p-3 fs-3">MY PROJECTS</span>
            </h4>
        <div className="container">
            <div className="row gy-3">
                {projects.map((items,index)=>{
                    return <div className="col-12 col-md-6" key={index} data-aos='fade-up' data-aos-delay={index * 50}>
                        <div className="card bg " >
 <img
  src={
    typeof items.image === 'string' && /^https?:\/\//i.test(items.image)
      ? items.image
      : typeof items.image === 'string' && items.image.startsWith('storage/')
        ? `${STORAGE_BASE}/${items.image}`
        : typeof items.image === 'string' && items.image.startsWith('projects/')
          ? `${STORAGE_BASE}/storage/${items.image}`
          : items.image
  }
  className="card-img-top"
  alt={items.title}
/>
  <div className="card-body h-100 border border-secondary shadow-lg">
    <h5 className="card-title">{items.title}</h5>
    <p className="card-text">{items.description}</p>
    <a href={items.demoLink}  target='_blank' className="btn btn-dark">View Project</a>
    
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