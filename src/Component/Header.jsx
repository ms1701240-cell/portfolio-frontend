
import { useEffect, useState } from "react";
import myimage from '../img/assests/11840.jpg';

const roles = ['Front-End Developer', 'Angular Developer', 'React Developer', 'React Native Developer'];

const Header = () => {
    const [reduceMotion, setReduceMotion] = useState(() =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    const [displayedRole, setDisplayedRole] = useState('');

    useEffect(() => {
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateMotionPreference = () => setReduceMotion(motionPreference.matches);

        updateMotionPreference();
        motionPreference.addEventListener('change', updateMotionPreference);
        return () => motionPreference.removeEventListener('change', updateMotionPreference);
    }, []);

    useEffect(() => {
        let roleIndex = 0;
        let characterCount = 0;
        let isDeleting = false;
        let pauseUntil = 0;

        if (reduceMotion) {
            setDisplayedRole(roles[roleIndex]);
            const timer = window.setInterval(() => {
                roleIndex = (roleIndex + 1) % roles.length;
                setDisplayedRole(roles[roleIndex]);
            }, 2500);
            return () => window.clearInterval(timer);
        }

        const timer = window.setInterval(() => {
            const currentRole = roles[roleIndex];

            if (!isDeleting && characterCount === currentRole.length) {
                if (!pauseUntil) pauseUntil = Date.now() + 1200;
                if (Date.now() >= pauseUntil) {
                    isDeleting = true;
                    pauseUntil = 0;
                }
                return;
            }

            if (isDeleting && characterCount === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            } else {
                characterCount += isDeleting ? -1 : 1;
                setDisplayedRole(currentRole.slice(0, characterCount));
            }
        }, 65);

        return () => window.clearInterval(timer);
    }, [reduceMotion]);

    return (
        <section className="header-section">
            <div className="container header-content">
                <div className="row align-items-center w-100">
                    <div className="col-12 col-md-7 header-copy">
                        <p className="header-eyebrow ل">WEB & MOBILE DEVELOPER</p>
                        <h1 className="header-title">Hi, I'm <span>Mohamed Sayed</span></h1>
                        <p className="header-role" aria-live="polite">
                            <span className="header-role-label">
 </span>
                            <span className="header-role-text">{displayedRole}</span>
                            <span className="typewriter-caret" aria-hidden="true" />
                        </p>
                        <p className="header-description">
                           I help businesses and entrepreneurs build modern,
                             responsive web and mobile applications.
                        </p>
                        <div className="header-actions">
                            <a className="header-button header-button-primary" href="#project">Explore my work</a>
                            <a className="header-button header-button-secondary" href="#contact">Let's work together</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 header-portrait-wrap">
                        <img src={myimage} className="img-fluid im header-portrait" alt="Mohamed Sayed, front-end developer" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;