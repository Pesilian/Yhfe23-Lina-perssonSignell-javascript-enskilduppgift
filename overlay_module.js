'use strict';

const infoContainer = document.querySelector('.info_container');

//Function för att öppna upp overlay med info om planeter, lägger till html
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

  //Stängknapp på overlay, tar bort tillagd html
  document.querySelector('.close_btn').addEventListener('click', function () {
    infoContainer.remove();
    //Vid stängning av inforuta så laddas sidan om för att möjliggöra ny sökning
    location.reload();
  });
};

export { renderPlanetInfo };
