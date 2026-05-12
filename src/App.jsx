import { useEffect, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Nav from './Component/Nav'
import SectionOne from './Component/SectionOne'
import Skill from './Component/Skill'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Component/Projects'
import Form from './Component/Form'
import Formshow from './Component/Formshow'
import Footer from './Component/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعة الحركة (1 ثانية)
      once: false,    // هل الحركة تحصل مرة واحدة بس ولا كل ما تنزل وتطلع؟
    });
  }, []);

  return (
    <>
    
      <div>
        <Nav />
     <div id='header'>
       <Header />
      </div>
        <div id='about'> <SectionOne /> </div> 
     <div id='skill'> <Skill/> </div>
     <div id='project'> <Projects/> </div>
     <div className='feed' id='feeds'>
       <Form />
       <Formshow/>
       <div id='contact'> <Footer /></div>
     </div>
       </div>
    </>
  )
}

export default App
