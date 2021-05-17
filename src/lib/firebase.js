import firebase from 'firebase';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBNfjjw4sBG9O_hhmm7D5w2V6PT39KdJxU",
    authDomain: "fir-sample-3e6fe.firebaseapp.com",
    projectId: "fir-sample-3e6fe",
    storageBucket: "fir-sample-3e6fe.appspot.com",
    messagingSenderId: "1020733071963",
    appId: "1:1020733071963:web:7a96b8caf7247badebd57e"
  };
  
  firebase.initializeApp(firebaseConfig);
}