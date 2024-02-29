'use strict';

const infoContainer = document.querySelector('.info_container');

//FUNKTION FÖR ATT LÄGGA IN RENDERAD HTML FÖR ATT "ÖPPNA" OVERLAY
const renderPlanetInfo = function (array) {
  const html = `
  <div class="modal">
  <button class="close_btn">&times;</button>
      <h3 class="planet_name">${array.name}</h3>
      <h4 class="planet_latin">${array.latinName}</h4>
      <p class="planet_desc">${array.desc}
      </p>
      <p class="planet_type">Typ: ${array.type}</p>
      <p class="planet_moons">${array.moons}</p>
      <p class="planet_temp">Dagstemperatur:${array.temp.day}g grader / Natttemperatur:${array.temp.night} grader</p>
   </div>
   <div class="overlay"></div>`;
  infoContainer.insertAdjacentHTML('afterbegin', html);

  //KNAPP FÖR ATT STÄNGA OVERLAY
  document.querySelector('.close_btn').addEventListener('click', function () {
    infoContainer.remove();
    //VID KLICK LADDAS SIDAN OM FÖR ATT MÖJLIGGÖRA NY SÖKNING
    location.reload();
  });
};
//EXPORT TILL SCRIP.JS
export { renderPlanetInfo };
