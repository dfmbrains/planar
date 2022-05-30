import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Personal from "../../pages/Personal";

const PublickRoute = () => {
    return (
        <Routes>
            <Route element={<Home/>} path={"/"}/>
            <Route element={<Personal/>} path={"/personal"}/>
        </Routes>
    );
};

export default PublickRoute;