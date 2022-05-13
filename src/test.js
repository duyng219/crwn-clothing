import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('mfON8RHBDF5rS36TocJA').collection('cartItems').doc('pzfuVegSqYFRcGzbNYcL')
firestore.doc('/users/mfON8RHBDF5rS36TocJA/cartItems/pzfuVegSqYFRcGzbNYcL')
firestore.collection('/users/mfON8RHBDF5rS36TocJA/cartItems')