
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import Typewriter from 'typewriter-effect';
import myimage from '../img/11840.jpg';
const Header = () => {
    
    const [init, setInit] = useState(false);

    // المحرك بيشتغل مرة واحدة بس عند بداية تشغيل الموقع
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    // داخل Header.jsx
// داخل Header.jsx
if (init) {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#a10d0d' }}>
            
            <Particles
                id="tsparticles"
                className="particles-container" // استخدمنا الكلاس هنا
                options={{
                    fullScreen: { enable: false },
                    background: { enable: false }, // قفلنا الباك جراوند هنا عشان الأب هو اللي شايل اللون
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#ffffff" },
                        links: { enable: true, color: "#ffffff", opacity: 0.3 },
                        move: { enable: true, speed: 2 },
                        number: { value: 50 },
                    },
                }}
            />

            <div className="container d-flex align-items-center header-content" style={{ height: '110dvh' }}>
                <div className="row align-items-center text-center w-100">
                    <div className="col-12 col-md-8 text-white mt-2"> {/* خليناها text-white عشان تبان */}
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold',color: '#000933' }}>WELCOME</h1>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold',color: '#000933' }}>I'M Mohamed Sayed</h1>
                        <div style={{ fontSize: '2.5rem', color: '#000933', fontWeight: '500' }}>
                            <Typewriter 
                                options={{ 
                                    strings: ['Web Developer', 'Web Designer'], 
                                    autoStart: true, 
                                    loop: true 
                                }} 
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                         <img src={myimage} className="img-fluid im" 
                              style={{borderRadius:'30px', border:'4px solid white', boxShadow:'0 10px 30px rgba(0,0,0,0.5)'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}
    return <></>;
}

export default Header;