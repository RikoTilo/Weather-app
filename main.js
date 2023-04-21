async function api() {
  let content = document.querySelector(".content");
  const key = "f48a1dd9c598744e72bc61f339dcb133";
  const input = document.querySelector(".countainer .search-box input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${key}`
  let res = await fetch(url)
  let data = await res.json()
  if (input === "") {
    return
  } else {
    content.style.height = "400px"
    content.style.width = "90%"
    content.style.border = "2.2px solid black";
    content.style.boxShadow = "0px 0px 7px 4px rgba(0, 0, 0, 0.5)";
  if (data.weather[0].main === "Clear") {
    content.innerHTML = `<div class="info"><img src="icon/Clouds.png"></div>`
  } else {
    if (data.weather[0].main === "Clouds") {
      content.innerHTML = `<div class="info"><img src="icon/Clouds.png"></div>`
    } else if (data.weather[0].main === "Rain") {
      content.innerHTML = `<div class="info"><img src="icon/Rain.png"></div>`
    } else if (data.weather[0].main === "Mist") {
      content.innerHTML = `<div class="info"><img src="icon/Mist.png"></div>`
    } else if (data.weather[0].main === "Snow") {
      content.innerHTML = `<div class="info"><img src="icon/Snow.png"></div>`
    }
  }
  content.innerHTML += `<h1 class="Temp">${Math.round(data.main.temp)}</h1>`
  content.innerHTML += `<div class="bnd">
    <h4>wind:${Math.round(data.wind.speed)}km/h</h4>
    <h4>humidity:${Math.round(data.main.humidity)}%</h4>
  </div>`
  }
}

api();