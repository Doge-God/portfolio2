import React from "react";
import TitlePanel from "../components/panels/TitlePanel";
import AboutPanel from "../components/panels/AboutPanel";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";
import ContactButton from "../components/ContactButton";

function ContactPage () {
    return(
        <motion.div className=" snap-y snap-mandatory h-screen w-screen overflow-scroll snap-always"
        variants={routeVariant}
        initial="initial"
        animate="animate"
        exit="exit">
        
        <div className=" h-[98vh] w-full rounded-b-4xl bg-bg-main shadow-lg-even snap-center border-b-2 border-slate-300 
        flex justify-center items-center ">
            <div className=" max-w-sm lg:max-w-3xl mx-10 w-full columns-1">
                <div className=" text-ui-key font-plex text-xl font-light">Let's keep in touch :)</div>
                <div className=" text-ui-main font-plex text-3xl font-light">Futianzhou@hotmail.com</div>
            </div>
        </div>
        </motion.div>
    );
}

export default ContactPage;