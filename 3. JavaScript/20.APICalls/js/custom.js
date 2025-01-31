let api_dataElement = document.getElementById("api_data");
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
let result = `<table><tr><th>UserId</th><th>Id</th><th>Title</th><th>Body</th></tr>`;
let api_data;
const fetchData = async () => {
  api_data = await fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => data);
  api_data.map(
    (element) =>
      (result =result + `<tr><td>${element.userId}</td><td>${element.id}</td><td>${element.title}</td><td>${element.body}</td></tr>`)
  );
	result = result + `</table>`;
api_dataElement.innerHTML = result;
};

fetchData();


