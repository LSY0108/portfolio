import React, { useState } from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoGithub, IoLogoReact } from "react-icons/io5";
import './projects.css';

function Projects() {
    const [skills, setSkills] = useState([
        {
            icon: <IoLogoHtml5 />,
            title: 'HTML/CSS',
            details: [
                '원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.',
                '빌드시스템(Gulp)과 템플릿 엔진(ejs, jade)의 사용이 가능합니다.',
                'CSS 최신 문법이 숙지되어 있고 CSS 프리프로세서 Sass를 사용할 수 있습니다.'
            ],
        },
        // ... 다른 기술들
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [newSkill, setNewSkill] = useState({ title: '', details: [''] });

    const addSkill = () => {
        setSkills([...skills, newSkill]);
        setNewSkill({ title: '', details: [''] });
    };

    const removeSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleDetailChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].details = value.split('\n');
        setSkills(updatedSkills);
    };

    const handleTitleChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].title = value;
        setSkills(updatedSkills);
    };

    return (
        <div className="projects">
            <div className="projects-container">
                <h2>MY PROJECTS</h2>
                <button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "완료" : "수정하기"}
                </button>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="title">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={skill.title}
                                        onChange={(e) => handleTitleChange(index, e.target.value)}
                                    />
                                ) : (
                                    <h3>{skill.title}</h3>
                                )}
                            </div>
                            <div className="details">
                                {isEditing ? (
                                    <textarea
                                        value={skill.details.join('\n')}
                                        onChange={(e) => handleDetailChange(index, e.target.value)}
                                    />
                                ) : (
                                    skill.details.map((detail, i) => (
                                        <div key={i} className="detail">{detail}</div>
                                    ))
                                )}
                            </div>
                            {isEditing && (
                                <button onClick={() => removeSkill(index)}>제거</button>
                            )}
                        </div>
                    ))}
                </div>
                {isEditing && (
                    <div className="add-skill">
                        <input
                            type="text"
                            placeholder="제목"
                            value={newSkill.title}
                            onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
                        />
                        <textarea
                            placeholder="내용을 입력하세요."
                            value={newSkill.details.join('\n')}
                            onChange={(e) => setNewSkill({ ...newSkill, details: e.target.value.split('\n') })}
                        />
                        <button onClick={addSkill}>추가하기</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
