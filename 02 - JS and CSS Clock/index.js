const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setInterval(function(){
    var seconds = new Date().getSeconds();
    var sdegree = seconds * 6;
    var srotate = "rotate(" + sdegree + "deg)";
    secondHand.style.transform = srotate;

    var minutes = new Date().getMinutes();
    var mdegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    var mrotate = "rotate(" + mdegree + "deg)";
    minHand.style.transform = mrotate;

    var hours = new Date().getHours();
    var hdegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    var hrotate = "rotate(" + hdegree + "deg)";
    hourHand.style.transform = hrotate;
},1000);

