import React from "react";
import TitlePanel from "../components/panels/TitlePanel";
import AboutPanel from "../components/panels/AboutPanel";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";

function AboutPage () {
    return(
        <motion.div className=" snap-y snap-mandatory h-screen w-screen overflow-scroll snap-always"
        variants={routeVariant}
        initial="initial"
        animate="animate"
        exit="exit">
            <TitlePanel></TitlePanel>
            <AboutPanel></AboutPanel>
        </motion.div>
    );
}

export default AboutPage;