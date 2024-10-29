
import React from "react";
import { Link } from "react-router-dom";
import './home.css'; // CSS 파일로 스타일 적용

function Home(props) {
    return (
        <div className="styled-home">
            <div className="left">
                {/*<div className="color-block"></div>*/}
                <div className="tit-wrap">
                    <h2>HI! HOW ARE YOU?</h2>
                    <h1>
                        I'M{" "}
                        <span className="message">
                            <strong>SEUNGYE LEE</strong>
                            <strong>WEB DEVELOPER</strong>
                            <strong>UX/UI PUBLISHER</strong>
                        </span>
                    </h1>
                </div>
            </div>
            <div className="right">
                <div className="tit-wrap">
                    <p>
                        안녕하세요, 저는 입니다. 😀
                        <br/>
                        새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다. 현재 프론트엔드 개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을 경험할 수
                        있는 회사에서 일하고 싶습니다.

                        <h2 className="section-title">PERSONAL INFOS</h2>
                        <ul className="info-list">
                            <li><span className="info-label">Name :</span>반혜주</li>
                            <li><span className="info-label">Age :</span>26, 1996.02</li>
                            <li><span className="info-label">Phone :</span>010.5103.2212</li>
                            <li><span className="info-label">Address :</span>서울시 은평구</li>
                            <li><span className="info-label">Email :</span>baneju212@naver.com</li>
                        </ul>
                    </p>
                </div>
                <Link to="/about" className="more-btn">MORE ABOUT ME</Link>
            </div>
        </div>
    );
}

export default Home;
