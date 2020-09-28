const BASE_URL = "http://localhost:3000";
const RESTAURANTS_URL = `${BASE_URL}/restaurants`;
console.log("Hello")

document.addEventListener("DOMContentLoaded", allRestaurants)

const container = document.getElementById("container");

const userForm = document.getElementById("new_user_form");

function submitUserForm() {
  userForm.onsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: new FormData(new_user_form)
    });

    let result = await response.json();

    console.log(result.message);
  }
}
/*
  event.preventDefault();
  document.getElementById("new_user_form").submit();

  let down = document.getElementById("food choice form");

  function foodChoiceForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "What are you craving today?");
  
  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  document.getElementsByTagName("body")[0].appendChild(form);
};
foodChoiceForm();
}
*/

/*
function foodSelectionForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "Great! what would you like to order?");

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  document.getElementsByTagName("body")[0].appendChild(form);

}
*/


function allRestaurants() {
  fetch(RESTAURANTS_URL)
    .then(resp => resp.json())
    .then(restaurants => {
      for (let i = 0; i < restaurants.length; i++) {
        container.insertAdjacentHTML("beforeend", `[${restaurants[i].id}]: ${restaurants[i].name} - ${restaurants[i].cuisine} cuisine in ${restaurants[i].location}.<br>`
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

