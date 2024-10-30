Secret.addEventListener("click",function(){
alert("Avoid being a Duck");
});

lightswitch.addEventListener("click",function(){
   console.log("lights turn on"); 
   document.getElementById("lightbulb").src = "lightbulb_on.webp";
   document.getElementById("lightswitch").style.display="none";
   document.getElementById("bulboff").style.display="initial";

//Apply the 'light' class to the body of the page
   document.body.classList.toggle('light');

})
//when the user presses the button switch the light bulb and the whole website changes to dark or light mode 
bulboff.addEventListener("click",function(){
    console.log("lights turn off"); 
    document.getElementById("lightbulb").src = "lightbulb_off.webp";
    document.getElementById("bulboff").style.display="none";
    document.getElementById("lightswitch").style.display="initial";
    document.body.classList.toggle('light');
 })