
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name= document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html";
}

function redirecttoroomname(name){
localStorage.setItem("room_name",name);
window.location="twitter_page.html";
}