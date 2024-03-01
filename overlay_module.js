'use strict';

const infoContainer = document.querySelector('.info_container');

//FUNKTION FÖR ATT LÄGGA IN RENDERAD HTML FÖR ATT "ÖPPNA" OVERLAY
const renderPlanetInfo = function (array) {
  const html = `
  <div class="modal">
          <button class="close_btn">&times;</button>
          <div class="planetinfo_container">
            <section class="planet_header">
              <h3 class="planet_name infotext">${array.name}</h3>
              <h4 class="planet_latin infotext">${array.latinName}</h4>
              <p class="planet_type infotext">Typ: ${array.type}</p>
            </section>
            <aside class="planet_aside">
              <p class="planet_moons infotext">Månar: ${array.moons}</p>
              <p class="planet_temp infotext">
                Dags-temperatur:${array.temp.day} grader /
                Natt-temperatur:${array.temp.night} grader
              </p>
            </aside>
          </div>
          <section class="planet_description">
            <p class="planet_desc infotext">${array.desc}</p>
          </section>
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
