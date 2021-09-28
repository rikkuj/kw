var firebaseConfig = {
      apiKey: "AIzaSyBtVoMYVQwCoyM79fFt1xl43Xwgd-ngATM",
      authDomain: "kwitter-fdba3.firebaseapp.com",
      projectId: "kwitter-fdba3",
      storageBucket: "kwitter-fdba3.appspot.com",
      messagingSenderId: "781387667423",
      appId: "1:781387667423:web:660bc1ea2054d531e0d66a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.setItem(user_name);
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", Room_names);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name =" + Room_names);
row = "<div class = 'room_name' id = "+Room_names+"onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_name.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html"
}