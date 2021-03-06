
//function for nav bar to become solid when scrolling
$(function () {

    $(document).scroll(function () {

        const nav = $("#mainNavbar");

        nav.toggleClass("scrolled", $(this).scrollTop() > 50);

    });

});


//function for animation when hovering over submit button 
$("#submitButton").hover(function (event) {
    $(this).addClass(`animated jello`)
});
//removes class so it can be added everytime you use it
$("#submitButton").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("jello");
});



$("#submitButton").on("click", event => {
    event.preventDefault()

    let name = $("#contactName").val().trim()
    let email = $("#contactEmail").val().trim()
    let contact = $("#contactMessage").val().trim()

    submit = () => {

        $.ajax({

            type: 'POST',
            url: "/api/submission",
            data: {
                name: name,
                email: email,
                contact: contact
            }

        }).then(function (response) {

            //console.log("You clicked submit")
            $("#contactName").val("")
            $("#contactEmail").val("")
            $("#contactMessage").val("")

            $('#myModal').modal()

        });
    }

    submit()

});

var i = 0;
var txt = `> Christian Mader`; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(); 


$("#displayButton").on("click", event => {
    event.preventDefault()
    $('#displayer').css("display", "block")
    $("#displayButton").css("display", "none")
    $("#hideButton").css("display", "inline")

})

$("#hideButton").on("click", event =>{
    event.preventDefault()
    $('#displayer').css("display", "none")
    $("#displayButton").css("display", "inline")
    $("#hideButton").css("display", "none")


})







