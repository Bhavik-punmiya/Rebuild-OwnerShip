 import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { auth } from "../../firebase";




 const userAuthContext = createContext();
 
 export function UserAuthContextProvider({children}){
      const [user,setUser]=useState();
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logout(){
        return signOut(auth);
    }
    function googlesignin(){
        const googleauthprovider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleauthprovider);
    }
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
        });
        return ()=>{
            unsubcribe();
        }
    },[])


    return( <userAuthContext.Provider value={{user,signup,login,logout,googlesignin}} >{children}</userAuthContext.Provider>)
 }
 export function useUserAuth(){
return useContext(userAuthContext)

 }