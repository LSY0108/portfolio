import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoGithub, IoLogoReact } from "react-icons/io5"; // 필요한 아이콘을 import
import './about.css';

function About(props) {
    const skills = [
        {
            icon: <IoLogoHtml5 />, // HTML 아이콘
            title: 'HTML/CSS',
            details: [
                '원하는 UI를 실용적이고, 익숙하게 만들어 낼 수 있습니다.',
                '빌드시스템(Gulp)과 템플릿 엔진(ejs, jade)의 사용이 가능합니다.',
                'CSS 최신 문법이 숙지되어 있고 CSS 프리프로세서 Sass를 사용할 수 있습니다.'
            ]
        },
        {
            icon: <IoLogoJavascript />, // JavaScript 아이콘
            title: 'JavaScript',
            details: [
                'ES6와 이후의 자바스크립트 문법을 사용할 수 있습니다.',
                'Vanilla JS의 웹 제작이 가능하고 필요 이유에 대해 충분히 이해하고 있습니다.',
                '폭 넓은 플러그인의 사용이 가능합니다.'
            ]
        },
        {
            icon: <IoLogoReact />, // React 아이콘
            title: 'React',
            details: [
                '컴포넌트 생명주기와 속성을 사용할 수 있습니다.',
                'class, function 컴포넌트의 차이를 이해하고 있으며 구분하여 사용할 수 있습니다.',
                '리덕스를 사용하여 상태관리를 할 수 있습니다.'
            ]
        },
        {
            icon: <IoLogoNodejs />, // Node.js 아이콘
            title: 'Node.js',
            details: [
                'Node.js가 작동하는 법에 대해 이해하고 있습니다.',
                'express 프레임워크를 사용하여 Restful API 서버를 만들 수 있습니다.',
                '모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.'
            ]
        },
        {
            icon: <IoLogoGithub />, // Git/GitHub 아이콘
            title: 'Git/Github',
            details: [
                'git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.',
                '깃과 깃헙을 사용하여 다른 개발자들과 협업을 할 수 있습니다.',
                '깃 리베이스를 할 수 있으며 스쿼시를 통한 커밋 관리 경험이 있습니다.'
            ]
        }
    ];

    return (
        <div className="about">
            <div className="about-container">
                <h2>MY SKILLS</h2>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="icon-title">
                                <div className="icon">{skill.icon}</div> {/* 아이콘을 표시 */}
                                <h3>{skill.title}</h3>
                            </div>
                            <div className="details">
                                {skill.details.map((detail, i) => (
                                    <div key={i} className="detail">{detail}</div> // li 대신 div 사용
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
