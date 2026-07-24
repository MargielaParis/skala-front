import { getLiveWeather } from "./weatherAPI.js";

var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

citySelect.addEventListener("change", async function(event) {
    var selectedValue = event.target.value;

    if (selectedValue === "none") {
        weatherBox.dataset.state = "idle";
        weatherBox.innerHTML = '<p class="weather-message">도시를 선택하면 현재 날씨를 보여드립니다.</p>';
        return;
    }

    var coords = selectedValue.split(",");
    var lat = coords[0];
    var lon = coords[1];
    var selectedOption = citySelect.options[citySelect.selectedIndex];
    var cityName = selectedOption.text;

    weatherBox.dataset.state = "loading";

    var loadingHtml = "";
    loadingHtml = loadingHtml + '<div class="weather-loading" aria-label="날씨 정보를 불러오는 중">';
    loadingHtml = loadingHtml + '<span class="weather-spinner" aria-hidden="true"></span>';
    loadingHtml = loadingHtml + "<p>현재 날씨를 불러오는 중입니다.</p>";
    loadingHtml = loadingHtml + "</div>";
    weatherBox.innerHTML = loadingHtml;

    var weatherInfo = await getLiveWeather(lat, lon);

    if (weatherInfo !== null) {
        weatherBox.dataset.state = "success";

        var resultHtml = "";
        resultHtml = resultHtml + '<p class="weather-location">' + cityName + "</p>";
        resultHtml = resultHtml + '<dl class="weather-metrics">';
        resultHtml = resultHtml + "<div>";
        resultHtml = resultHtml + '<dt><span aria-hidden="true">🌡️</span> 기온</dt>';
        resultHtml = resultHtml + "<dd>" + weatherInfo.temp + '<span class="weather-unit">°C</span></dd>';
        resultHtml = resultHtml + "</div>";
        resultHtml = resultHtml + "<div>";
        resultHtml = resultHtml + '<dt><span aria-hidden="true">💧</span> 습도</dt>';
        resultHtml = resultHtml + "<dd>" + weatherInfo.humidity + '<span class="weather-unit">%</span></dd>';
        resultHtml = resultHtml + "</div>";
        resultHtml = resultHtml + "</dl>";

        weatherBox.innerHTML = resultHtml;
    } else {
        weatherBox.dataset.state = "error";

        var errorHtml = "";
        errorHtml = errorHtml + '<p class="weather-error">';
        errorHtml = errorHtml + "<strong>날씨 정보를 불러오지 못했습니다.</strong><br>";
        errorHtml = errorHtml + "잠시 후 다시 도시를 선택해 주세요.";
        errorHtml = errorHtml + "</p>";
        weatherBox.innerHTML = errorHtml;
    }
});
