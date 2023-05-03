let notesURL = "http://localhost:3000/notes/";
let deleteURL = "http://localhost:3000/notes/12";
let userInputA = document.querySelector("#title-input");
let userInputB = document.querySelector(".textarea");
let userInputC = document.querySelector("#delete-input");
let submitButton = document.querySelector("#submit-button");
let deleteButton = document.querySelector("#delete-button");
let display = document.querySelector(".box");


//-----------GET Function Start

let getFunction = function(){fetch(notesURL, {
  method: 'GET', 
  headers: {"Content-Type": "application/json"}, 
})
.then(response => response.json(
    console.log(response)
))

.then((body) => {
    display.innerHTML = " ";
    console.log(body)
    for (let input of body) {
        console.log(input.title)
    
    let noteInfo = document.createElement ("div");
    display.appendChild(noteInfo);
    noteInfo.classList.add("card");

    let inputEl = document.createElement ("h1");
    inputEl.innerText = input.title
    noteInfo.appendChild(inputEl);

    let inputEl1 = document.createElement("div");
    inputEl1.innerText = input.body
    noteInfo.appendChild(inputEl1);

    let inputEl2 = document.createElement("div");
    inputEl2.innerText = input.id
    noteInfo.appendChild(inputEl2);
    }
})}
//-----------GET Function End


//-----------POST Function Start
let postFunction = function(){ fetch(notesURL, {
    method: 'POST', 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({"title": userInputA.value, "body": userInputB.value})
})

.then(response => response.json(
    console.log(response)
))

.then((body) => {
    console.log(body)
    
})
}
//-----------POST Function End

//-----------DELETE Function Start
fetch(notesURL, {
    method: "GET",
    headers: {"Content-Type": "application/json"}, 
})
.then((response) => {
    return response.json();
})
.then((body) => {
    for (let id of body){
        let idEl = id.id
        console.log(idEl)
    }
})

let deleteFunction = function(){ fetch(`http://localhost:3000/notes/${userInputC.value}`, {
    method: 'DELETE',
})

.then(response => response.json(
    console.log(response)
))

.then((body) => {
    console.log(body)
    return(body)
})
}
//-----------DELETE Function End

//-----------SUBMIT Button Start
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    postFunction();
    getFunction();
})
//-----------SUBMIT Button End

//-----------DELETE Button Start
deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteFunction();
    getFunction();  
})
//-----------DELETE Button End


getFunction();
// displays get request first