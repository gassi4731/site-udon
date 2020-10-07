$(document).ready(function () {
    $('.dc-menu-trigger').click(function () {
        $('nav').toggleClass("dc-menu-open");
        $('.menu-overlay').toggleClass("open");
        $('.hamburger').toggleClass("shownav");
    });
    $('.menu-button').click(function(){
        $('nav').toggleClass("dc-menu-open");
        $('.menu-overlay').toggleClass("open");
        $('.hamburger').toggleClass("shownav");
    });
});
