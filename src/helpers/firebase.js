// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAptle17ZRGPGjmLBUUxPJXkvv2U6PSyE",
  authDomain: "blog-app-fe142.firebaseapp.com",
  projectId: "blog-app-fe142",
  storageBucket: "blog-app-fe142.appspot.com",
  messagingSenderId: "357403443830",
  appId: "1:357403443830:web:6e99951dcace9756d7d557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export const createUser = async (email, password,navigate) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log(userCredential)
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
     
      
    } catch (err) {
    
    alert(err.message);
      }
    };
    export const signIn = async (email, password, navigate) => {
        try {
          //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
          let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          navigate("/");
          
          console.log(userCredential);
        } catch (err) {
        
          alert(err.message);
        }
      };
      export const logOut = () => {
        signOut(auth);
     
      };