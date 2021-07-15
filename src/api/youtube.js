import { YOUTUBE_API_KEY } from "../config/youtube";

// true: use youtube api.
// false: use mock data (data.json)
// Toggle the value depends on your situation.
const useYoutube = true;

function mapObjectToQueryStrings(obj) {
  let result = "";

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += `&${prop}=${obj[prop]}`;
    }
  }

  return result;
}

export const searchYoutube = async (options) => {
  if (useYoutube) {
    const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet${mapObjectToQueryStrings(
      options
    )}`;

    const res = await fetch(YOUTUBE_URL);
    const data = await res.json();

    return data;
  }

  // `data.json` is located in /public directory.
  const res = await fetch("/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 1000);
  });
};
