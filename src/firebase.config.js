// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIBuYfz-3NukE7wUZM5KLwiF02ECiOvfs',
  authDomain: 'house-marketplace-app-1dea1.firebaseapp.com',
  projectId: 'house-marketplace-app-1dea1',
  storageBucket: 'house-marketplace-app-1dea1.appspot.com',
  messagingSenderId: '371242183253',
  appId: '1:371242183253:web:fa4855e4cda93041c742dc',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
