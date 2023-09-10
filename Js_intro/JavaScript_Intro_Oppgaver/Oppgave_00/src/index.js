
const removeButton = document.getElementById('remove-btn');
const elementToRemove = document.getElementById('remove');

// klikk lytter på knappen
removeButton.addEventListener('click', function ()
 {
// Fjern teksten
    elementToRemove.textContent = '';
});


// Oppgave 2

const changeButton = document.getElementById('change-btn');

const paragraphToChange = document.getElementById('change');


changeButton.addEventListener('click', function () {

//her er for å bytt ut teksten i p 
    paragraphToChange.textContent = 'Dette er den nye teksten!';
});

// Oppgave 3

const inputBox = document.getElementById('input');
const outputParagraph = document.getElementById('input-text');

//for inntastnings lytter på input- boksen
inputBox.addEventListener('input', function () {
// Oppdater value
    outputParagraph.textContent = inputBox.value;
});

// Oppgave 4
// const myList_2 = ['item one', 'item two', 'item three', 'item four', 'item five'];
const myList = ['item one', 'item two', 'item three'];
const writeListButton = document.getElementById('write-list');
const ulList = document.getElementById('ul_');

writeListButton.addEventListener('click', function () {
  // Sjekk om ulList eksisterer før du prøver å bruke firstChild
  if (ulList) {
    while (ulList.firstChild) {
      ulList.removeChild(ulList.firstChild);
    }

    myList.forEach(function (item) {
      const li = document.createElement('li');
      li.textContent = item;
      ulList.appendChild(li);
    });
  }
});

// Oppgave 5

const selectElement = document.getElementById('select');
const inputText = document.getElementById('text');
const createButton = document.getElementById('create');
const placeholder = document.getElementById('placeholder');

// Legg til en klikk lytter på knappen
createButton.addEventListener('click', function () {
    const selectedElement = selectElement.value;
    const newElement = document.createElement(selectedElement);

    newElement.textContent = inputText.value;
    placeholder.appendChild(newElement);
});

// 
// const removeLiButton = document.getElementById('remove-li');
// const ulList = document.getElementById('list');
//
const removeLiButton = document.getElementById('remove-li');
const ulListForRemoveLi = document.getElementById('list');

removeLiButton.addEventListener('click', function () {
// Sjekk om det er minst ett element
    if (ulListForRemoveLi.children.length > 0) {
// Fjern det første elementet i li
        ulListForRemoveLi.removeChild(ulListForRemoveLi.firstElementChild);
    } else {
        alert('Ingen flere Li-elementer å fjerne.');
    }
});


// Oppgave 7

const inputName = document.getElementById('name');
const orderButton = document.getElementById('order');


inputName.addEventListener('input', function () {
// Hent teksten fra input boksen
    const inputText = inputName.value;

// Sjekk om teksten er mer enn 4 
    if (inputText.length > 4) {
// Hvis det er mer enn 4 bokstaver, deaktiver knappen og gi den en rød kant
        orderButton.disabled = true;
        orderButton.style.border = '2px solid red';
    } else {
// Hvis det er 4 eller mindre enn 4 bokstaver, aktiver knappen og fjern rød kant
        orderButton.disabled = false;
        orderButton.style.border = 'none';
    }
});

// Oppgave 8

const colorButton = document.getElementById('color');
colorButton.addEventListener('click', function () {
  
    const ulChildren = document.querySelector('.children').children;

// Her gir vi farge  basert på indeks
    for (let i = 0; i < ulChildren.length; i++) {
        if (i % 2 === 0) {
// Partall-rosa farge
            ulChildren[i].style.border = '2px solid pink';
        } else {
// Oddetall-grønn farge
            ulChildren[i].style.border = '2px solid green';
        }
    }
});


