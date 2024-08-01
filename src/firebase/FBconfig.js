import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9nUkPlm6NigIHwIJlasPBGJbvzsNavro",
  authDomain: "todonist-todo-app.firebaseapp.com",
  projectId: "todonist-todo-app",
  storageBucket: "todonist-todo-app.appspot.com",
  messagingSenderId: "769090298262",
  appId: "1:769090298262:web:7a62f4723bebe4fb833db7"
};

const app = initializeApp(firebaseConfig);
export const UserAuth = getAuth(app);
export const TaskDB = getFirestore(app);