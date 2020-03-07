// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: 'AIzaSyDLDCfFambiaRMcwe9Dr8WNW8vnT37u1uI',
   authDomain: 'helpme-5502b.firebaseapp.com',
   databaseURL: 'https://helpme-5502b.firebaseio.com',
   projectId: 'helpme-5502b',
   storageBucket: 'helpme-5502b.appspot.com',
   messagingSenderId: '690836509341',
   appId: '1:690836509341:web:f497e505a39a9014733a74'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signIn2() {
   
   const email = document.querySelector(`signIn2Id`).value;
   const password = document.querySelector(`signIn2Password`).value;
   firebase.auth.Auth.Persistence.LOCAL; /// for staying in login mode even after closing app!

   if (email != '' && password != '') {
      var result = firebase.auth().signInWithEmailAndPassword(email, password); ///for signing in!
      result.catch(function(error) {
         /////JS promise!
         var errorCode = error.code;
         var errorMessage = error.message;

         console.log(errorCode);
         console.log(errorMessage);

         window.alert('Message : ' + errorMessage);
      });
   } else {
      window.alert('Please fill out all fields!'); ////alert messages!
   }
}
