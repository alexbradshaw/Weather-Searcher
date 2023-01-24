const mainSearch = async (url) => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + url + "&appid=7f797aeb2c4333e090bbfef3ca363921");
    const latlong = await response.json();

    return altSearch(latlong.city.coord.lat, latlong.city.coord.lon);
}

const altSearch = async (lat, long) => {
    const mainResponse = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&appid=7f797aeb2c4333e090bbfef3ca363921");
    const weather = await mainResponse.json();

    const altResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=7f797aeb2c4333e090bbfef3ca363921");
    const fiveDay = await altResponse.json();

    return {weather, fiveDay};
}

export { mainSearch, altSearch };