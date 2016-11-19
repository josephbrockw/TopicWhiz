import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDyqqdTK_xHV4fExYYyK9RTBYHE2SAtAD4",
  authDomain: "topicwhiz-3cbfb.firebaseapp.com",
  databaseURL: "https://topicwhiz-3cbfb.firebaseio.com",
  storageBucket: "topicwhiz-3cbfb.appspot.com",
  messagingSenderId: "872200819843"
};

export const firebaseApp = firebase.initializeApp(config);
