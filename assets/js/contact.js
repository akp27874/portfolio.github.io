// ============== Contact me============
const form = document.getElementById('contact-form');
const alert = document.querySelector('.alert');

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAJLY7iBdWfquM9_BEPS5zcuTFoNsvmmw4",
authDomain: "contactform-1197b.firebaseapp.com",
databaseURL: "https://contactform-1197b-default-rtdb.firebaseio.com",
projectId: "contactform-1197b",
storageBucket: "contactform-1197b.appspot.com",
messagingSenderId: "174558759887",
appId: "1:174558759887:web:cf6ac4001133686bd460ba",
measurementId: "G-N0T6P999M4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("messages");
form.addEventListener('submit',(e)=>{
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
ref.push({
    name:name,
    email:email,
    message:message
})
alert.style.display="block";
setTimeout(()=>{
    alert.style.display="none";
},3000);
form.reset();
})