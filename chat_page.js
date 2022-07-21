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
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push
    ({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value="";
    
}
