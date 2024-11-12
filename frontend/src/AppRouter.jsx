import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import LoginLanding from "./pages/LoginLanding";
import MyProjects from "./pages/MyProjects";
import NewProject from "./pages/NewProject";
import Browsing from "./pages/Browsing";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/loginlanding" element={<LoginLanding />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/browsing" element={<Browsing />} />
        </Routes>
      </Router>
    </>
  );
};

// const AppRouter = () => {
//     return (
//         <>
//         <Router>
//             <SetNavbar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/loginlanding" element={<LoginLanding />} />
//             </Routes>
//         </Router>
//         </>
//     )
// }
// >>>>>>> main

export default AppRouter;
