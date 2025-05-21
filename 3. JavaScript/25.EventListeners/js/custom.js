let myBtnElement = document.getElementById("myBtn");
let myBoxElement = document.getElementById("myBox");
let boxElement = document.getElementById("hoverBox");
let keyInputElement = document.getElementById("keyInput");
let nameElement = document.getElementById("name");
let dropdownElement = document.getElementById("dropdown");
let myFormElement = document.getElementById("myForm");
let email = document.getElementById("email");
let item = document.getElementById("dragItem");
let area = document.getElementById("dropArea");
let resizeElement = document.getElementById("resize");

myBtnElement.addEventListener("click", () => alert("Button clicked!"));

myBoxElement.addEventListener("dblclick", function () {
  this.style.backgroundColor = "yellow";
});

boxElement.addEventListener(
  "mouseover",
  () => (boxElement.style.backgroundColor = "lightblue")
);
boxElement.addEventListener(
  "mouseout",
  () => (boxElement.style.backgroundColor = "red")
);
boxElement.addEventListener("mouseenter", () => console.log("Mouse entered"));
boxElement.addEventListener("mouseleave", () => console.log("Mouse left"));

keyInputElement.addEventListener("keydown", (e) =>
  console.log("Key down: " + e.key)
);
keyInputElement.addEventListener("keyup", (e) =>
  console.log("Key up: " + e.key)
);

nameElement.addEventListener("input", function () {
  console.log("Input: " + this.value);
});

dropdownElement.addEventListener("change", function () {
  console.log("Selected: " + this.value);
});

myFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted!");
});

email.addEventListener("focus", () => console.log("Focused"));
email.addEventListener("blur", () => console.log("Blurred"));

window.addEventListener("scroll", () => console.log("Scrolling..."));
window.addEventListener("resize", () => {
  resizeElement.innerText = `${window.innerWidth}x${window.innerHeight}`;
  console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
});

window.addEventListener("load", () => console.log("Page loaded"));
window.addEventListener("unload", () => console.log("Page unloading"));

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Right-click disabled");
});

item.addEventListener("dragstart", (e) =>
  e.dataTransfer.setData("text", e.target.id)
);
area.addEventListener("dragover", (e) => e.preventDefault());
area.addEventListener("drop", (e) => {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
});

let animBox = document.getElementById("anim");
animBox.addEventListener("animationstart", () =>
  console.log("Animation started")
);
animBox.addEventListener("animationend", () => console.log("Animation ended"));
animBox.addEventListener("animationiteration", () =>
  console.log("Animation repeated")
);

let transBox = document.getElementById("trans");
transBox.addEventListener("transitionend", () =>
  console.log("Transition ended")
);
