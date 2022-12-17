// Weather app

const key = "a1c578379d1946d6bdd240cbd1c31fd2";
const input = document.querySelector('.inp');
const button = document.querySelector('.btn');

button.addEventListener('click', getWeather);

function getWeather() {
    let city = input.value;

    if (city.length === 0) alert('Input is empty!')

    else fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    )
        .then((result) => result.json())
        .then((data) => {
            document.querySelector(
                ".weather"
            ).innerHTML = `<br>City: ${data.name}<br> 
            Temperature: ${Math.round(data.main.temp - 273)}°C<br> 
            Wind Speed: ${Math.round(data.wind.speed)} ms<br> 
            Clouds: ${data.clouds.all}<br>
            Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            })} / Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            })}`;
        }
        )
}