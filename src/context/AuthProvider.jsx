import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser =( email, password)=>{
    setLoading(true)
    return  createUserWithEmailAndPassword(auth,email,password);
  }

  const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleSignIn = ()=>{
    setLoading(true)
      return signInWithPopup(auth,provider)
  }

  const signOutUser = ()=>{
    setLoading(true)
      signOut(auth)
    
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,createUser =>{
        setUser(createUser);
        setLoading(false)
        console.log('state capture',createUser)
    })
    return ()=>{
        unSubscribe()
    }
  },[])
    

  const info = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    signOutUser,
    googleSignIn,
  };

  

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
