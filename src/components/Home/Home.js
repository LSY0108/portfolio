
import React from "react";
import { Link } from "react-router-dom";
import Me from './Me1.png'
import './home.css'; // CSS 파일로 스타일 적용

function Home(props) {
    return (
        <div className="styled-home">
            {/* 왼쪽 섹션 */}
            <div className="left">
                {/*<div className="color-block"></div>*/}
                <div className="tit-wrap">
                    <h2 className="left-h2">WELCOME TO MY PORTFOLIO</h2>
                    <h1>
                        I'M{" "}
                        <span className="message">
                            <strong>SEUNGYE LEE</strong>
                            <strong>WEB DEVELOPER</strong>
                            <strong>BACKEND ENGINEER</strong>
                        </span>
                    </h1>
                    {/* 연락처 정보 */}
                    <div className="contact-info">
                        <p><i className="fas fa-envelope"></i> Email: seungye1209@gmail.com</p>
                        <p><i className="fas fa-phone"></i> Phone: 010-4063-4420</p>
                        <p><i className="fas fa-map-marker-alt"></i> Location: Incheon, South Korea</p>
                        <p><i className="fab fa-github"></i> GitHub: github.com/LSY0108</p>
                    </div>
                </div>
            </div>
            {/* 오른쪽 섹션 */}
            <div className="right">
                <div className="tit-wrap">
                    <p>
                        안녕하세요, 이승예입니다. 😀
                        <br/>
                        {/*무엇을 잘하는지 또는 무엇이 되고 싶은지 표현을 넣었으면 합*/}
                        저는 Spring 기반의 백엔드 개발에 관심을 가지고 공부하고 있습니다.
                        프로젝트를 통해 데이터베이스 설계와 API 개발을 경험했으며, 이 과정에서 문제 해결의 즐거움을 느꼈습니다.
                        <br/><br/>
                        새로운 기술을 배우고 적용하는 데 열정을 가지고 있으며,
                        특히 동료들과 함께 고민하고 성장하는 과정을 소중히 여깁니다.
                        앞으로도 지속적인 학습과 도전을 통해 신뢰할 수 있는 백엔드 개발자로 성장하고 싶습니다.
                    </p>
                </div>
                <img src={Me}/>
                <Link to="/about" className="more-btn">MORE ABOUT ME</Link>
            </div>
        </div>
    );
}

export default Home;
