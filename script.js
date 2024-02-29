'use strict';

//Fetch API
import { getResponce } from './api_module.js';

//Renderar HTML för att öppna overlay med info
import { renderPlanetInfo } from './overlay_module.js';

//Variabler för specifika element
const inputSearch = document.querySelector('.search_input');
const btnSearch = document.querySelector('.search_btn');

//Omvandlar Json till ny array med info om planeter
getResponce().then(data => {
  let planetsArr = data.bodies;
  // console.log(planetsArr);

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
