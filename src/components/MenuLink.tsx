import React from "react";
import { NavLink } from "react-router-dom";

interface iNavProp {
    to: string;
    text: string;
    onClick?: ()=>any;
}

function MenuLink (props:iNavProp) {
    return(
        <NavLink to={props.to} className="font-plex text-xl text-ui-main w-52 bg-bg-main py-2 px-4 rounded-md
         shadow-none hover:shadow-lg-neu-5 active:shadow-none active:bg-gradient-to-br from-[#d5d5d5] to-[#FEFEFE]
         transition ease-out"
         onClick={props.onClick}>
            {props.text}
        </NavLink>
    );
}

export default MenuLink;