import React from "react";
import TitlePanel from "../components/TitlePanel";
import AboutPanel from "../components/AboutPanel";

function AboutPage () {
    return(
        <div className=" snap-y snap-mandatory h-screen w-screen overflow-scroll snap-always">
            <TitlePanel></TitlePanel>
            <AboutPanel></AboutPanel>
        </div>
    );
}

export default AboutPage;