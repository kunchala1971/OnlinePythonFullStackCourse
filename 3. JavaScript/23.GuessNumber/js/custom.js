let guess_numberElement=document.getElementById("guess_number");
let error_msgElement=document.getElementById("error_msg");
var gNumber=Math.ceil(Math.random()*100);
var count=0;
function validateGuessNumber()
{
let inputElement=parseInt(guess_numberElement.value);
if(gNumber==inputElement)
{
    error_msgElement.innerHTML=`<h3>Your Guessing is Correct(Your Trying ${count} times)</h3>`;
    error_msgElement.style.color="green";
}
else if(gNumber>inputElement)
{
     error_msgElement.innerHTML="<h3>Your Guessing is too Low</h3>";
      error_msgElement.style.color="red";
}
else if(gNumber<inputElement)
{
     error_msgElement.innerHTML="<h3>Your Guessing is too Hig</h3>";
      error_msgElement.style.color="red";
}
else{
    alert("Your Input is Wrong");
     error_msgElement.style.color="black";
}
count+=1;
}
