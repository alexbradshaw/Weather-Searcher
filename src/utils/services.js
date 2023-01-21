const mainSearch = async (url) => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + url + "&appid=437797cffc2e8d40f05daee937e35763");
    const latlong = await response.json();

    return altSearch(latlong.city.coord.lat, latlong.city.coord.lon);
}

const altSearch = async (lat, long) => {
    const mainResponse = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=437797cffc2e8d40f05daee937e35763");
    const weather = await mainResponse.json();

    const altResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=437797cffc2e8d40f05daee937e35763");
    const fiveDay = await altResponse.json();

    return {weather, fiveDay};
}

export { mainSearch, altSearch };