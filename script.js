const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2525c6a8f5msh0859bd66eeaac34p184328jsn339882e23ab7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hour = time.getHours();
    const date = time.getDate();
    const minutes = time.getMinutes();
    bgchanger(hour);
    if (hour > 12) {
      ampm.innerHTML = "PM";
    } 
    else {
      ampm.innerHTML = "AM";
    }
    if (hour > 12) {
      if (minutes < 10) {
        hourmin.innerHTML = hour - 12 + ":" + "0" + minutes;
      } else {
        hourmin.innerHTML = hour - 12 + ":" + minutes;
      }
    } else {
      if (minutes < 10) {
        hourmin.innerHTML = hour + ":" + "0" + minutes;
      } else {
        hourmin.innerHTML = hour + ":" + minutes;
      }
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    day_date.innerHTML = days[day] + ", " + date + " " + months[month];
  }, 1000);

const getWeather = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
    .then(response => response.json())
    .then((response) => {
        cityName.innerHTML = "Weather of " + city
        cloud_pct.innerHTML = "Cloud Percentage: " + response.cloud_pct + "%"
        temp.innerHTML = response.temp + "°C"
        humidity.innerHTML = "Humidity: " + response.humidity + "%"
        wind_speed.innerHTML = "Wind Speed: " + response.wind_speed
        wind_degrees.innerHTML = "Wind Degrees: " + response.wind_degrees + "°C"
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getWeather(getCity.value)
})

getWeather("Delhi")