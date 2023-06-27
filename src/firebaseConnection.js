import firebase from 'firebase/compat/app';
import 'firebase/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDpwmTdaP1nvNL3Xuw15EKRN5fjHfjuYvk",
  authDomain: "meuaplicativo-c0e02.firebaseapp.com",
  databaseURL: "https://meuaplicativo-c0e02-default-rtdb.firebaseio.com",
  projectId: "meuaplicativo-c0e02",
  storageBucket: "meuaplicativo-c0e02.appspot.com",
  messagingSenderId: "293182190662",
  appId: "1:293182190662:web:d6ca2385d3c0e131718647",
  measurementId: "G-22D8YYWG85"
};
if(!firebase.apps.length){
  //Abrir minha conexao
  Firebase = firebase.initializeApp(firebaseConfig);
}
export default Firebase;