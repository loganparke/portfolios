import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//HOVER IMAGES
import projectsImage from '../assets/projectsImage.jpg';
import vacanzeLogo from '../assets/vacanzeLogo.svg';
import vacanzeLogo1 from '../assets/vacanze.png'
import logan1 from '../assets/logan1.jpeg'
import logan2 from '../assets/logan2.JPG'
import benlabs from '../assets/BENlabs.png'
import resume from '../assets/resume.jpg'
import github from '../assets/github.png'
import skills from '../assets/skills.png'

const About = () => {

const handleMouseMove = (e) => {
  const container =  document.getElementById("container");
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDec = mouseX / window.innerWidth,
        yDec = mouseY / window.innerHeight;
  
  const maxX = container?.offsetWidth - window.innerWidth,
        maxY = container?.offsetHeight - window.innerHeight;
  
  const moveX = (maxX * xDec * -1).toFixed();
  const moveY = (maxY * yDec * -1).toFixed();


container.animate({
    transform: `translate(${moveX}px, ${moveY}px)`
  }, {
    duration: 5000,
    fill: "forwards",
    easing: "ease"
  })
}
  return (
    // <div className="absolute w-[150%] h-[150%] bg-[#282c34]">
    <>
    {/* <div className="font-bold text-9xl absolute top-[41%] left-[31%] z-10 w-fit bg-none">Logan Parke</div> */}
    <div onMouseMove={handleMouseMove} className='bg-gradient-to-br from-black to-gray-500' id="container">

    <Link to='/skills'>
      <div className="tile bg-red-500 h-[14%] w-[20%] left-[65%] top-[55%]">
        <div className="">
        <h2 className="absolute top-[40%] right-[40%] text-5xl font-bold"></h2>
        <img className=" z-[100] w-full h-full object-cover" src={skills} />
        </div>
      </div>
    </Link>

    <Link className="w-full h-full" to="/vacanze">
    <div className="tile bg-blue-500 h-[24%] w-[32%] left-[32%] top-[12%]">
      <div>
        <div className="m-auto">
          <h2 className="absolute top-[40%] right-[40%] text-white textShadow text-5xl font-bold"></h2>
        </div>
      <img className=" z-[100] w-full h-full object-cover" src={vacanzeLogo} />
      </div>
    </div>
    </Link>

    <a target='_blank' href="https://github.com/loganparke">
      <div className="tile bg-purple-500 h-[14%] w-[12%] right-[72%] top-[64%]">
        <div className="">
          <div className="m-auto">
              <h2 className="absolute top-[65%] right-[10%] text-white textShadow text-5xl font-bold">My Github</h2>
          </div>
        <img className=" z-[100] w-full h-full object-cover" src={github} />
        </div>
      </div>
    </a>

    {/* <div className="tile bg-[#1e4259] h-[14%] w-[24%] right-[25%] top-[48%]">
      <div className="">
      <h2 className="absolute top-[40%] right-[40%] text-5xl font-bold">Hello</h2>
      <img className=" z-[100] w-full h-full object-cover" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" />
      </div>
    </div> */}
    <Link className="w-full h-full" to="/me">
      <div className="tile bg-green-500 h-[42%] w-[20%] left-[8%] top-[5%]">
        <div className="">
          <div className="m-auto">
            <h2 className="absolute top-[40%] right-[30%] text-white textShadow text-5xl font-bold">About Me</h2>
          </div>
        <img className=" z-[100] w-full h-full object-cover" src={logan2} />
        </div>
      </div>
    </Link>

    <a href='https://docs.google.com/document/d/1UoiLl08y2dkr05MTRV2YMt4Y0Hv_0B50Ikw8UXZeUww/edit?usp=sharing' target='_blank'>
    <div className="tile bg-blue-300 h-[24%] w-[24%] left-[68%] top-[8%]">
      <div className="">
      <h2 className="absolute top-[40%] right-[35%] text-5xl font-bold textShadow text-black">Resume</h2>
      <img className=" z-[100] w-full h-full object-cover" src={resume} />
      </div>
    </div>
    </a>

    <Link to='/benlabs'>
      <div className="tile bg-white h-[23%] w-[25%] left-[35%] top-[43%]">
        <div className="">
        <h2 className="absolute top-[40%] right-[40%] text-5xl font-bold"></h2>
        <img className=" z-[100] w-full h-full object-cover" src={benlabs} />
        </div>
      </div>
    </Link>
  </div>
  
  </>
  )
}

export default About;