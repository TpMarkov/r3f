import React from 'react'
import {words} from "../src/constants/index.js";
import Button from "../src/components/Button.jsx";
import HeroExperience from "../src/components/HeroModels/HeroExperience.jsx";

const Hero = () => {
  return (
      <sectison id="hero" className="realtive overflow-hidden">
        <div className={"absolute top-0 left-0 z-10"}>
          <img src="/images/bg.png" alt="backgroung"/>

          <div className={"hero-layout"}>
            {/*LEFT  : hero content*/}
            <header className={"flex flex-col justify-center md:w-full w-screen md:px-20 px-5"}>
              <div className={"flex flex-col gap-7"}>
                <div className={"hero-text"}>
                  <h1 className={""}>Shaping
                    <span className={"slide"}>
                      <span className={"wrapper"}>
                        {words.map((word) => (
                            <span key={word.text} className={"flex items-center md:gap-3 gap--1 pb-2"}>
                              <img src={word.imgPath} alt={word.text}
                                   className={"xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"}
                              />
                              <span>
                              {word.text}
                              </span>
                            </span>
                        ))}
                      </span>
                    </span></h1>
                  <h1>into Real Projects</h1>
                  <h1>that Deliver Results</h1>

                </div>

                <p>Hi, I'm Tsvetan, a developer based in Bulgaria with a passion for code.</p>
                <Button text={"See my work"} id={"button"} className={"md:w-80 md:h-16 w-60 h-12"}/>
              </div>
            </header>
            {/*RIGHT : 3D mode*/}
            <HeroExperience/>


          </div>
        </div>

      </sectison>
  )
}

export default Hero;