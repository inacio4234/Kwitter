const firebaseConfig = {
    apiKey: "AIzaSyABVDoOjCE7Kvr2cR5ApcFCDmdjcSdisBk",
    authDomain: "kwitter-2afa9.firebaseapp.com",
    databaseURL: "https://kwitter-2afa9-default-rtdb.firebaseio.com",
    projectId: "kwitter-2afa9",
    storageBucket: "kwitter-2afa9.appspot.com",
    messagingSenderId: "550274452252",
    appId: "1:550274452252:web:956fe696f753649a5b08d9"
  };

  firebase.initializeApp(firebaseConfig);

  nomeUsuario = localStorage.getItem("nomeUsuario");
  document.getElementById("user_name").innerHTML = "Bem vindo(a), " + nomeUsuario + "!";

  function addRoom(){
    roomName = document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomName).update({
        purpose: "Adcionando Nome da Sala"
    });
    localStorage.setItem("roomName", roomName);
    window.location = "mensagem.html";
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            roomName = childKey;
            console.log("Nome da Sala: ", roomName);
            row = "<div class = 'roomName' id = " + roomName + " onclick ='redirectToRoomName(this.id)'> #" + roomName + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
  }

  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "mensagem.html";
  }

function logout(){
  localStorage.removeItem("nomeUsuario");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}



