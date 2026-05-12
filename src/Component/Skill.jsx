

const Skill = () => {
    const icons = [
        {
            name: 'React.js',
            iconClass: 'fa-brands fa-react',
            color: '#61DAFB',
            description: 'Building interactive UIs with functional components and hooks.'
        },
        { 
            name: 'JavaScript', 
            iconClass: 'fa-brands fa-js', 
            color: '#F7DF1E',
            description: 'Writing clean, efficient ES6+ code for web logic.'
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
        <div className="skill py-5" >
            <h4 className="text-center mb-5"> 
                <span className="badge text-danger bg-dark border border-danger p-3 fs-3">MY SKILLS</span>
            </h4>
            <div className="container">
                <div className="row g-4">
                    {icons.map((i, index) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={index} data-aos="fade-up" 
      data-aos-delay={index * 100}>
                                <div className="card h-100 bg-dark text-white border-primary shadow-lg">
                                    <div className="card-body text-center p-4">
                                        {/* الأيقونة مع اللون والحجم المناسب */}
                                        <i className={`${i.iconClass} mb-3`} style={{ fontSize: '3.5rem', color: i.color }}></i>
                                        <h5 className="card-title fw-bold mb-3">{i.name}</h5>
                                        {/* الوصف الاحترافي */}
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