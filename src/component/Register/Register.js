import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";


const auth = getAuth();

const Register = () => {
  // const {user,signInWithGoogle,logOut}=useAuth();
  const [firstName,setFirstName]=useState('');
  const [lastName,setlastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');

  const handleRegistration=(e)=>{
    e.preventDefault();

    if(password.length<6){
      setError('Password must be six character');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    setError('');
    setUserName();
  })
  .catch(error=>{
    setError(error.message);
  })
// console.log(firstName,lastName,email,password);

  }

  const setUserName=()=>{

    updateProfile(auth.currentUser, {
      displayName: firstName , photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      
    }).catch((error) => {
    
    });
  }



  const handleFirstName=(e)=>{
    setFirstName(e.target.value);
  // console.log(firstName);
  }
  const handleSecondName=(e)=>{
    setlastName(e.target.value);
    // console.log(lastName);

  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);


  }
  const handlePassword=(e)=>{

    setPassword(e.target.value);

  }

    return (
        <div className="mx-auto text-center my-40">

   <form onSubmit={handleRegistration}>
  < input type="text" onBlur={handleFirstName} className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First Name" required/><br/> <br/>

  <input type="text" onBlur={handleSecondName} className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Last Name" required/><br/> <br/>

  <input type="text" onBlur={handleEmail} name="email" className="border-2 rounded px-4 w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter E-mail" required/><br/> <br/>

  <input onBlur={handlePassword} type="password" name="password" className="border-2 px-5 rounded w-11/12 md:w-96 h-12 border-green-500  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"placeholder="Enter Password" required/><br/><br/>

   <div className="text-red-500 mb-5">{error}</div>

  <input type="submit" value="Register" className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-52 h-10 text-white font-semibold text-xl rounded"/>
    
  <br/>
  <br/>
  
  </form>

  <p>Already Sign Up ?
    <NavLink className=" inline-block bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-16 h-6 text-white font-medium text-base rounded" to="/sign">Log In </NavLink>
      </p>
   
        </div>
    );
};

export default Register;