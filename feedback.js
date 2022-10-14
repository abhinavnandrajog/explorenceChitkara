var firebaseConfig = {
    apiKey: "AIzaSyC14OPsNOeKhVLyA6n4oCwWwUT-Ldham_E",
    authDomain: "explore-de468.firebaseapp.com",
    projectId: "explore-de468",
    storageBucket: "explore-de468.appspot.com",
    messagingSenderId: "658761095522",
    databaseURL:"https://explore-de468-default-rtdb.firebaseio.com/",
    appId: "1:658761095522:web:2c4b9a56dffe12f1e2743b"
  };

  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  //var company = getInputVal('company');
  var email = getInputVal('email');
  //var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
    //document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}