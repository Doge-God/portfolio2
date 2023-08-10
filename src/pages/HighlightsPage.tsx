import React from "react";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";
import ProjectCard from "../components/ProjectCard";

const DigiExpImg = require("../resource/projectsCard/DigitalExperiments.png")
const DogeBotImg = require("../resource/projectsCard/DogeBot2.png")

function HighlightsPage () {
    return(
        <motion.div className=" bg-bg-main w-full min-h-screen flex flex-col items-center pb-20"
        variants={routeVariant}
        initial="initial"
        animate="animate"
        exit="exit">
            <div className="max-w-2xl mx-10 w-full">
                <div className=" mt-20 mb-3 text-ui-main font-plex text-3xl font-light self-start"> Highlights </div>
                <div className=" columns-2 gap-8">
                    <ProjectCard title="Digital Experiments" imgSrc={DogeBotImg} description=" jfdslkajf kjsdah fjksdhjkc hdskja hcjksdh jkc jkchsjk ahcjsd cjksadhc jksdh cjksdhc jkads" extLink={""}></ProjectCard>
                </div>
            </div>
            

        </motion.div>
    );
}

export default HighlightsPage;