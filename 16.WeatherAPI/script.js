const days = ["Sunday","Monday","Tuesday"];
const months = ["Sunday","Monday","Sunday","Monday","Sunday","Monday","Sunday","Monday","Sunday","Octber","Sunday","Monday"];


function getWeatherInfo(city){
    // let cityname =  (document.querySelector(".search").value) ? document.querySelector(".search").value : "Rajkot";
    const today = new Date();
    let cityname =  document.querySelector(".search").value || city;

    const API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityname}`;
    fetch(API).then((res) => {
        res.json().then((data) => {
            console.log(data);
            var is_day = data.current.is_day;
            var urlpoint = "day";
            var code = data.current.condition.code;
            document.querySelector(".name").innerText = cityname;
            document.querySelector(".temp span").innerText = data.current.temp_c;
            document.querySelector(".condition").innerText = data.current.condition.text;
            document.querySelector(".weather img").src = data.current.condition.icon;
            document.querySelector(".cloud").innerText = data.current.cloud+"%";
            document.querySelector(".humidity").innerText = data.current.humidity+"%";
            document.querySelector(".wind").innerText = data.current.wind_kph+" km/h";
            document.querySelector(".time").innerText = `${(today.getHours()>12) ? today.getHours()-12 :today.getHours()}:${today.getMinutes()}`;
            document.querySelector(".date").innerText = `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}`;

            if(!is_day){
                urlpoint = "night";
            }

            if(code == 1000){
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/clear.jpg)`;
            }else if( code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1169 ||
                code == 1187 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282){
                    document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/cloudy.jpg)`;
            }else if(code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252){
                    document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/rainy.jpg)`;
            }else{
                document.querySelector(".weather-app").style.backgroundImage = `url(./images/${urlpoint}/snowy.jpg)`;
            }
        })
    })
}

getWeatherInfo("Nadiad");



document.querySelector(".submit").onclick = getWeatherInfo;



document.querySelector(".cities").onclick = function(e){
    if(e.target.tagName == "LI"){
        document.querySelector('.search').value = e.target.innerText;
        getWeatherInfo();
    }
}


