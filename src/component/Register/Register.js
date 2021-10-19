import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const {user,signInWithGoogle,logOut}=useAuth();
    return (
        <div className="mx-auto text-center my-40">

   <form>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name"/><br/> <br/>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name"/><br/> <br/>
  <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/>
  <input className="border-2 px-5 rounded w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"placeholder="Enter Password"/><br/><br/>
  <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded">
    Submit
  </button>
  <br/>
  <br/>
  
  </form>

  <p>Already Sign Up ?
    <NavLink className=" inline-block bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-16 h-6 text-white font-medium text-base rounded" to="/sign">Log In </NavLink>
      </p>





  {/* {
    user.email?
<button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" onClick={logOut}>Log Out</button> :
    <div> */}
    
      {/* </div>
  }
   */}
   
        </div>
    );
};

export default Register;