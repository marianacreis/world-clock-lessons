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

updateTime();
setInterval(updateTime, 1000);
