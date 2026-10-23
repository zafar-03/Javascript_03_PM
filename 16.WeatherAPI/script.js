document.querySelector("button").onclick = function () {
    const city = document.querySelector("input").value;

    const API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;
    fetch(API).then((res) => {
        res.json().then((data) => {
            console.log(data);
        })
    })
}