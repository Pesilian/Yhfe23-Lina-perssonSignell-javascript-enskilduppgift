'use strict';

//Fetch API, använder key som prameter för att kunna kalla på funktionen när jag hämtat api-nyckel
async function getResponce() {
  const resp = await fetch(
    'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies',
    {
      method: 'GET',
      headers: { 'x-zocom': 'solaris-2ngXkR6S02ijFrTP' },
    }
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

export { getResponce };
