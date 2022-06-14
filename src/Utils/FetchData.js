export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '15876d2b1cmshd56486ba811a06fp127349jsn550aa7b3089e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
