import React from "react";
import TitlePanel from "../components/TitlePanel";
import AboutPanel from "../components/AboutPanel";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";

function ContactPage () {
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

export default ContactPage;