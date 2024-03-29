'use strict';

//FETCH API FÖR HÄMTNING AV INFO OM PLANETERNA, I FUNTIONEN ANVÄNDS KEY SOM PARAMETER, DEN ERSÄTTS SEDAN AV HÄMTAD API-NYCKEL

async function getResponse(key) {
  const resp = await fetch(
    'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies',
    {
      method: 'GET',
      headers: { 'x-zocom': key },
    }
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

//EXPORTERAR FUNKTION TILL SCRIP.JS
export { getResponse };
