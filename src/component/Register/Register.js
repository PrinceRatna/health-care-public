import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="mx-auto text-center my-40">

   <form>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name"/><br/> <br/>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name"/><br/> <br/>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/>
  <input className="border-2 px-5 rounded w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"placeholder="Enter Password"/><br/><br/>
  <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded">
    Sign up
  </button>
  <br/>
  <br/>
  <p>Already sign in ? {/*  <button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-20 h-8 text-white font-medium text-base rounded">
    Sign In
  </button> */}
  <NavLink className=" inline-block bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-16 h-6 text-white font-medium text-base rounded" to="/sign">Sign In </NavLink>
    </p>
  </form>
        </div>
    );
};

export default Register;