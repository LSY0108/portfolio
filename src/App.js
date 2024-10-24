import React from 'react';
import './App.css';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import List from './components/PageList/List';

function App() {
    return (
        <BrowserRouter>
            <Header page="home" /> {/* Header는 항상 렌더링됩니다. */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home은 기본 경로에서 렌더링 */}
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
