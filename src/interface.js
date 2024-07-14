async function getCityData(city){
    try{
        const infoJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=MF6FD9U2BF272ATQYZQ8LUC8V`,{mode:"cors"});
        const info = await infoJSON.json();
    
        return info;
    }
    catch(err){
        console.log(err);
        

    }
   
}

function updateDisplay(info){
    const main = document.querySelector("main");
    const content = document.querySelector(".content");
    content.remove();
    const newContent = document.createElement("div");
    newContent.classList.add("content");

    const city = document.createElement("div");
    city.textContent=info.resolvedAddress;
    city.classList.add("city");

    const temp = document.createElement("div");
    temp.textContent=info.currentConditions.temp+" °C";
    temp.classList.add("temp");

    const feelsLike = document.createElement("div");
    feelsLike.textContent="Feels like: "+info.currentConditions.feelslike +" °C";

    const humidity = document.createElement("div");
    humidity.textContent="Humidity: "+info.currentConditions.humidity +"%";

    const wind = document.createElement("div");
    wind.textContent = "Wind: "+info.currentConditions.windspeed +"km/h";


    newContent.append(city);
    newContent.append(temp);
    newContent.append(feelsLike);
    newContent.append(humidity);
    newContent.append(wind);
    
    main.append(newContent);
}

export {getCityData,updateDisplay};