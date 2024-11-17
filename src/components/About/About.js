import React from "react";
import {IoLogoHtml5, IoLogoJavascript, IoLogoGithub, IoLogoReact} from "react-icons/io5";
import { FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { SiSpring, SiNotion } from "react-icons/si";
import { GrMysql, GrOracle } from "react-icons/gr";
import './about.css';
import Me2 from './Me2.png';

function About(props) {
    return (
        <div className="styled-about">
            <div className="about-container">
                <h2 className="about-MainTitle-h2">About Me</h2>
                <div className="personal-info">
                    <img src={Me2} alt="Profile" className="profile-image"/>
                    <div className="info-text">
                        <h2 className="section-title">PERSONAL INFOS</h2>
                        <ul className="info-list">
                            <li><span className="info-label">Name :</span>이승예</li>
                            <li><span className="info-label">Age :</span>22, 2003.12</li>
                            <li><span className="info-label">Phone :</span>010.4063.4420</li>
                            <li><span className="info-label">Email :</span>seungye1209@gmail.com</li>
                            <li><span className="info-label">Certification :</span>정보처리산업기사</li>
                        </ul>
                    </div>
                </div>
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

const Skill = ({icon, title, level}) => {
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
                            style={{ height: levelHeight[level] }}
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