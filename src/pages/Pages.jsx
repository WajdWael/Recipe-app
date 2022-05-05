import Home from "./Home"
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine"
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

export default function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/Recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}
