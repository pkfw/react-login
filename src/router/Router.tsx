import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;