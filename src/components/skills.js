import React from "react";
import JS from '../assets/js.png';
import ReactJS from '../assets/ReactJS.jpg';
import Redux from '../assets/redux.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import stripe from '../assets/stripe.png';
import pwa from '../assets/pwa.png';
import jwt from '../assets/jwt.png';
import node from '../assets/node.png';
import ex from '../assets/ex.png';
import mongoose from '../assets/mongoose.jpg';
import mongo from '../assets/mongo.png';
import sequelize from '../assets/sequelize.png';
import sql from '../assets/sql.png';
import graqhQl from '../assets/graphql.png';
import apollo from '../assets/apollo.jpg';
import rest from '../assets/rest.png';
import git from '../assets/git.jpg';
import wp from '../assets/wordpress.png'
import { Link } from "react-router-dom";


const Skills = () => {

  return(
    <div className="w-screen flex flex-wrap">
      <div className="pl-6"><Link to='/' className="text-white font-bold text-3xl"> ← Back to Home</Link></div>
      <div className="flex flex-wrap w-screen h-fit justify-center transition-all">
      <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={JS} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Javascript is my most used language.  I am highly profficient with it.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={ReactJS} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">React is my bread and butter, I've created many projects with React and wrote the entire frontend of Vacanze with it.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={Redux} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Redux is what I have used in all my React projects for state management.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={wp} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I use worpress every day at Benlabs.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={html} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I know everything about HTML ;)</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={css} className="rounded-xl object-cover h-full m-auto" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I use CSS and multiple CSS frameworks like Tailwind, Bootstrap, and Bulma</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={stripe} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I've created stripe integrations from start to finish, from shopping carts, to fully application integrations using webhooks.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={pwa} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I've created PWAs that have custom icons, titles, & colors based on database infa and which page a user is downloading.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={jwt} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I've used JSON Web Tokens to verify if user's are logged in.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow flex centerStuff">
            <img src={node} className="rounded-xl object-cover w-[95%] m-auto" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Node.JS is my go to backend framework, I have built many projects and a business using Node.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow flex centerStuff">
            <img src={ex} className="rounded-xl object-cover w-[95%] m-auto" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I have used express on many applications to create a REST API along with Node.js</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={mongoose} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">I've used Mongoose on multiple projects and done complex CRUD operations.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={mongo} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Mongo is my go to Database, used on multiple projects and on Vacanze.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={sequelize} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Used on multiple projects.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={sql} className="rounded-xl object-cover h-[90%]" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Used on multiple projects.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={graqhQl} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Used graphQL extensively on projects and on live businesses/applications </p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={apollo} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Used Apollo with graphQl extensively on projects and on live businesses/applications</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow">
            <img src={rest} className="rounded-xl object-cover h-full" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Made multiple projects using rest APIs.</p>
          </div>
        </div>
        <div className="group w-64 h-64 m-8 relative">
          <div className="font-bold text-3xl group-hover:w-64 group-hover:h-64 m-2 group-hover:m-0 transition-all w-60 h-60 bg-white rounded-xl shadow flex centerStuff">
            <img src={git} className="rounded-xl object-cover w-[95%]" />
          </div>
          <div className="centerStuff absolute h-64 w-64 bg-gray-600 opacity-0 group-hover:opacity-80 transition-all rounded-xl top-0 flex align-center justify-center">
            <p className="relative opacity-100 group-hover:opacity-100 transition-all text-white w-[95%] m-auto text-center flex align-center justify-center">Profficient with Git & Github.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;