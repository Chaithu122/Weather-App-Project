let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById('weather-desc');
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");

const apikey = '8f4485f5f505ef4d2ad72e90b213a15f'; 
btnEle.onclick = function() {
    if (inputEle.value == "") {
        alert("Please enter some location");
    } else {
        let loc = inputEle.value; 
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`; 
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const { name } = data;
                const { feels_like, temp } = data.main;
                const { description, icon: weatherIcon } = data.weather[0];

               
                tempEle.innerText = Math.round(feels_like - 273); 

                
                locEle.innerText = name;
                weatherdescEle.innerText = description;

               
                icon.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`; 
            })
            .catch(() => {
                alert("Please enter a valid location");
            });
        
        
        inputEle.value = "";
    }
};
