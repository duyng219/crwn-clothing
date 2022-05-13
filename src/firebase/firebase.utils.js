import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyB9SQhDPfrrKtwjNle_vdsJquuGwjY1LCM",
    authDomain: "crwn-db-c0c02.firebaseapp.com",
    projectId: "crwn-db-c0c02",
    storageBucket: "crwn-db-c0c02.appspot.com",
    messagingSenderId: "553918030682",
    appId: "1:553918030682:web:621e3bcb3dbd882d278963",
    measurementId: "G-17GTK3QBF0"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email } = userAuth
        const createAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase