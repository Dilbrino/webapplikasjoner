import './styles.css';
const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {

  const searchName = searchInput.value.toLowerCase();
  if (searchName) {
    const searchResult = users.find((user) => user.name.toLowerCase() === searchName);
    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = '<li>Ingen resultater funnet</li>';
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {
  
  const filterValue = filterInput.value;
  if (filterValue && !isNaN(filterValue)) {
    const filterResult = users.filter((user) => user.age >= parseInt(filterValue));
    if (filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = '<li>Ingen resultater funnet</li>';
    }
  } else {
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);


main();