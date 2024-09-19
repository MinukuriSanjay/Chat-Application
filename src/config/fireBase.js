
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAeLC0lKQBOs6EofpRhSauOVOWqfiBZ0Xw",
  authDomain: "chat-application-79388.firebaseapp.com",
  projectId: "chat-application-79388",
  storageBucket: "chat-application-79388.appspot.com",
  messagingSenderId: "799697021022",
  appId: "1:799697021022:web:a2fd984bdf328b44fceccf"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signUp = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    console.log(user)
    await setDoc(doc(db, "users", user.uid),
      {
        id: user.uid,
        username: username.toLowerCase(),
        email,
        name: "",
        avatar: "",
        bio: "hey There i am using chat app",
        lastSeen: Date.now()

      })

    await setDoc(doc(db, "chats", user.uid), {
      chatsData: []
    })
  }
  catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  }
  catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }

}


const logout = async () => {
  try {
    await signOut(auth)
  }
  catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));

  }
}

const resetPass = async (email) => {
  if (!email) {
    toast.error("Enter Your Email")
    return null;
  }
  try {
    const userRef = collection(db, 'users')
    const q = query(userRef, where('email', '==', email))
    const querySnap = await getDocs(q)
    if (!querySnap.empty) {
      await sendPasswordResetEmail(auth, email)
      toast.success("Reset Email Sent")
    }
    else {
      toast.error("Email doesn't exists")
    }
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

export { signUp, login, logout, auth, db, resetPass };