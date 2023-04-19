fetch("https://place.dog/300/200")
  .then((response) => response.json())
  .then((data) => console.log(data.facts[0]));

const imgUrl = "https://place.dog/300/200";
const image = new Image();
image.src = imgUrl;

document.body.appendChild(image);
image.src = "https://place.dog/300/200?" + new Date().getTime();
