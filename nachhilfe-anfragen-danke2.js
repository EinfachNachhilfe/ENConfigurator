document.addEventListener('DOMContentLoaded', function(){
    var urlParams = new URLSearchParams(window.location.search);
    var referenz = urlParams.get('referenz');
    document.querySelector("[bloc=customerReferenz]").textContent = referenz;

    // Script-Teil
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://t.adcell.com/t/track.js?pid=11532&eventid=14617&referenz=" + referenz;
    document.body.appendChild(script);

    // Noscript-Teil
    var img = document.createElement("img");
    img.src = "https://t.adcell.com/t/track?pid=11532&eventid=14617&referenz=" + referenz;
    img.border = "0";
    img.width = "1";
    img.height = "1";
    document.body.appendChild(img);
});
