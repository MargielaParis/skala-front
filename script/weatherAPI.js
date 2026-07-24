export async function getLiveWeather(lat, lon) {
    var url = "https://api.open-meteo.com/v1/forecast";
    url = url + "?latitude=" + lat;
    url = url + "&longitude=" + lon;
    url = url + "&current=temperature_2m,relative_humidity_2m";

    try {
        var response = await fetch(url);

        if (response.ok === false) {
            throw new Error("서버 응답 불안정");
        }

        var data = await response.json();
        var result = {};
        result.temp = data.current.temperature_2m;
        result.humidity = data.current.relative_humidity_2m;
        return result;
    } catch (error) {
        console.error("API 모듈 에러:", error);
        return null;
    }
}
