$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    var referenz = urlParams.get('referenz');
    $("[bloc=customerReferenz]").text(referenz);
});
