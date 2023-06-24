import LandingPage from "./LandingPage";
import GetHomePage from "./GetHomePage";
import App from "./App";
import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main=()=>{
    const[isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
    },[]);

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    isLoading ? <LandingPage /> : <GetHomePage />
                } />
                <Route path='/App' element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;