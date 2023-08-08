import React from "react";
import { TypeAnimation } from "react-type-animation";

function TitlePanel () {
    return(
        <div className=" h-[96vh] w-full rounded-b-4xl bg-bg-main shadow-lg-even snap-center border-b-2 border-slate-300 
        flex justify-center items-center ">
            <div className=" max-w-sm lg:max-w-3xl mx-10 w-full flex flex-col">
                <div className=" text-ui-main font-plex text-3xl font-light">I am</div>
                <div className=" text-ui-key font-plex text-5xl font-medium my-3">Futian Zhou</div>
                <div className=" py-2 px-4 max-w-md shadow-lg-neu-5-inner rounded-lg border-r-2 border-b-2 border-slate-50">
                    <TypeAnimation sequence={
                        [
                            "Software Engineer",
                            750,
                            "Designer",
                            750,
                            "Bit of both",
                            1000
                        ]} speed={65} repeat={Infinity} deletionSpeed={90}
                        wrapper="div" className=" font-plex text-ui-main text-2xl"/>
                </div>
            </div>
            
        </div>
    );
}

export default TitlePanel;