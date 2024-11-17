import React, { useState, useEffect } from "react";
import { projectData } from './data/projectData';
import './projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [selectedProject]);

    return (
        <div className="projects">
            <h2 className="projects-MainTitle-h2">My Projects</h2>
            <div className="projects-container">
                {Object.entries(projectData).map(([id, project]) => (
                    <div key={id} className="project-box" onClick={() => setSelectedProject(project)}>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-summary">{project.summary}</p>
                        <div className="project-links">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="github-link"
                                >
                                </a>
                            )}
                            <div className="project-links">
                                <button className="details-button" onClick={() => setSelectedProject(project)}>
                                    자세히 보기
                                </button>
                                {project.githubUrl && (
                                    <button
                                        className="details-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.location.href = project.githubUrl;
                                        }}
                                    >
                                        깃허브 주소
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="title-section">
                            <h2>{selectedProject.title}</h2>
                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                    </a>
                                )}
                            </div>
                            <span className="project-period">{selectedProject.period}</span>
                        </div>

                        <div className="modal-body">
                            <div className="project-intro section">
                                <h3>📝 소개</h3>
                                <p>{selectedProject.intro}</p>
                            </div>

                            <div className="project-features section">
                                <h3>✨ 주요 특징</h3>
                                <ul>
                                    {selectedProject.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-functions section">
                                <h3>🛠️ 주요 기능</h3>
                                <div className="functions-container">
                                    {Object.entries(selectedProject.mainFunctions).map(([category, functions]) => (
                                        <div key={category} className="function-category">
                                            <h4>{getCategoryTitle(category)}</h4>
                                            <ul>
                                                {functions.map((func, index) => (
                                                    <li key={index}>{func}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tech-stack section">
                                <h3>⚙️ 기술 스택</h3>
                                <div className="stack-container">
                                    {Object.entries(selectedProject.techStack).map(([category, techs]) => (
                                        <div key={category} className="stack-category">
                                            <h4>{getCategoryTitle(category)}</h4>
                                            <div className="stack-items">
                                                {techs.map((tech, index) => (
                                                    <span key={index} className="tech-badge">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="close-button" onClick={() => setSelectedProject(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function getCategoryTitle(category) {
    const titles = {
        account: '계정 관리',
        sns: 'SNS 기능',
        chat: '채팅 기능',
        shop: '쇼핑몰 기능',
        content: '콘텐츠 관리',
        analysis: '데이터 분석',
        backend: 'Backend',
        frontend: 'Frontend',
        database: 'Database & Infrastructure',
        tools: 'Development Tools',
        security: 'Security',
        language: 'Programming Language',
        libraries: 'Libraries & Frameworks'
    };
    return titles[category] || category;
}

export default Projects;