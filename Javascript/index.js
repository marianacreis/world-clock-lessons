function updateTime() {
  let porto = document.querySelector("#porto");
  let portoDateElement = porto.querySelector(".date");
  let portoTimeElement = porto.querySelector(".time");
  let portoElement = moment().tz("Europe/Lisbon");

  portoDateElement.innerHTML = portoElement.format("MMMM Do YYYY");
  portoTimeElement.innerHTML = portoElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  let losAngeles = document.querySelector("#losAngeles");
  let losAngelesDateElement = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesElement = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesElement.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        `;
}

let citiesSelection = document.querySelector("#cities-selection");
citiesSelection.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
