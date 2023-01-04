function showTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      let parisTime = moment()
        .tz("Europe/Paris")
        .format("dddd, MMMM D, YYYY h:m A");
      alert(`It is ${parisTime} in Paris, France`);
    }
    if (event.target.value === "milan") {
      let milanTime = moment().tz("CET").format("dddd, MMMM D, YYYY h:m A");
      alert(`It is ${milanTime} in Milan, Italy`);
    }
    if (event.target.value === "atlanta") {
      let atlantaTime = moment()
        .tz("America/New_York")
        .format("dddd, MMMM D, YYYY h:m A");
      alert(`It is ${atlantaTime} in Atlanta, Georgia`);
    }

    if (event.target.value === "orlando") {
      let orlandoTime = moment()
        .tz("America/New_York")
        .format("dddd, MMMM D, YYYY h:m A");
      alert(`It is ${orlandoTime} in Orlando, Florida`);
    }

    if (event.target.value === "unitedKingdom") {
      let ukTime = moment().tz("Etc/GMT").format("dddd, MMMM D, YYYY h:m A");
      alert(`It is ${ukTime} in the London, United Kingdom`);
    }
  }
}

let citySelect = document.querySelector("#clock");
citySelect.addEventListener("change", showTime);
