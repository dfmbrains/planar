import React from 'react';
import 'remixicon/fonts/remixicon.css';
import "@fancyapps/ui/dist/fancybox.css";
import {Route, Routes} from "react-router-dom";
import PublickRoute from "./routers/PublickRoute";
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route element={<PublickRoute/>} path={"*"}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
