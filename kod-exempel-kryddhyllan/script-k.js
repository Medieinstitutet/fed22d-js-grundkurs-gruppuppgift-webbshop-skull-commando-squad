// kom ihåg att index räknas från 0 (pepper är på index plats 0)

const pepper = {
  name: "Pepper",
  count: 0,
};

const spiceRack = [];

// li element

const shelf = document.querySelector("#spices");

printSpiceShelf(); // kallar funktion för att visa spice listan

const addSpiceBtn = document.querySelector("#addSpiceBtn"); //Variabel för knappen
addSpiceBtn.addEventListener("click", addNewSpice); // klickevent på knappen som ska få en funktion som heter addnewspice

const newSpiceName = document.querySelector("#newSpiceField"); // Variabel för textfältet i html

//funktion för att lägga till ny spice på listan
function addNewSpice() {
  // if sats om man klickar och fältet är tomt så läggs ingenting till
  if (newSpiceName.value.length === 0) {
    return;
  } //Gör så att det inte går att lägga till samma krydda två ggr (om den finns, lägg inte till)
  if (spiceRack.indexOf(newSpiceName.value) === -1) {
    spiceRack.push(newSpiceName.value);
  }
  printSpiceShelf();
}
//funktion för att skriva ut resultatet på sidan i text
function printSpiceShelf() {
  shelf.innerHTML = ""; // återställer till noll så inte allt läggs till i dubbletter
  for (let i = 0; i < spiceRack.length; i++) {
    // loopen
    const spiceName = spiceRack[i]; // alla element i spiceRack
    const spiceNode = document.createElement("li"); // skapar <li> element
    spiceNode.classList.add("list-item");
    const spiceTextNode = document.createTextNode(spiceName); //skapar text

    // trash icon button
    const trashIcon = document.createElement("button"); //skapar knappelement
    trashIcon.setAttribute("data-name", spiceName); //sätter attribut namn på knappen
    trashIcon.classList.add("material-symbols-outlined"); //adderar ikonen
    const trashIconText = document.createTextNode("delete"); //lägg till alt-text på knappen
    trashIcon.appendChild(trashIconText); //??

    spiceNode.appendChild(spiceTextNode); // target all li element
    spiceNode.appendChild(trashIcon); //

    shelf.appendChild(spiceNode); // Skriv ut listan som text
  }
  // steg 1, ta bort saker från listan (variabel för alla listelement)
  const spices = Array.from(document.querySelectorAll("li button"));
  spices.forEach((item) => {
    item.addEventListener("click", removeSpice);
  });
}

function removeSpice(e) {
  const index = spiceRack.indexOf(e.target.dataset.name);
  if (index > -1) {
    spiceRack.splice(index, 1);
    printSpiceShelf();
  }
}
