import React from "react";
import { motion } from "framer-motion";
import routeVariant from "../util/AnimationVariants";
import ProjectCard from "../components/ProjectCard.jsx";

const DigiExpImg = require("../resource/projectsCard/DigitalExperiments.png")
const DogeBotImg = require("../resource/projectsCard/DogeBot2.png")
const PorfolioImg = require("../resource/projectsCard/portfolio.png")
const KeepfreshImg = require("../resource/projectsCard/Keepfresh.png")

function HighlightsPage () {
    return(
        <motion.div className=" bg-bg-main w-full min-h-screen flex flex-col items-center pb-20"
        variants={routeVariant}
        initial="initial"
        animate="animate"
        exit="exit">
            <div className="max-w-2xl mx-10 w-full">
                <div className=" mt-20 text-ui-key font-plex text-3xl font-light self-start"> Highlights </div>
                <div className=" mb-10 text-ui-main font-plex text-md font-light self-start"> Click to learn more.</div>
                <div className=" columns-2 gap-8">
                    <ProjectCard title="Portfolio" imgSrc={PorfolioImg} description="React frontend project. Built with React, TailwindCSS and Typescript." extLink={"https://github.com/Doge-God/portfolio2"}></ProjectCard>
                    <ProjectCard title="Stack" imgSrc={DogeBotImg} description="A UI/UX time management app prototype I made with Figma. It all stated with a vague client goal of 'reducing stress in life'." extLink={"https://www.behance.net/gallery/152638193/Stack-Time-Management-Game-Prototype"}></ProjectCard>
                    <ProjectCard title="Digital Experiments" imgSrc={DigiExpImg} description="Three projects in three weeks, where I derive and develop upon some very vague prompts: an phone app to promote public transport targeted at 6 year olds; a poster with your childhood toy; a virtual experience to immerse the user in a different culture." extLink={"https://miro.com/app/board/uXjVPjMcna4=/?share_link_id=123820344246"}></ProjectCard>
                    <ProjectCard title="Freshkeep" imgSrc={KeepfreshImg} description="An IoT product that turns any fridge into a smart fridge. In this group project I acted as the tech lead." extLink={"https://miro.com/app/board/uXjVOjkub3s=/"}></ProjectCard>
                </div>
            </div>
            

        </motion.div>
    );
}

export default HighlightsPage;