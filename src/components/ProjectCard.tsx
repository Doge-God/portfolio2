

interface iProjectCardProp {
  title:string,
  imgSrc:string,
  description:string,
  extLink:string
}

function ProjectCard(props:iProjectCardProp) {

  return (

        <div className=" inner-element w-full h-fit pt-2 pb-10 px-2 mb-8
        shadow-lg-neu-5 rounded-2xl border-t-2 border-l-2 border-white
        flex flex-col break-inside-avoid">
            <img src={props.imgSrc} className=' w-full h-64 object-cover rounded-xl shadow-inner shadow-black border-white border-r-2 border-l-2'></img>
            <div className=' mx-2 my-2 text-xl font-plex font-medium text-ui-key'>{props.title}</div>
            <div className=' text-xs mx-2 font-plex text-ui-main'>
                {props.description}
            </div>
        </div>
        
        
  );
}
//onClick={()=>window.open(prop.extLink, "_blank")}

export default ProjectCard;