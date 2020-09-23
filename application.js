const BASE_URL = "http://localhost:3000";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;
console.log("Hello")

document.addEventListener("DOMContentLoaded", allRestaurants)

const container = document.getElementById("container");


function submitUserForm() {
  document.getElementById("new_user_form").submit();
}

function allRestaurants() {
  fetch(RESTAURANTS_URL)
    .then(resp => resp.json())
    .then(restaurants => {
      for (let i = 0; i < restaurants.length; i++) {
        container.insertAdjacentHTML("beforeend", `[${restaurants[i].id}]: ${restaurants[i].name} ${restaurants[i].cuisine} cuisine in ${restaurants[i].location}.<br>`
        )};

    }
    )}




/*
const getRestaurants = async () => {
    const response = await fetch(`${RESTAURANTS_URL}`)
    const data = response.json();
      console.log(data);
    }



*/

