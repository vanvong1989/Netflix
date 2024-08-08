
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { signInWithEmailAndPassword, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";





const firebaseConfig = {
  apiKey: "AIzaSyBhlx-9TJT3v5cFYLq0BtT-Yf2OjgTBDxg",
  authDomain: "netflix-clone-c2d96.firebaseapp.com",
  projectId: "netflix-clone-c2d96",
  storageBucket: "netflix-clone-c2d96.appspot.com",
  messagingSenderId: "457464805648",
  appId: "1:457464805648:web:6d2133b60f067457990d95"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try {
     const res =  await createUserWithEmailAndPassword(auth, email, password);
     const user = res.user;
     await addDoc(collection(db, "user"), {
        uid: user.uid,
        name, 
        AuthProvider: "local",
        email, 
     })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const login = async (email, password) =>{
    try {
      await  signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};