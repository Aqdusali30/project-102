var firebaseConfig = 
{
    apiKey: "AIzaSyAVq2TK6FRsiLRfPWnTbmoKMSBDupNz9jY",
    authDomain: "chating-dc287.firebaseapp.com",
    databaseURL: "https://chating-dc287-default-rtdb.firebaseio.com",
    projectId: "chating-dc287",
    storageBucket: "chating-dc287.appspot.com",
    messagingSenderId: "483075916279",
    appId: "1:483075916279:web:cc780e082006a4d4082ef2"
};
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    function getData() 
    {
        firebase.database ().ref ("/").on('value',
        function (snapshot) 
        {
            document.getElementById("output").innerHTML = "";snapshot.forEach 
            (function (childSnapshot) 
            {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
            }); }); }
            getData();
}
