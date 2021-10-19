import React from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
  const {signInWithGoogle}=useAuth();
  const location=useLocation();
  const history=useHistory()
  const redirect_uri=location.state?.from || '/home';

  const handleGoogleLogIn=()=>{
    signInWithGoogle()
    .then((result) => {
      history.push(redirect_uri);
      // console.log(result.user);
    })
  }
    return (
        <div className="text-center my-60 mx-auto ">
            <form>
            <input className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/>
            <input className="border-2 px-5 rounded w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"placeholder="Enter Password"/><br/><br/>
             {/* <input className="border-2 rounded px-4 w-11/12  md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/> */}
             {/* <input className="border-2 rounded px-4 w-11/12  md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail"/><br/> <br/> */}
           <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded">
    Log In
  </button>
  <br/>
  <br/>
<p>Don't have sign up? Please sign up.. 
    
    { /* <button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-20 h-8 text-white font-semibold text-base rounded">
    Sign Up
  </button> */}

   <NavLink className=" inline-block bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-16 h-6 text-white font-medium text-base rounded" to="/register">Sign Up</NavLink>
 </p>
  </form>


  <div>-----------or-----------</div>
  <button className="bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  h-8 pl-2 pr-2 text-white font-medium text-base rounded" onClick={handleGoogleLogIn}>Google Sign In</button>

        </div>
    );
};

export default SignIn;