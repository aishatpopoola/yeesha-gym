const { REACT_APP_RAPID_API_HOST, REACT_APP_RAPID_API_KEY, REACT_APP_RAPID_API_YOUTUBE_HOST } = process.env;
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': REACT_APP_RAPID_API_HOST,
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': REACT_APP_RAPID_API_YOUTUBE_HOST,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
