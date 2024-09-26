import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Signup from './pages/Signup';
import LoginLanding from "./pages/LoginLanding";




const AppRouter = () => {
    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/loginlanding" element={<LoginLanding />} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter;