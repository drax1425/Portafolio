import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, lang, onViewLanding }) => {
    const name = lang === 'es' ? project.name_es : project.name_en;
    const description = lang === 'es' ? project.description_es : project.description_en;
    const features = lang === 'es' ? project.features_es : project.features_en;
    const btnText = lang === 'es' ? 'Ver Proyecto' : 'View Project';
    const featLabel = lang === 'es' ? 'Características' : 'Features';

    return (
        <div className="project-card">
            <div className="card-image">
                <img src={project.image} alt={name} loading="lazy" />
                {project.techs && project.techs.length > 0 && (
                    <div className="card-tech-badges">
                        {project.techs.map((tech, i) => (
                            <span className="tech-badge" key={i}>{tech}</span>
                        ))}
                    </div>
                )}
            </div>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-desc">{description}</p>

                {features && features.length > 0 && (
                    <div className="card-features">
                        <h4>{featLabel}</h4>
                        <ul>
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {onViewLanding && (
                    <button className="card-link" onClick={onViewLanding}>
                        {lang === 'es' ? 'Ver Demo' : 'View Demo'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </button>
                )}
                {!onViewLanding && project.url && project.url !== '#' && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link">
                        {btnText}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </a>
                )}
                {!onViewLanding && project.url === '#' && (
                    <span className="card-link disabled">
                        {lang === 'es' ? 'App Móvil' : 'Mobile App'}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
