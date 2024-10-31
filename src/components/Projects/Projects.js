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
            <h2 className="projects-MainTitle-h2">My Projects</h2>
            <div className="projects-container">
                <div className="project-box" onClick={() => openModal({
                    id: 1,
                    title: '프로젝트 제목',
                    description: '프로젝트 설명 (프로젝트 사진, 날짜, 설명, 주요 기능 및 특징, 사용 기술 및 언어)'
                })}>
                    <h3 className="project-title">프로젝트 제목</h3>
                    <p className="project-summary">프로젝트 간략 설명</p>
                    <button className="details-button">자세히 보기</button>
                </div>

                <div className="project-box" onClick={() => openModal({
                    id: 2,
                    title: '프로젝트 제목',
                    description: '프로젝트 설명 (프로젝트 사진, 날짜, 설명, 주요 기능 및 특징, 사용 기술 및 언어)'
                })}>
                    <h3 className="project-title">프로젝트 제목</h3>
                    <p className="project-summary">프로젝트 간략 설명</p>
                    <button className="details-button">자세히 보기</button>
                </div>

                <div className="project-box" onClick={() => openModal({
                    id: 3,
                    title: '프로젝트 제목',
                    description: '프로젝트 설명 (프로젝트 사진, 날짜, 설명, 주요 기능 및 특징, 사용 기술 및 언어)'
                })}>
                    <h3 className="project-title">프로젝트 제목</h3>
                    <p className="project-summary">프로젝트 간략 설명</p>
                    <button className="details-button">자세히 보기</button>
                </div>
                <div className="project-box" onClick={() => openModal({
                    id: 4,
                    title: '프로젝트 제목',
                    description: '프로젝트 설명 (프로젝트 사진, 날짜, 설명, 주요 기능 및 특징, 사용 기술 및 언어)'
                })}>
                    <h3 className="project-title">프로젝트 제목</h3>
                    <p className="project-summary">프로젝트 간략 설명</p>
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
