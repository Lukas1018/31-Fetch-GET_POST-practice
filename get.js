// 1 GET data from back-end.

// Create variables.

const baseUrl = "https://robust-safe-crafter.glitch.me/";

// Create function to get data.

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //   console.log(data);
    getCards(data);
  } catch (error) {
    console.log(error);
  }
};

getData(baseUrl);

// Create function and loop property data to create DOM elements and show in HTML.

function getCards(data) {
  data.forEach((element) => {
    const url = element.image.toString();
    const card = document.createElement("div");
    const propertyImg = document.createElement("img");
    const price = document.createElement("h3");
    const city = document.createElement("p");
    const description = document.createElement("p");
    propertyImg.setAttribute("src", url);
    document.querySelector("#property-cards").append(card);
    card.append(propertyImg, price, city, description);
    price.innerText = element.price;
    city.innerText = element.city;
    description.innerText = element.description;
    console.log(Object.keys(element));
  });
}
