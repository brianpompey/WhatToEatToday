const BASE_URL = "http://localhost:3000";

console.log("Hello")

const chk = document.getElementById('chk');
const containers = document.getElementById("containers");

const modals = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];


function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];    
}


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});


function foodChoiceForm() {
  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.id = "searchForm"
  

  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "selection");
  ID.setAttribute("placeholder", "What are you craving today?");
  ID.id = "searchData";
  

  let p = document.createElement("input");
  p.setAttribute("type", "submit");
  p.setAttribute("value", "Surprise Me");
  p.id = "surprise-button"
  
  
  form.append(ID);
  form.append(p);
  
  document.getElementById("food choice form").appendChild(form);
  form.addEventListener('submit', (e) => surpriseMe(e));

};


function surpriseMe(e) {
  e.preventDefault();
  randomChoice = (random_item(myRestaurants));
  console.log(randomChoice.id);
  console.log(randomChoice.name);
  foodOrder(randomChoice.id, randomChoice.name)
}

function foodOrder(restId, restName) {
  console.log(`restName`,restName);
  let restForm = document.getElementById("food choice form");
  console.log(restForm);
  restForm.remove();

  let form = document.createElement("form");
  form.setAttribute("method", "post");
  form.id = "order form"
  
  let ID = document.createElement("input");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "order");
  ID.setAttribute("placeholder", `Great Choice!! what would you like to order from ${restName} ?`);

  let s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  
  form.append(ID);
  form.append(s);
  
  containers.appendChild(form);

  form.addEventListener('submit', (e) => submitOrderForm(e, restId));

}


async function submitOrderForm(e, restId) {
  const orderForm = document.getElementById("order form");
  console.log('order placed', orderForm, e.target[0])
    let formInfo = Object.fromEntries(new FormData(e.target));
    
    e.preventDefault();
    let response = await fetch('http://localhost:3000/selections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selection: {...formInfo, restaurant_id: restId}})
    });
    

    let result = await response.json();
    let cont = document.getElementById("containers");
    let button = document.createElement("button")
    button.innerHTML = "Delete Order"
    button.id = "delete-order"
    button.addEventListener ("click", (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/selections/${result.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert("Order Deleted");
          location.reload()})
    });

    alert("Order Placed");
    
    cont.innerHTML = result.order 
    cont.append(button);
    console.log(result);
    console.log(result.order);
    console.log(result.restaurant); 
}


