$('.chatSection').hide();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAozrLBmDR09LPHLn6Ru0CMkd9e8yP3Rp0",
    authDomain: "fir-auth-f7a4b.firebaseapp.com",
    databaseURL: "https://fir-auth-f7a4b.firebaseio.com",
    projectId: "fir-auth-f7a4b",
    storageBucket: "fir-auth-f7a4b.appspot.com",
    messagingSenderId: "44047265817"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  // var database = firebase.database();

  //   function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }


  $('.login').on('click', loginInput);

  function loginInput () {
    let email = $('.loginEmail').val();
    let password = $('.loginPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => user.getToken())
        .then(JWT => console.log(JWT))
        .then(function() {
          $('.chatSection').show();
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      })


  }


  $('.signUp').on('click', signUpInput);

  function signUpInput () {
    let email = $('.signUpEmail').val();
    let password = $('.signUpPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        if (user) {
          $('.chatSection').show();
          console.log(user.uid);
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
    })
  }

  $('.signOutButton').on('click', function() {

      firebase.auth().signOut()
      .then(function(){
        $('.chatSection').hide();
      })
      // Sign-out successful.
    .catch(function(error) {
      // An error happened.
    })
});

$(.'submitChatButton').on('click', function() {

})
