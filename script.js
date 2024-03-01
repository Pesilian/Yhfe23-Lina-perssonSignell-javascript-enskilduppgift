'use strict';

//MODULER
import { getKey } from './key_module.js';

import { getResponce } from './api_module.js';

import { renderPlanetInfo } from './overlay_module.js';

//VARIABLER FÖR ATT VÄLJA ELEMENT FÖR SÖKNING
const inputSearch = document.querySelector('.search_input');
const btnSearch = document.querySelector('.search_btn');

//ANROPAR API FÖR HÄMTNING AV NYCKEL, GÖR STRING AV JSON
getKey().then(data => {
  let apiKey = data.key;
  console.log(apiKey);

  //ANROPAR API FÖR HÄMTNINNG AV INFO OM PLANETER, SKAPAR UPP EN NY ARRAY AV STRINGS FRÅN JSON
  getResponce(apiKey).then(data => {
    let planetsArr = data.bodies;

    // SÄTTER FOKUS PÅ SÖKRUTA
    inputSearch.focus();

    //VID BUTTON-KLICK SÖKS DET I HÄMTAD ARRAY
    btnSearch.addEventListener('click', function (e) {
      e.preventDefault();

      //FÅR FRAM INDEX PÅ SÖKT PLANET, SÖKINPUT GÖRS "CASE-INSENSETIVE"
      const planetIndex = planetsArr.findIndex(
        planetsArr =>
          planetsArr.name.toLowerCase().trim() ===
          inputSearch.value.toLowerCase().trim()
      );

      //INDEX ANVÄNDS SEDAN FÖR ATT RENDERA HTML FÖR MODALT FÖNSTER/OVERLAY
      renderPlanetInfo(planetsArr[planetIndex]);

      //VID KLICK RENSAS ÄVEN SÖKRUTAN
      inputSearch.value = '';
      inputSearch.blur();
    });

    //SÖKNING EFTER TANGENTBORDSTRYCK ENTER
    inputSearch.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        //FÅR FRAM INDEX PÅ SÖKT PLANET, SÖKINPUT GÖRS "CASE-INSENSETIVE"
        const planetIndex = planetsArr.findIndex(
          planetsArr =>
            planetsArr.name.toLowerCase().trim() ===
            inputSearch.value.toLowerCase().trim()
        );
        //INDEX ANVÄNDS SEDAN FÖR ATT RENDERA HTML FÖR MODALT FÖNSTER/OVERLAY
        renderPlanetInfo(planetsArr[planetIndex]);

        //RENSAR SÖKRUTAN
        inputSearch.value = '';
        inputSearch.blur();
      }
    });
  });
});
