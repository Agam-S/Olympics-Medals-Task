import './style.css';
import { Country } from './models/Country';
import { Result } from './models/Result';
import { Countries } from './models/Countries.enum';
import { Sports } from './models/Sports.enum';
import { Medals } from './models/Medals.enum';

const countrySelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('country-slt')
);
const medalSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('medal-slt')
);
const sportSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('sport-slt')
);

const addButton: HTMLElement = document.getElementById('add-btn');

addButton.addEventListener('click', addMedal);

let countries: Array<Country> = [];

init();

function init() {
  let count = 0;
  for (let c in Countries) {
    if (isNaN(Number(c))) {
      let countryOption: HTMLOptionElement = document.createElement('option');
      countryOption.innerHTML = c;
      countryOption.value = count.toString();
      count++;
      countrySelect.add(countryOption);
    }
  }

  let sports = 0;
  for (let s in Sports) {
    if (isNaN(Number(s))) {
      let sportsOption: HTMLOptionElement = document.createElement('option');
      sportsOption.innerHTML = s;
      sportsOption.value = sports.toString();
      sports++;
      sportSelect.add(sportsOption);
    }
  }

  let medal = 0;
  for (let m in Medals) {
    if (isNaN(Number(m))) {
      let medaloption: HTMLOptionElement = document.createElement('option');
      medaloption.innerHTML = m;
      medaloption.value = String(m);
      medal++;
      medalSelect.add(medaloption);
    }
  }
}

function addMedal() {
  let countryexists: boolean = false;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name == String(Countries[countrySelect.value])) {
      countryexists = true;
    }
  }
  if (!countryexists) {
    countries.push(new Country(Countries[countrySelect.value]));
  }

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name == String(Countries[countrySelect.value])) {
      countries[i].results.push({
        sport: Sports[sportSelect.value],
        medal: Medals[medalSelect.value]
      });
    }
  }

  displayTable();
}

function displayTable() {
  const resultsBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.getElementById('results-body')
  );

  let newBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.createElement('tbody')
  );
  newBody.id = 'results-body';

  for (let i = 0; i < countries.length; i++) {
    let row = document.createElement('tr');

    let country = document.createElement('td');
    let countryNames = document.createTextNode(countries[i].name);
    country.appendChild(countryNames);
    row.appendChild(country);

    let gold = document.createElement('td');
    let goldMedal = document.createTextNode(
      String(countries[i].totalMedalType(Medals['Gold']))
    );
    gold.appendChild(goldMedal);
    row.appendChild(gold);

    let silver = document.createElement('td');
    let silverMedal = document.createTextNode(
      String(countries[i].totalMedalType(Medals['Silver']))
    );
    silver.appendChild(silverMedal);
    row.appendChild(silver);

    let bronze = document.createElement('td');
    let bronzeMedal = document.createTextNode(
      String(countries[i].totalMedalType(Medals['Bronze']))
    );
    bronze.appendChild(bronzeMedal);
    row.appendChild(bronze);

    let total = document.createElement('td');
    let totalmedals = document.createTextNode(
      String(countries[i].totalMedals())
    );
    total.appendChild(totalmedals);
    row.appendChild(total);

    newBody.appendChild(row);
  }
  resultsBody.parentNode.replaceChild(newBody, resultsBody);
}
