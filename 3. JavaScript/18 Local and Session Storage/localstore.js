let nameElement=document.getElementById("name");
let rollnoElement=document.getElementById("rollno");
function saveHandler()
{
localStorage.setItem("name",nameElement.value);
localStorage.setItem("rollno",rollnoElement.value);
nameElement.value="";
rollnoElement.value="";
nameElement.focus();
}
function getHandler()
{
nameElement.value=localStorage.getItem("name");
rollnoElement.value=localStorage.getItem("rollno");
}
function clearHandler()
{
	nameElement.value="";
	rollnoElement.value="";
	nameElement.focus();
}
function removeHandler()
{
	localStorage.clear();
}