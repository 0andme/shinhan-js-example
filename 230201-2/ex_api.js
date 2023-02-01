const citySet = {
  seoul: {
    latitude: 37.57,
    longitude: 126.98,
  },
  london: {
    latitude: 51.51,
    longitude: -0.13,
  },
  newyork: {
    latitude: 56.25,
    longitude: -5.28,
  },
};
// console.log(BASE_URL.replace("@long", "zz"));
let cityNameEl = document.getElementsByClassName("cityName")[0];
let cityNow = "";
function setCity(event) {
  if (event.target.tagName === "BUTTON") {
    cityNameEl.innerText = event.target.id;
    cityNow = event.target.id;
  }
  let data = await getApi();
  // let cityNameEl = document.getElementsByClassName("temperature")[0];
  // cityNameEl.innerText=data.
}

async function getApi() {
  let {latitude, longitude} = citySet[cityNow];
  let response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode&current_weather=true&timezone=auto`
  );
  let data = await response.json();

  return data;
}
