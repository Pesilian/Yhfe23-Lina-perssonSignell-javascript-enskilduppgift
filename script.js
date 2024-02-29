'use strict';

import { getKey } from './key_module.js';

import { getResponce } from './api_module.js';

import { renderPlanetInfo } from './overlay_module.js';

//Variabler för specifika element
const inputSearch = document.querySelector('.search_input');
const btnSearch = document.querySelector('.search_btn');

getKey().then(data => {
  let apiKey = data.key;
  console.log(apiKey);

  getResponce(apiKey).then(data => {
    let planetsArr = data.bodies;

    console.log(planetsArr);

    //Inputfält och sökknapp
    btnSearch.addEventListener('click', function (e) {
      e.preventDefault();
      const planetSearch = inputSearch.value;

      //Hittar index efter valt sökord för att kunna rendera HTML
      const planetIndex = planetsArr.findIndex(
        planetsArr => planetsArr.name === planetSearch
      );
      // console.log(planetIndex);
      //Planetindex används sedan för att få upp rätt array i inforutan.
      renderPlanetInfo(planetsArr[planetIndex]);

      //Rensar sökrutan
      inputSearch.value = '';
      inputSearch.blur();
    });
  });
});
