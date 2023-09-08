//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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
    
    document.getElementById("user_name").innerHTML = "Hola" + user_name;
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Inicia el código
          console.log("Room Name - " + Room_names); 
          
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
    
          document.getElementById("output").innerHTML += row;
          //Finaliza el código
          });});}
    getData();

    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
    }

    function logout() {
       localStorage.removeItem("user_name");
      localStorage.removeItem("room_name"); 
      window.location = "index.html"; 
    }
