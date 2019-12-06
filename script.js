document.addEventListener("keydown", function(event) {
  
  let ch=String.fromCharCode(event.which);
  console.log(ch);
  var elem=document.getElementById(ch);
  elem.style.backgroundColor="#D9DADB";
  
});

document.addEventListener("keyup",function(event) {
  
  let ch=String.fromCharCode(event.which);
  console.log(ch);
  var elem=document.getElementById(ch);
  elem.style.backgroundColor="white";
  
});


window.onload = function(){
  alert("Press the letters in your keyboard and observe the virtual keyboard");
}