import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/Main'
import Repositorio from "./pages/Repositorio";

export default function FuncRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path='/repositorio' element={<Repositorio/>} />
            </Routes>
        </Router>
    )
}