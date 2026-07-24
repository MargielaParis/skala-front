var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

citySelect.addEventListener("change", async function(event) {
    var selectedValue = event.target.value;

    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하면 좌표가 표시됩니다.</p>";
        return;
    }

    var coords = selectedValue.split(",");
    var lat = coords[0];
    var lon = coords[1];
    var cityName = citySelect.options[citySelect.selectedIndex].text;

    weatherBox.innerHTML = "<p>실시간 날씨 로딩 중... ⏳</p>";

    var url = "https://api.open-meteo.com/v1/forecast";
    url = url + "?latitude=" + lat;
    url = url + "&longitude=" + lon;
    url = url + "&current=temperature_2m,relative_humidity_2m";

    try {
        var response = await fetch(url);
        var data = await response.json();
        var currentTemp = data.current.temperature_2m;
        var currentHumidity = data.current.relative_humidity_2m;

        var weatherHtml = "";
        weatherHtml = weatherHtml + '<div style="background-color: #f1f2f6; padding: 15px; border-radius: 6px; margin-top: 10px;">';
        weatherHtml = weatherHtml + "<h4>🌍 " + cityName + " 실시간 날씨</h4>";
        weatherHtml = weatherHtml + "<p>🌡️ 현재 기온: <strong>" + currentTemp + "°C</strong></p>";
        weatherHtml = weatherHtml + "<p>💧 현재 습도: <strong>" + currentHumidity + "%</strong></p>";
        weatherHtml = weatherHtml + "</div>";
        weatherBox.innerHTML = weatherHtml;
    } catch (error) {
        weatherBox.innerHTML = "<p>⚠️ 날씨 정보를 가져오는데 실패했습니다.</p>";
        console.error(error);
    }
});
