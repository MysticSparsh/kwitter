//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDofrVHhxrUgVKaWTigc3EX_v-H0IDK660",
      authDomain: "kwitter-8e686.firebaseapp.com",
      databaseURL: "https://kwitter-8e686-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e686",
      storageBucket: "kwitter-8e686.appspot.com",
      messagingSenderId: "315051826083",
      appId: "1:315051826083:web:28747944be2a8ba6675816"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class= 'room_name' id='" + Room_names + "'  onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Start code

            //End code
        });
    });
}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name;

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function Addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}