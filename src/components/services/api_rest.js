const BASE_URL = "https://games-api-7imj.onrender.com/api/games/";

export const getData = async() => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export const saveGame = async(game) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      "name": String(game.name).trim(),
      "category": String(game.category).trim(),
      "website": String(game.website).trim(),
      "company": String(game.company).trim()
    })
  });
};

export const removeGame = async(id) => {
  return await fetch(`${BASE_URL}${id}/`,{
    method: "DELETE"
  });
};

export const updateGame = async(game, id) => {
  return await fetch(`${BASE_URL}${id}/`,{
    method: "PUT",
    headers: { "content-type": "application/json"}, 
    body: JSON.stringify({
      "name": String(game.name).trim(),
      "category": String(game.category).trim(),
      "website": String(game.website).trim(),
      "company": String(game.company).trim()
    })
  });
};