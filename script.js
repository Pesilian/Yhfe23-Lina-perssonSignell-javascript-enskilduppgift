'use strict';

//MODULER
import { getKey } from './key_module.js';

import { getResponce } from './api_module.js';

import { renderPlanetInfo } from './overlay_module.js';

//VARIABLER FÖR ATT VÄLJA ELEMENT FÖR EVENTHANDELERS
const inputSearch = document.querySelector('.search_input');
const btnSearch = document.querySelector('.search_btn');
const sun = document.querySelector('.sun');
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');
const uranus = document.querySelector('.uranus');
const neptune = document.querySelector('.neptune');

//ANROPAR API FÖR HÄMTNING AV NYCKEL, GÖR STRING AV JSON
getKey().then(data => {
  let apiKey = data.key;

  //ANROPAR API FÖR HÄMTNINNG AV INFO OM PLANETER, SKAPAR UPP EN NY ARRAY AV STRINGS FRÅN JSON
  getResponce(apiKey).then(data => {
    let planetsArr = data.bodies;

    // SÄTTER FOKUS PÅ SÖKRUTA
    inputSearch.focus();

    function searchRender() {
      //FÅR FRAM INDEX PÅ SÖKT PLANET, SÖKINPUT GÖRS "CASE-INSENSETIVE" SAMT TAR BORT MELLANSLAG FÖRE OCH EFTER
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
    }

    //FUNKTION  FÖR ATT KUNNA KLICKA UPP INFO OM PLANETER (skulle göras snyggare/bättre om tid fanns)
    function planetClick(index) {
      renderPlanetInfo(planetsArr[index]);
    }

    //------------EVENTHANDELERS----------

    //VID BUTTON-KLICK SÖKS DET I HÄMTAD ARRAY
    btnSearch.addEventListener('click', function (e) {
      e.preventDefault();
      searchRender();
    });

    //SÖKNING EFTER TANGENTBORDSTRYCK ENTER
    inputSearch.addEventListener('keyup', event => {
      if (event.key === 'Enter') {
        searchRender();
      }
    });

    sun.addEventListener('click', function () {
      planetClick(0);
    });
    mercury.addEventListener('click', function () {
      planetClick(1);
    });
    venus.addEventListener('click', function () {
      planetClick(2);
    });
    earth.addEventListener('click', function () {
      planetClick(3);
    });
    mars.addEventListener('click', function () {
      planetClick(4);
    });
    jupiter.addEventListener('click', function () {
      planetClick(5);
    });
    saturn.addEventListener('click', function () {
      planetClick(6);
    });
    uranus.addEventListener('click', function () {
      planetClick(7);
    });
    neptune.addEventListener('click', function () {
      planetClick(8);
    });
  });
});
