// < -- form listeners -- >
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB8IeHClb4p6ykEEfjlBVFrIrlKxnJU2Uk",
    authDomain: "contact-form-12.firebaseapp.com",
    databaseURL: "https://contact-form-12.firebaseio.com",
    projectId: "contact-form-12",
    storageBucket: "contact-form-12.appspot.com",
    messagingSenderId: "403438234829"
  };
  firebase.initializeApp(config);

//reference msg collection
var messageRef = firebase.database().ref('messages');

//submit form
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e)
{
e.preventDefault();
// Get Values
var name=getInputVal('name');
var company=getInputVal('company');
var email=getInputVal('email');
var phone=getInputVal('phone');
var message=getInputVal('message');
//save messages
saveMessages(name,company,email,phone,message);


// show alert
document.querySelector('.alert').style.display = 'block';

// hide alert after 3  second 
setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
    
},3000);
//reset form
document.getElementById('contactForm').reset();
}
 function getInputVal(id){
     return document.getElementById(id).value;

 }
// save messages to firebase
function saveMessages(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message

    });
}


function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}