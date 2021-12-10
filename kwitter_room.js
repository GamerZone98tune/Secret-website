
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_buQYz8X-_pEiZHjB8c6iSE-xj36K1Nk",
      authDomain: "chat-output.firebaseapp.com",
      databaseURL: "https://chat-output-default-rtdb.firebaseio.com",
      projectId: "chat-output",
      storageBucket: "chat-output.appspot.com",
      messagingSenderId: "1061202241000",
      appId: "1:1061202241000:web:4da9fb9062736edff8b05d",
      measurementId: "G-VD6L2V95RW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function Logout(){
      localStorage.removeItem("user_name");
      window.location="index.html";
}
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      window.location="kwitter_page.html"
      localStorage.setItem("room_name",room_name);
}
function redirecttoroomname(name){
      window.location="kwitter_page.html";
      localStorage.setItem("room_name",name);
      
}
