

function removeItem(){
    let lastElement = document.getElementById("grocery-list").lastElementChild;
    document.getElementById("grocery-list").removeChild(lastElement);
}

function addItem(){
const li = document.createElement("li");
li.textContent = prompt("Gimme a word");
document.getElementById("grocery-list").appendChild(li);

}



