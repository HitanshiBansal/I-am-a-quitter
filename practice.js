

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-H2GX75GnqWA3OP_O_C-cOFrIamF2D-c",
  authDomain: "kwitter-73386.firebaseapp.com",
  databaseURL: "https://kwitter-73386-default-rtdb.firebaseio.com",
  projectId: "kwitter-73386",
  storageBucket: "kwitter-73386.appspot.com",
  messagingSenderId: "271657387042",
  appId: "1:271657387042:web:6cd6f0bf0fd0c225f0367b"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function addUser() { user_name = document.getElementById("user_name").value; firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }
