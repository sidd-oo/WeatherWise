const searchBar = document.querySelector('#searchBar')
const cityElem = document.querySelector('#cityname') 
const dateElem = document.querySelector('#date-time') 
const tempElem = document.querySelector('#temp') 
const minElem = document.querySelector('#min') 
const maxElem = document.querySelector('#max')
const descElem = document.querySelector('#desc') 
const imgElem = document.querySelector('img')
let city = "New Delhi"
let apiKey = 'd7df84db6ca7626981f283cc3ac07d71'
dateElem.innerText = new Date()

searchBar.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        city = e.target.value
        console.log(city)
        getData(city)
    }
})


let Weatherdata 
const renderPage = (data)=>{
    cityElem.innerText = data.name +", " + data.sys.country
    dateElem.innerText = new Date()
    tempElem.innerHTML = data.main.temp + "&#176;C"
    minElem.innerHTML = data.main.temp_min + "&#176;C / "
    maxElem.innerHTML = data.main.temp_max + "&#176;C"
    descElem.innerText = data.weather[0].description
    Weatherdata = data
}

const errorPage = (err)=>{
    cityElem.innerText = ""
    dateElem.innerText = ""
    tempElem.innerText = ""
    minElem.style.fontSize ="23px"
    minElem.style.color ="orange"
    minElem.innerText = "Entered input does't exist"
    maxElem.innerText = ""
    descElem.style.fontSize = "15px"
    descElem.innerText = "Please enter a valid city name"
}

const getData = (city)=>{
    console.log("Default Running")
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    fetch(link)
    .then(response => response.json())
    .then(data => renderPage(data))
    .catch(err => errorPage(err));
}

let defaultSearch = (city)=>{
    console.log("Default Search running")
    getData(city)
}
defaultSearch(city)