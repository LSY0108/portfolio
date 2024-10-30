import React, { useState, useEffect } from "react";
import './projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project-box" onClick={() => openModal({
                    id: 1,
                    title: 'Smart Plant Management efefefSystem',
                    description: 'A system to monitor and manage plant health using sensors and data analysis.'
                })}>
                    <h3 className="project-title">Smart Plant Management System</h3>
                    <p className="project-summary">Monitor and manage plant health with data analytics.</p>
                    <button className="details-button">자세히 보기</button>
                </div>

                <div className="project-box" onClick={() => openModal({
                    id: 2,
                    title: 'Crop Prediction Analysis',
                    description: 'Predicting crop production based on climate data and historical yield records.'
                })}>
                    <h3 className="project-title">Crop Prediction Analysis</h3>
                    <p className="project-summary">Predict crop production based on climate data.</p>
                    <button className="details-button">자세히 보기</button>
                </div>

                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: 'Wireless Network Project',
                    description: 'Developing a secure wireless network for data transmission in smart devices.'
                })}>
                    <h3 className="project-title">Wireless Network Project</h3>
                    <p className="project-summary">Secure wireless network for smart devices.</p>
                    <button className="details-button">자세히 보기</button>
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: 'Wireless Network Project',
                    description: 'Developing a secure wireless network for data transmission in smart devices.'
                })}>
                    <h3 className="project-title">Wireless Netwofefefefefrk Project</h3>
                    <p className="project-summary">Secure wireless network for smart devices.</p>
                    <button className="details-button">자세히 보기</button>
                </div>

                {/* 추가 프로젝트 박스들 */}
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
