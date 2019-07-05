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



$("#contact-submit").on("click", event => {
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

            console.log("You clicked submit")
            //console.log("////////", response)


        });
    }

    submit()

})










