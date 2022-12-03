// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMdx0QZm7ohX4QND6pWo6qSknHAOjCbQ",
  authDomain: "fireblog-46fa4.firebaseapp.com",
  projectId: "fireblog-46fa4",
  storageBucket: "fireblog-46fa4.appspot.com",
  messagingSenderId: "250304885190",
  appId: "1:250304885190:web:919de5bf5f0ec7ec0682c7"
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
      export const logOut =(navigate) => {
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
      