import React from "react";
import { IoLogoHtml5, IoLogoJavascript, IoLogoGithub, IoLogoReact } from "react-icons/io5"; // 필요한 아이콘을 import
import { FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { SiSpring, SiNotion } from "react-icons/si";
import { GrMysql, GrOracle } from "react-icons/gr";
import './about.css';

function About(props) {
    return (
        <div className="about">
            <div className="about-container">
                <h2>MY SKILLS</h2>
                <div className="container">
                    {['BackEnd', 'FrontEnd', 'Database', 'Cooperation'].map((category, index) => (
                        <div className="box" key={index}>
                            <h2>{category}</h2>
                            {category === 'BackEnd' && (
                                <>
                                    <Skill icon={<FaJava />} title="Java" />
                                    <Skill icon={<FaPython />} title="Python" />
                                    <Skill icon={<SiSpring />} title="Spring" />
                                    <Skill icon={<FaDatabase />} title="JPA" />
                                </>
                            )}
                            {category === 'FrontEnd' && (
                                <>
                                    <Skill icon={<IoLogoReact />} title="React" />
                                    <Skill icon={<FaJava />} title="JSP" />
                                    <Skill icon={<IoLogoJavascript />} title="JavaScript" />
                                    <Skill icon={<IoLogoHtml5 />} title="HTML/CSS" />
                                </>
                            )}
                            {category === 'Database' && (
                                <>
                                    <Skill icon={<GrMysql />} title="MySQL" />
                                    <Skill icon={<GrOracle />} title="Oracle" />
                                </>
                            )}
                            {category === 'Cooperation' && (
                                <>
                                    <Skill icon={<IoLogoGithub />} title="GitHub" />
                                    <Skill icon={<SiNotion />} title="Notion" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Skill = ({ icon, title }) => (
    <div className="icon-title">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
    </div>
);

export default About;
