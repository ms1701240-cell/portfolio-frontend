import { img } from "framer-motion/client";

const Skill = () => {
    const icons = [
        {
            name: 'React.js',
            iconClass: 'fa-brands fa-react',
            color: '#61DAFB',
            description: 'Building interactive UIs with functional components and hooks.'
        },
        {
    name: 'NEXT.js',
    iconClass: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg>`,
    color: '#ffffff',
    description: 'Building full-stack web applications with server-side rendering and static generation.'
},
        { 
            name: 'JavaScript', 
            iconClass: 'fa-brands fa-js', 
            color: '#F7DF1E',
            description: 'Writing clean, efficient ES6+ code for web logic.'
        },
        { 
            name: 'TypeScript', 
            iconClass: 'fa-brands fa-square-js', // تم تعديلها لتظهر بشكل صحيح
            color: '#3178C6',
            description: 'Adding static type safety to JavaScript for scalable applications.'
        },
        { 
            name: 'HTML5', 
            iconClass: 'fa-brands fa-html5', 
            color: '#E34F26',
            description: 'Structuring web content with semantic and accessible tags.'
        },
        { 
            name: 'CSS3', 
            iconClass: 'fa-brands fa-css3-alt', 
            color: '#1572B6',
            description: 'Creating beautiful designs with Flexbox, Grid, and Animations.'
        },
        { 
            name: 'Git & GitHub', 
            iconClass: 'fa-brands fa-github', 
            color: '#ffffff',
            description: 'Version control and collaboration for team projects.'
        },
        { 
            name: 'Responsive Design', 
            iconClass: 'fa-solid fa-mobile-screen-button', 
            color: '#4caf50',
            description: 'Ensuring websites look great on all screen sizes.'
        }
    ];

    return (
        <div className="skill py-5">
            <h4 className="text-center mb-5"> 
                <span className="badge text-danger bg-dark border border-danger p-3 fs-3">MY SKILLS</span>
            </h4>
            <div className="container">
                <div className="row g-4">
                    {icons.map((i, index) => {
                        const isSvg = i.iconClass.trim().startsWith('<svg');
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="card h-100 bg-dark text-white border-primary shadow-lg">
                                    <div className="card-body text-center p-4">
                                        {/* عرض الـ SVG مباشرة لو موجود، أو استخدام الـ i للعناصر العادية */}
                                        {isSvg ? (
                                            <div 
                                                className="mb-3 d-inline-block" 
                                                style={{ width: '3.5rem', height: '3.5rem', color: i.color }}
                                                dangerouslySetInnerHTML={{ __html: i.iconClass }}
                                            />
                                        ) : (
                                            <i className={`${i.iconClass} mb-3`} style={{ fontSize: '3.5rem', color: i.color }}></i>
                                        )}
                                        
                                        <h5 className="card-title fw-bold mb-3">{i.name}</h5>
                                        <p className="card-text text-secondary" style={{ fontSize: '0.9rem' }}>
                                            {i.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skill;