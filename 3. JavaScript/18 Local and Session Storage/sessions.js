let nameElement=document.getElementById("name");
let rollnoElement=document.getElementById("rollno");
function saveHandler()
{
sessionStorage.setItem("name",nameElement.value);
sessionStorage.setItem("rollno",rollnoElement.value);
nameElement.value="";
rollnoElement.value="";
nameElement.focus();
}
function getHandler()
{
nameElement.value=sessionStorage.getItem("name");
rollnoElement.value=sessionStorage.getItem("rollno");
}
function clearHandler()
{
	nameElement.value="";
	rollnoElement.value="";
	nameElement.focus();
}
function removeHandler()
{
sessionStorage.clear();
}