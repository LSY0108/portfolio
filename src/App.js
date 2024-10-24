import React from 'react';
import './App.css';
import './index.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Header/>} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
