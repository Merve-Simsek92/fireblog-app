// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAptle17ZRGPGjmLBUUxPJXkvv2U6PSyE",
  authDomain: "blog-app-fe142.firebaseapp.com",
  databaseURL: "https://blog-app-fe142-default-rtdb.firebaseio.com",
  projectId: "blog-app-fe142",
  storageBucket: "blog-app-fe142.appspot.com",
  messagingSenderId: "357403443830",
  appId: "1:357403443830:web:9af21b8179012b2dd7d557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default app





export const createUser = async (email, password,navigate) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      
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
      export const logOut = async (navigate) => {
        signOut(auth);
        navigate("/login")
     
      };
      export const userObserver = (setCurrentUser) => {
        //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
        onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setCurrentUser(currentUser);
          } else {
            // User is signed out
            setCurrentUser(false);
          }
        });
      };

      export const signUpProvider = (navigate) => {
        //? Google ile giriş yapılması için kullanılan firebase metodu
        const provider = new GoogleAuthProvider();
        //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            navigate("/");
          })
          .catch((error) => {
            // Handle Errors here.
            console.log(error);
          });
      };
      