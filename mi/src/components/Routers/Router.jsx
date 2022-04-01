import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";

export const Router= ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    );
}