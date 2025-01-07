var ranNum = Math.ceil(Math.random() * 100);
var cnt = 0;
function guessNumber() {
  var guessNumberElement = document.getElementById("guessnumber");
  var resultElement = document.getElementById("result");
  var result = "";

  var gno = parseInt(guessNumberElement.value);
  if (gno < ranNum) {
    result = "<h1>Your given Number is too low</h1>";
    cnt++;
  } else if (gno > ranNum) {
    result = "<h1>Your given Number is too High</h1>";
    cnt++;
  } else if (gno === ranNum) {
    result = "<h1>Your given Number is Match attempts(" + cnt + ")</h1>";
  }
  resultElement.innerHTML = result;
}
