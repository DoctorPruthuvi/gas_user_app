import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyARtUQtyFFdqRvHogngaIgpFnZoZ5wW2eQ",
    authDomain: "glindicator.firebaseapp.com",
    databaseURL: "https://glindicator.firebaseio.com",
    projectId: "glindicator",
    storageBucket: "glindicator.appspot.com",
    messagingSenderId: "438498591050",
    appId: "1:438498591050:web:c713a3bcae978425ff41b3",
    measurementId: "G-3847BGZ72L"
    
  };
  const fire  = firebase.initializeApp(config);
  export default fire;