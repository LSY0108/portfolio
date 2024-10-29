import React, { useState } from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoGithub, IoLogoReact } from "react-icons/io5";
import './projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project-box" onClick={() => openModal({
                    id: 1,
                    title: 'Smart Plant Management System',
                    description: 'A system to monitor and manage plant health using sensors and data analysis.'
                })}>
                    Smart Plant Management System
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 2,
                    title: 'Crop Prediction Analysis',
                    description: 'Predicting crop production based on climate data and historical yield records.'
                })}>
                    Crop Prediction Analysis
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: 'Wireless Network Project',
                    description: 'Developing a secure wireless network for data transmission in smart devices.'
                })}>
                    Wireless Network Project
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: 'Wireless Network Project',
                    description: 'Developing a secure wireless network for data transmission in smart devices.'
                })}>
                    Wireless Network Project
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: 'Wireless Network Project',
                    description: 'Developing a secure wireless network for data transmission in smart devices.'
                })}>
                    Wireless Network Project
                </div>
                {/* 다른 프로젝트를 추가할 수 있습니다. */}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <button className="close-button" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
