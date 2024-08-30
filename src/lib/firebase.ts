// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRvY9pF1FYmU6ypPPaLKV_guplQ44h5uU",
  authDomain: "tasked-36d4c.firebaseapp.com",
  projectId: "tasked-36d4c",
  storageBucket: "tasked-36d4c.appspot.com",
  messagingSenderId: "222321695238",
  appId: "1:222321695238:web:64f7201ac34eb9e5f94187",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
