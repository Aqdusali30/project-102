// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCu9d48ymJXUIbw9BR2aS4Plx3boysAf6Q",
    authDomain: "classtest-97631.firebaseapp.com",
    databaseURL: "https://classtest-97631-default-rtdb.firebaseio.com",
    projectId: "classtest-97631",
    storageBucket: "classtest-97631.appspot.com",
    messagingSenderId: "399324158962",
    appId: "1:399324158962:web:40b2d2147730ee81da296b"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



