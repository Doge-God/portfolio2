
import { ReactElement, ReactSVGElement } from 'react';



type Props = {
    id?:string,
    text:string,
    icon: string | JSX.Element
}


function SkillBadge(prop:Props) {

  return (
    <div className=' flex w-fit h-fit shrink-0 m-1 px-3 py-1  items-center gap-1
    rounded-md font-plex font-light text-base text-ui-key
     bg-bg-main shadow-sm-neu-5'>
      {prop.icon}
      {prop.text}
    </div>
  );
}

export default SkillBadge;