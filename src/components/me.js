import React from "react";
import stripe from '../assets/stripe.png';
import { Link } from "react-router-dom";

const Me = () => {

  return(
    <div className="w-screen h-screen">
      <div className="w-full flex">
        <Link to="/" className="text-white font-bold text-3xl mr-auto ml-20 mb-8">
        ← Back to Home
        </Link>
      </div>
      <section className="flex flex-wrap align-start w-4/5 m-auto">
      <div className="w-3/4 m-auto mt-0 text-left text-3xl font-bold text-white text=center">
        <h2 className="text-5xl m-auto w-fit">About me.</h2>
        <p className="text-center mt-12">I Graduated from Weber State University with an associates degree in Management Information Systems and have a coding certificate from the University of Utah.</p>
        <p className="text-center mt-6">
          I Love rock climbing, skiing, fly fishing, playing hockey, and of course, software development!
        </p>
        <img src={stripe} className="m-auto mt-12"/>
      </div>

      </section>
    </div>
  )
}

export default Me;