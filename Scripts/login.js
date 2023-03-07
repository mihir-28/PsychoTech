import "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAtvos2gfbNd7J_w0n12zB3nKSaMzXhV9I",
    authDomain: "psycotech-b2f18.firebaseapp.com",
    projectId: "psycotech-b2f18",
    storageBucket: "psycotech-b2f18.appspot.com",
    messagingSenderId: "954259460202",
    appId: "1:954259460202:web:3b7bd72ac99206bdaf7a13",
    measurementId: "G-X5GV2HM4ES",
};

const app = initializeApp(firebaseConfig);

function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        window.location.href = "result.html";
    } else {
        // User is signed out.
    }
});

firebase.auth().getRedirectResult().then(function (result) {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});