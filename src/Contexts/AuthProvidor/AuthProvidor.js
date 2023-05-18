import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebaseinit";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvidor = ({ children }) => {
  const [user, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cuser) => {
      if (user) {
        setUsers(cuser);
      } else {
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const signinuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const usersignOut = () => {
    return signOut(auth)
      
  };

  const Authinfo = { user, createUser, signinuser,usersignOut };

  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvidor;
