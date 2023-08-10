
import Tilt from "react-parallax-tilt"

function ProjectCard(props) {

  return (
        <Tilt glareEnable={true} glareMaxOpacity={0.3} glareColor="#e8dcfc" glarePosition="bottom" glareBorderRadius="5px" perspective={1500}>
          <div className=" inner-element w-full h-fit pt-2 pb-10 px-2 mb-8
              shadow-lg-neu-5 rounded-2xl border-t-2 border-l-2 border-white
              flex flex-col break-inside-avoid"
              onClick={()=>window.open(props.extLink, "_blank")}>
            <img src={props.imgSrc} className=' w-full h-64 object-cover rounded-xl shadow-inner shadow-black border-white border-r-2 border-b-2'></img>
            <div className=' mx-2 my-2 text-xl font-plex font-medium text-ui-key'>{props.title}</div>
            <div className=' text-xs mx-2 font-plex text-ui-main'>
                {props.description}
            </div>
        </div>
        </Tilt>
        
        
        
  );
}
//onClick={()=>window.open(prop.extLink, "_blank")}

export default ProjectCard;