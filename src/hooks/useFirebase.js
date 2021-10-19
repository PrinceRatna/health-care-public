import { getAuth,signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {  onAuthStateChanged } from "firebase/auth";
import firebaseInitialization from "../Firebase/firebase.init";
firebaseInitialization();

const useFirebase=()=>{

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({})


    const signInWithGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
        
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({});
          })

    }
        useEffect(()=>{

            onAuthStateChanged(auth, (user) => {
              if (user) {
                setUser(user);
                
              } 
            });

        },[]);

        return{
            user,
            signInWithGoogle,
            logOut
        }
      
    }
    
    export default useFirebase;


