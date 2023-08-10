import React from "react";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";

function HighlightsPage () {
    return(
        <motion.div className=" h-screen w-screen bg-red-300 rounded-4xl"
        variants={routeVariant}
        initial="initial"
        animate="animate"
        exit="exit">

        </motion.div>
    );
}

export default HighlightsPage;