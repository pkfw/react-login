import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login_1 from "../page/Login_1";
import NotFound from "../page/NotFound";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/req/1" element={<Login_1 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;