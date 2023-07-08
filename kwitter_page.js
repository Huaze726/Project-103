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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}