const mainSearch = async (url) => {
    const response = await fetch(url);
    const latlong = await response.json();

    const mainResponse = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latlong.city.coord.lat + "&lon=" + latlong.city.coord.lon + "&units=imperial&appid=7f797aeb2c4333e090bbfef3ca363921");
    const weather = await mainResponse.json();

    const altResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latlong.city.coord.lat + "&lon=" + latlong.city.coord.lon + "&units=imperial&appid=7f797aeb2c4333e090bbfef3ca363921");
    const fiveDay = await altResponse.json();

    // console.log(weather);
    // console.log(fiveDay);

    return {weather, fiveDay};
}

export default mainSearch;