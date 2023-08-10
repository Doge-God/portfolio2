import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HighlightsPage from "../pages/HighlightsPage";
import { AnimatePresence } from "framer-motion";
import ContactPage from "../pages/ContactPage";

function RoutesWithAnimation () {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.key}> 
                <Route path='/' element={<HomePage/>}/>
                <Route path='/highlights' element={<HighlightsPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Routes>
        </AnimatePresence>
        
    )
}

export default RoutesWithAnimation;