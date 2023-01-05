function updateTime() {
  // city 1
  let city1Element = document.querySelector("#city1");
  if (city1Element) {
    let city1DateElement = city1Element.querySelector(".date");
    let city1TimeElement = city1Element.querySelector(".time");

    let city1 = moment().tz("Europe/Paris");

    city1DateElement.innerHTML = city1.format("MMMM Do YYYY");
    city1TimeElement.innerHTML = city1.format("h:m [<small>]A[</small>]");
  }
  // city 2
  let city2Element = document.querySelector("#city2");
  if (city2Element) {
    let city2DateElement = city2Element.querySelector(".date");
    let city2TimeElement = city2Element.querySelector(".time");

    let city2 = moment().tz("Australia/Queensland");

    city2DateElement.innerHTML = city2.format("MMMM Do YYYY");
    city2TimeElement.innerHTML = city2.format("h:m [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:m ")}<small>${cityTime.format(
    "A"
  )}</small></div>
        </div>

`;
}

updateTime();
setInterval(updateTime, 10000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
