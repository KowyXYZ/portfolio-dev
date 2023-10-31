import React from 'react'

import { css, html, javascript, reactjs, redux, tailwind, threejs, git, figma, firebase, } from '../../Assets';
import BallCanvas from './BallCanvas';



function Balls() {

    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
    
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
    
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },

        {
            name: "firebase",
            icon: firebase,
          },
    
      ];
      
  

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
    {technologies.map((technology, index) => {
      return(
        <div key={technology.name} className='w-28 h-28' >
          <BallCanvas icon={technology.icon}/>
        </div>
      )
    })}

</div>
  )
}

export default Balls
