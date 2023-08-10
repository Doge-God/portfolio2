import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { toggleMenu,menuOff } from "../redux/navSlice";
import { Spin as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";


function NavMenu () {
    const isMenuOn = useAppSelector(state => state.nav.isMenuOn)
    const dispatch = useAppDispatch()
    return(
        <div>
            <div className="fixed z-30 rounded-full w-24 h-24 top-12 right-12 
            lg:top-16 lg:right-20 lg:w-28 lg:h-28
            xl:top-20 xl:right-20 xl:w-32 xl:h-32
            shadow-lg-neu-5 border-white border-l-2 border-t-2 bg-bg-main 
            hover:bg-gradient-to-br from-[#d5d5d5] to-[#FEFEFE] hover:border-purple-50
            active:bg-gradient-to-br active:shadow-none
            transition ease-in-out
            flex items-center justify-center"
            onClick={()=>{dispatch(toggleMenu())}}>
                <Hamburger toggled={isMenuOn} size={40} color="#8A8A8A"></Hamburger>
            </div>

            <div className={ isMenuOn?
                " ease-in-out duration-150 delay-200 fixed top-0 z-20 w-72 h-screen bg-bg-main rounded-l-3xl shadow-md-even border-l-2 border-white right-0":
                " ease-in-out duration-150 delay-200 fixed top-0 z-20 w-72 h-screen bg-bg-main rounded-l-3xl shadow-md-even border-l-2 border-white -right-80"
            }>
                <div className=" w-full flex flex-col mt-56 items-center gap-4">
                    <MenuLink to="/" text="About Me" onClick={()=>{dispatch(menuOff())}}></MenuLink>
                    <MenuLink to="/highlights" text="Highlights" onClick={()=>{dispatch(menuOff())}}></MenuLink>
                    <MenuLink to="/contact" text="Contact Me" onClick={()=>{dispatch(menuOff())}}></MenuLink>
                </div>
                
            </div>

            <div className={ isMenuOn?
            " ease-in-out duration-150 delay-200 fixed w-[99vw] z-10 border-gray-800/20 border-l-2 h-screen top-0 bg-black/20 rounded-l-3xl backdrop-blur-sm right-0":
            " ease-in-out duration-150 delay-200 fixed w-[99vw] z-10 border-gray-800/20 border-l-2 h-screen top-0 bg-black/20 rounded-l-3xl backdrop-blur-sm -right-[99vw]"
            }></div>
        </div>
        
    );
}

export default NavMenu;

//hover:bg-gradient-to-br hover:from-[#d5d5d5] hover:to-[#FEFEFE]