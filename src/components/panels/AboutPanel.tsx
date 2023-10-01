import React from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaPython, FaReact, FaFigma, FaJava} from 'react-icons/fa'
import {SiTailwindcss, SiTypescript,SiDotnet,SiCsharp} from 'react-icons/si'
import { icons, IconType } from 'react-icons';
import SkillBadge from "../SkillBadge";

const skillBadges: { icon:JSX.Element, text:string }[] = [
    {
      icon:<FaPython/>,
      text: 'Python'
    }, {
      icon:<SiTailwindcss/>,
      text:'Tailwind'
    }, {
      icon:<FaReact/>,
      text:'React'
    }, {
      icon:<SiTypescript/>,
      text:'Typescript'
    }, {
      icon:<SiDotnet/>,
      text:'.NET Core'
    }, {
      icon:<FaFigma/>,
      text:'Figma'
    }, {
      icon:<SiCsharp/>,
      text:'C#'
    }, {
      icon:<FaJava/>,
      text:'Java'
    }
  
  ]
  

function AboutPanel () {
    return(
        <div className=" h-[96vh] w-full rounded-3xl mt-[8vh] mb-[4vh] bg-bg-main shadow-lg-even snap-center border-y-2 border-slate-300 
        flex justify-center items-center">
            <div className=" max-w-sm lg:max-w-3xl 
                justify-self-center flex flex-col lg:flex-row
                font-plex
                divide-ui-main divide-y-2 divide-dotted lg:divide-x-2 lg:divide-y-0">

                {/*INTRO CONTAINER*/}
                <div className='w-full lg:w-[60%] flex flex-col justify-center'>
                    <p className=' font-plex text-ui-main text-base text-md pr-3'> I am Futian Zhou. Currently studying a Bachelor of Engineering 
                    and Design conjoint degree majoring in software engineering. </p>
                    <br/>
                    <p className= ' font-plex text-ui-main text-base text-md pr-3'> I like making stuff. I am passionate about product design, UI/UX and 
                    fullstack development. I'm interested in fields IoT, mixed reality and how we might better implement them
                    into our everyday life. </p>
                </div>

                {/*SKILL CONTAINER*/}
                <div className=' w-full pt-3 mt-3 lg:mt-0 lg:w-[40%] pl-4'>
                  <div className='text-2xl px-2 font-normal mb-2
                     text-ui-key'>I know a thing or two about: </div>
                  {/*CARD CONTAINER*/}
                  <div className=' w-full h-full flex flex-wrap content-start'>
                    {skillBadges.map( (badgeElement) => {
                    return (<SkillBadge icon={badgeElement.icon} text={badgeElement.text}/>);})}
                  </div>
                </div>

                
            </div>
        </div>
    );
}

export default AboutPanel;