import './style.css';
// TODO: required imports
import { Countries } from './models/Countries.enum';
import { Country } from './models/Country';
import { IResult } from './models/IResult';
import { Medals } from './models/Medals.enum';
import { Sports } from './models/Sports.enum';

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
//TODO: add an eventlistener to the button to trigger addMedal

let countries: Array<Country> = [];

init();

// This function sets up some display elements
function init() {
  let count = 0;
  for (let c in Countries) {
    if (isNaN(Number(c))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = c;
      newOption.value = count.toString();
      count++;
      countrySelect.add(newOption);
    }
  }

  //TODO: populate the Sport select
  let count1 = 0;
  for (let s in Sports) {
    if (isNaN(Number(s))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = s;
      newOption.value = count1.toString();
      count1++;
      sportSelect.add(newOption);
    }
  }
  //TODO: populate the Medal select
  let count2 = 0;
  for (let m in Medals) {
    if (isNaN(Number(m))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = m;
      newOption.value = count2.toString();
      count2++;
      medalSelect.add(newOption);
    }
  }
}

// This function adds a medal to the countries tally
function addMedal() {
  //TODO: complete this function

  displayTable();
}

// This function refreshes the medal tally table
function displayTable() {
  const resultsBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.getElementById('results-body')
  );

  let newBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.createElement('tbody')
  );
  newBody.id = 'results-body';

  // TODO: create the rows required for the new table body element

  // replaces the old tbody with the new one created above
  resultsBody.parentNode.replaceChild(newBody, resultsBody);
}