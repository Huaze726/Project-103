// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
  apiKey: "AIzaSyCKE_TPspPEmnq2URWfAth6cOFbQn_7cSs",
  authDomain: "project100-lets-chat-app-aeeb0.firebaseapp.com",
  databaseURL: "https://project100-lets-chat-app-aeeb0-default-rtdb.firebaseio.com",
  projectId: "project100-lets-chat-app-aeeb0",
  storageBucket: "project100-lets-chat-app-aeeb0.appspot.com",
  messagingSenderId: "950122356540",
  appId: "1:950122356540:web:3addaf53f14e52ada04839"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

  document.getElementById("user_name").value = "";
  
  window.location = "chat_page.html";
}