import * as firebase from "firebase/app";
import 'firebase/firebase';
import 'firebase/firebase-auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyD0S30v4Rh0Q9yj4ePsxFYpilt2abEc6MY",
    authDomain: "crwn-db-a31ef.firebaseapp.com",
    databaseURL: "https://crwn-db-a31ef.firebaseio.com",
    projectId: "crwn-db-a31ef",
    storageBucket: "crwn-db-a31ef.appspot.com",
    messagingSenderId: "312625321467",
    appId: "1:312625321467:web:285990249feb85b2cda75e",
    measurementId: "G-WFTN6Y2VGT"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) {
      return ;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
              displayName, email, createdAt, ...additionalData
          })
      }catch (error) {
          console.log('error creating user',error.message);
      }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;