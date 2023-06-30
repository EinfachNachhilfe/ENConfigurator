$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    var referenz = urlParams.get('referenz');
    $('.customer-referenz').text(referenz);
});
