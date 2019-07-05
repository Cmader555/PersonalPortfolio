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
    
})










