import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import './header.css';

function Header() {
    const [load, setLoad] = useState(false);
    const [activePage, setActivePage] = useState("home"); // 현재 활성화된 페이지 상태
    const location = useLocation();

    // 페이지 변경 감지하여 스크롤 처리
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]); // location.pathname이 변경될 때마다 실행


    useEffect(() => {
        setActivePage(localStorage.getItem('page'));
        setTimeout(() => {
            setLoad(true);
        }, 700);
        return () => setLoad(false);
    }, []);

    const handlePageClick = (page) => {
        localStorage.setItem('page', page);
        setActivePage(page);
    };

    return (
        <header className={`${load ? "on" : ""}`}>
            <ul>
                <li className={activePage === "home" ? "active" : ""} onClick={() => handlePageClick("home")}>
                    <RouterLink to="/">
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li className={activePage === "about" ? "active" : ""} onClick={() => handlePageClick("about")}>
                    <RouterLink to="/about">
                        <i className="fas fa-user"></i>
                        <span>About</span>
                    </RouterLink>
                </li>
                <li className={activePage === "projects" ? "active" : ""} onClick={() => handlePageClick("projects")}>
                    <RouterLink to="/projects">
                        <i className="fas fa-tasks"></i>
                        <span>Projects</span>
                    </RouterLink>
                </li>
                {/*<li>
                    <a href="https://github.com/LSY0108" target="_blank" rel="noopener noreferrer" className={activePage === "github" ? "active" : ""}>
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </a>
                </li>*/}
            </ul>
        </header>
    );
}

export default Header;
