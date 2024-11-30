import React from "react";
import {IoLogoHtml5, IoLogoJavascript, IoLogoGithub, IoLogoReact} from "react-icons/io5";
import { FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { SiSpring, SiNotion } from "react-icons/si";
import { GrMysql, GrOracle } from "react-icons/gr";
import './about.css';
import Me2 from './Me2.png';

function About(props) {
    const experienceData = {
        title: "TOC 튀는 멘토링 DoDream 프로젝트",
        organization: "인하공업전문대학 교내 활동",
        periods: [
            { term: "1기", date: "2022.09.19 - 2022.11.25" },
            { term: "2기", date: "2023.03.27 - 2023.06.02" }
        ],
        achievements: [
            "웹 서비스 기획부터 개발까지 전반적인 개발 프로세스 학습",
            "Java와 Spring Boot로 REST API 서버 구축하는 방법을 익힘",
            "멘토들과 함께 코드 리뷰하며 깃허브 사용법과 협업 방식을 배움",
            "주간 개발 진행상황 발표와 피드백을 통한 프로젝트 완성도 향상"
        ]
    };

    return (
        <div className="styled-about">
            <div className="about-container">
                <h2 className="about-MainTitle-h2">About Me</h2>
                <div className="personal-info">
                    {/* 개인 정보 섹션 */}
                    <img src={Me2} alt="Profile" className="profile-image"/>
                    <div className="info-text">
                        <h2 className="section-title">PERSONAL INFOS</h2>
                        <ul className="info-list">
                            <li><span className="info-label">Name  </span>이승예</li>
                            <li><span className="info-label">Age </span>22, 2003.12</li>
                            <li><span className="info-label">Phone </span>010.4063.4420</li>
                            <li><span className="info-label">Email </span>seungye1209@gmail.com</li>
                            <li><span className="info-label">학력 </span></li>
                            <ul className="education-sublist">
                                <li>인하공업전문대학교 컴퓨터정보공학과 (2022 - 재학중)</li>
                                <li>인성여자고등학교 (2019 - 2022.02 졸업)</li>
                            </ul>
                            <li><span className="info-label">Certification :</span>정보처리산업기사</li>
                        </ul>
                    </div>
                </div>

                {/* 경력 섹션 */}
                <div className="introduction-section">
                    <h2 className="about-Introduction-h2">EXPERIENCE</h2>
                    <div className="experience-card">
                        <h3 className="experience-title">{experienceData.title}</h3>
                        <p className="experience-org">{experienceData.organization}</p>
                        <div className="experience-periods">
                            {experienceData.periods.map((period, index) => (
                                <div key={index} className="period-item">
                                    <span className="period-term">{period.term}</span>
                                    <span className="period-date">{period.date}</span>
                                </div>
                            ))}
                        </div>
                        <ul className="experience-achievements">
                            {experienceData.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 기술 스택 섹션 */}
                <h2 className="about-SKILLS-h2">MY SKILLS</h2>
                <div className="skills-section">
                    <div className="container">
                        {['BackEnd', 'FrontEnd', 'Database', 'Cooperation'].map((category, index) => (
                            <div className="box" key={index}>
                                <h2 className="category-title">{category}</h2>
                                {category === 'BackEnd' && (
                                    <>
                                        <Skill icon={<FaJava/>} title="Java" level="high"/>
                                        <Skill icon={<FaPython/>} title="Python" level="medium"/>
                                        <Skill icon={<SiSpring/>} title="Spring" level="medium"/>
                                        <Skill icon={<FaDatabase/>} title="JPA" level="medium"/>
                                    </>
                                )}
                                {category === 'FrontEnd' && (
                                    <>
                                        <Skill icon={<IoLogoReact/>} title="React" level="high"/>
                                        <Skill icon={<FaJava/>} title="JSP" level="medium"/>
                                        <Skill icon={<IoLogoJavascript/>} title="JavaScript" level="medium"/>
                                        <Skill icon={<IoLogoHtml5/>} title="HTML/CSS" level="medium"/>
                                    </>
                                )}
                                {category === 'Database' && (
                                    <>
                                        <Skill icon={<GrMysql/>} title="MySQL" level="high"/>
                                        <Skill icon={<GrOracle/>} title="Oracle" level="low"/>
                                    </>
                                )}
                                {category === 'Cooperation' && (
                                    <>
                                        <Skill icon={<IoLogoGithub/>} title="GitHub" level="medium"/>
                                        <Skill icon={<SiNotion/>} title="Notion" level="high"/>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Skill 컴포넌트
const Skill = ({icon, title, level}) => {
    // 기술 레벨 설정
    const levelHeight = {
        'high': '100%',
        'medium': '66%',
        'low': '33%'
    };

    return (
        <div className="icon-title">
            <div className="icon">{icon}</div>
            <div className="skill-info">
                <div className="skill-header">
                    <h3>{title}</h3>
                    <div className="skill-level">
                        <div
                            className="wave-container"
                            style={{height: levelHeight[level]}}
                        >
                            <div className="wave"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;