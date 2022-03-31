import { Routes, Route, Link } from "react-router-dom";

export const Router= ()=>{
    return(
        <>
            <Routes>
                <Router path="/" element={<Home />}/>
            </Routes>
        </>
    );
}