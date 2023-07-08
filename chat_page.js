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

var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "<u class='welcome-txt'>Welcome " + username + "!</u>";

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function addroom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    document.getElementById("room_name").value = "";
    
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapShot) {
            childKey = childSnapShot.key;
            Room_names = childKey;
            //Start code
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick = 'redricToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redricToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location - "kwitter_page.html";
}