const firebaseConfig = {
    apiKey: "AIzaSyDJoAzqgXOiSy_C8HAHgjBv0yvtE6i_UbM",
    authDomain: "kwitter-b77fe.firebaseapp.com",
    databaseURL: "https://kwitter-b77fe-default-rtdb.firebaseio.com",
    projectId: "kwitter-b77fe",
    storageBucket: "kwitter-b77fe.appspot.com",
    messagingSenderId: "17013170136",
    appId: "1:17013170136:web:73d7df4ab7fa0ef8835cad"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    msg = document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name");
   localStorage.removeItem("room_name"); 
   window.location = "index.html"; 
 }
 function getData() 
    { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    {  document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    childData = childSnapshot.val(); 
    if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
         //Inicia el código
         console.log(firebase_message_id);
          console.log(message_data); 
          name = message_data['name'];
           message = message_data['message']; 
           like = message_data['like']; 
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"; 
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
           like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
            span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Me gusta: "+ like +"</span></button><hr>";
         
          row = name_with_tag + message_with_tag +like_button + span_with_tag;
           document.getElementById("output").innerHTML += row; 
           //Termina el código 
        } }); }); }
 getData();

 
