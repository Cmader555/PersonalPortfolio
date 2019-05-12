//function for nav bar to become solid when scrolling
$(function () {

    $(document).scroll(function () {

        var nav = $("#mainNavbar");
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height());

    });

});


//function for animation when hovering over submit button 
$(".btn").hover(function (event) {
    $(this).addClass(`animated jello`)
});
//removes class so it can be added everytime you use it
$(".btn").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("jello");
});




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChXWDqBQDbs4C2n3LX37eV9pvGcGlkjLo",
    authDomain: "portfolio-d25a8.firebaseapp.com",
    databaseURL: "https://portfolio-d25a8.firebaseio.com",
    projectId: "portfolio-d25a8",
    storageBucket: "portfolio-d25a8.appspot.com",
    messagingSenderId: "396797600610",
    appId: "1:396797600610:web:bd0be466967c1dc5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//setting firebase invoke to variable

var database = firebase.database();

// stores contact info 
$("#contact-submit").on("click", function (event) {

    event.preventDefault();

    let contactName = $("#contactName").val().trim();
    let contactEmail = $("#contactEmail").val().trim();
    let contactMessage = $("#contactMessage").val().trim();


    database.ref().push({

        contactName: contactName,
        contactEmail: contactEmail,
        contactMessage: contactMessage

    });


});











