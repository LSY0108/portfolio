import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import './header.css';

function Header(props) {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        }, 700);
        return () => setLoad(false);
    }, []);

    return (
        <header className={`${load ? "on" : ""}`}>
            <ul>
                <li className={props.page === "home" ? "active" : ""}>
                    <RouterLink to="/">
                        <i className="fas fa-home"></i> {/* 집 아이콘 */}
                        <span>Home</span>
                    </RouterLink>
                </li>
                <li className={props.page === "about" ? "active" : ""}>
                    <RouterLink to="/about">
                        <i className="fas fa-user"></i>
                        <span>About</span>
                    </RouterLink>
                </li>
                <li className={props.page === "projects" ? "active" : ""}>
                    <RouterLink to="/projects">
                        <i className="fas fa-tasks"></i>
                        <span>Projects</span>
                    </RouterLink>
                </li>
                <li>
                    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </a>
                </li>
            </ul>
        </header>
    );
}

// props.page의 기본값을 'home'으로 설정
Header.defaultProps = {
    page: "Home"
};

export default Header;
