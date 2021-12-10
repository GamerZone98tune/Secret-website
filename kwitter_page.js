//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
console.log(user_name);
console.log(room_name);
    function send(){
          msg=document.getElementById("msg").value;
          console.log("sendbutton");
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";

    } 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
//like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_like(this.id)'>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code

      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function update_like(message_id){
      console.log("update_likes")
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log("likes",likes);
      console.log("update_likes",update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}