// weather api key 
const apiKey = `f9cf327cd4effe12181026a9409d7c74`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const displayTemp = data => {
    console.log(data.weather[0].main, data);

    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main)
    setInnerText('description', data.weather[0].description)
    // setCondintion.document.innerText = data.weather[0].main
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
    document.getElementById('location').innerText = city;
})

loadTemperature('dhaka');
