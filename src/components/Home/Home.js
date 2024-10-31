
import React from "react";
import { Link } from "react-router-dom";
import Me from './Me1.png'
import './home.css'; // CSS 파일로 스타일 적용

function Home(props) {
    return (
        <div className="styled-home">
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
                </div>
            </div>
            <div className="right">
                <div className="tit-wrap">
                    <p>
                        안녕하세요, 이승예입니다. 😀
                        <br/>
                        저는 새로운 기술을 배우고 적용하는 데 열정을 가지고 있습니다.
                        특히, 동료들과의 원활한 소통과 상호 피드백을 통해 함께 성장하는 과정을 소중히 여깁니다.
                        다양한 혁신적인 프로젝트에 참여하며, 문제 해결에 기여하고, 실력을 더욱 쌓아가고 싶습니다.
                    </p>
                </div>
                <img src={Me}/>
                <Link to="/about" className="more-btn">MORE ABOUT ME</Link>
            </div>
        </div>
    );
}

export default Home;
