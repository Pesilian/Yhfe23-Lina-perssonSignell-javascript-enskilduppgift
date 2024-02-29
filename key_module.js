'use strict';

async function getKey() {
  const resp = await fetch(
    'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys',
    {
      method: 'POST',
      headers: { 'x-zocom': '' },
    }
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

export { getKey };
