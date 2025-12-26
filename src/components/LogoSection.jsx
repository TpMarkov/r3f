import React from 'react'
import {logoIconsList} from "../constants/index.js";

const LogoIcon = ({icon}) => {
  return (
      <div className={"flex-none flex-center marquee-item"}>
        <img src={icon.imgPath} alt="logo-img"/>
      </div>
  )
}

const LogoSection = () => {
  return (
      <div className={"md:my-20 my-10 relative"}>
        <div className={"gradient-edge"}></div>
        <div className={"gradient-edge"}></div>

        <div className={"marquee h-52"}>
          <div className={"marquee-box md:gap-12 gap-5"}>
            {logoIconsList.map((icon) => (
                <LogoIcon icon={icon} key={icon.imgPath}/>
            ))}
            {logoIconsList.map((icon) => (
                <LogoIcon icon={icon} key={icon.imgPath}/>
            ))}
          </div>
        </div>
      </div>
  )
}
export default LogoSection
