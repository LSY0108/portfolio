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
                                        <Skill icon={<FaJava/>} title="Java"/>
                                        <Skill icon={<FaPython/>} title="Python"/>
                                        <Skill icon={<SiSpring/>} title="Spring"/>
                                        <Skill icon={<FaDatabase/>} title="JPA"/>
                                    </>
                                )}
                                {category === 'FrontEnd' && (
                                    <>
                                        <Skill icon={<IoLogoReact/>} title="React"/>
                                        <Skill icon={<FaJava/>} title="JSP"/>
                                        <Skill icon={<IoLogoJavascript/>} title="JavaScript"/>
                                        <Skill icon={<IoLogoHtml5/>} title="HTML/CSS"/>
                                    </>
                                )}
                                {category === 'Database' && (
                                    <>
                                        <Skill icon={<GrMysql/>} title="MySQL"/>
                                        <Skill icon={<GrOracle/>} title="Oracle"/>
                                    </>
                                )}
                                {category === 'Cooperation' && (
                                    <>
                                        <Skill icon={<IoLogoGithub/>} title="GitHub"/>
                                        <Skill icon={<SiNotion/>} title="Notion"/>
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

const Skill = ({icon, title }) => (
    <div className="icon-title">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
    </div>
);

export default About;
