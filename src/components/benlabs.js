import React from "react";
import { Link } from "react-router-dom";

const BenLabs = () => {

  return(
    <div className="w-screen h-screen">
      <div className="w-full flex">
        <Link to="/" className="text-white font-bold text-3xl mr-auto">
          Home
        </Link>
      </div>
      <section className="flex flex-wrap align-start mt-12">
      <div className="w-3/5 mt-0 m-auto text-5xl text-white font-bold">
        <h2>BENlabs is my current employer, I work on their TubeBuddy team as a Front-End Developer.</h2>
        <p className="text-2xl mt-8">As a Front-End Developer, I am responsible for creating user-friendly and visually appealing web interfaces using HTML, CSS, and JavaScript along with Wordpress and Shopify.  I also build tests to track conversions on our website to optimize web traffic and increase revenue.  I collaborated with cross-functional teams, including designers and back-end developers, to connect webpages to our backend, implement responsive designs, and ensure a seamless user experience. </p>
        <div className="mt-20">
          <a className="bg-white text-black py-2 px-8 mr-12 rounded-full" href="https://www.benlabs.com/">Benlabs</a>
          <a className="bg-red-600 py-2 px-8 mr-12 rounded-full"href="https://www.tubebuddy.com/">TubeBuddy</a>
        </div>
      </div>
      </section>
    </div>
  )
}

export default BenLabs;