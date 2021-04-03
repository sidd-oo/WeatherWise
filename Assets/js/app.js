const searchBar = document.querySelector('#searchBar')
const cityElem = document.querySelector('#cityname') 
const dateElem = document.querySelector('#date-time') 
const tempElem = document.querySelector('#temp') 
const minMaxElem = document.querySelector('#min-max') 
const descElem = document.querySelector('#desc') 
let city = "New Delhi"
let apiKey = 'd7df84db6ca7626981f283cc3ac07d71'

searchBar.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        city = e.target.value
        console.log(city)
        getData(city)
    }
})

let Weatherdata 
const renderPage = (data)=>{
    console.log(data)
    cityElem.innerText = data.name +", " + data.sys.country
    dateElem.innerText = new Date()
    tempElem.innerText = data.main.temp
    minMaxElem.innerText = data.main.temp_min +"/"+ data.main.temp_max
    descElem.innerText = data.weather[0].description
    Weatherdata = data

}

const getData = (city)=>{
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(link)
    .then(response => response.json())
    .then(data => renderPage(data));
}