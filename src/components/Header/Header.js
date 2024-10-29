import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import './header.css';

function Header() {
    const [load, setLoad] = useState(false);
    const [activePage, setActivePage] = useState("home"); // 현재 활성화된 페이지 상태

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 700);
        return () => setLoad(false);
    }, []);

    const handlePageClick = (page) => {
        setActivePage(page); // 아이콘 클릭 시 활성화된 페이지 상태 업데이트
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
                <li onClick={() => handlePageClick("github")}>
                    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className={activePage === "github" ? "active" : ""}>
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
