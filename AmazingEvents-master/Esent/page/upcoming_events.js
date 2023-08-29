 //Fecha Actual del archivo data
 console.log("Fecha Actual: " + data.currentDate);

 //Lee los elementos del array de data
for (let x in data.events){

 //Exhibe eventos del futuro
 if (data.currentDate < data.events[x].date){
     console.log(x);
     console.log("Title: " + data.events[x].name);
     console.log("Description: " + data.events[x].description);
     console.log("Date: " + data.events[x].date);
     console.log("Price: $" + data.events[x].price);
     console.log("--------------------------------------------");
 }
} 


let contenido = document.querySelector("#contenido")

for (let x in data.events){

 const card = document.createElement("div")
 card.classList="card"
 card.style.width="15rem"
 card.innerHTML = `<img src="${data.events[x].image}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${data.events[x].name}</h5>
                  <p class="card-text">${data.events[x].description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                 </div>
                 <div>
              <p>$ ${ data.events[x].price}</p>
             </div>`

contenido.appendChild(card)
}