import React from 'react';
import ChatApp from './App/Screens/ChatApp';
import {initializeApp} from 'firebase/app';
const firebaseConfig = {

  apiKey: "AIzaSyApf1yQwcCTnFiL2dPIMP8VMEAlCuvaZfk",

  authDomain: "chat-bd9b5.firebaseapp.com",

  databaseURL: "https://chat-bd9b5-default-rtdb.firebaseio.com",

  projectId: "chat-bd9b5",

  storageBucket: "chat-bd9b5.appspot.com",

  messagingSenderId: "127812415440",

  appId: "1:127812415440:web:f7cc9da66a39f0abd893d5",

  measurementId: "G-3H2T53Y7VJ"

};

initializeApp(firebaseConfig);

const App = () => {
  return <ChatApp />;
};

export default App;
