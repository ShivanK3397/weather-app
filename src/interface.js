async function getCityData(city){
    try{
        const infoJSON = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=MF6FD9U2BF272ATQYZQ8LUC8V`,{mode:"cors"});
        const info = await infoJSON.json();
    
        return info;
    }
    catch(err){
        

    }
   
}

function updateDisplay(info){
    const main = document.querySelector("main");
    const content = document.querySelector(".content");
    content.remove();
    const newContent = document.createElement("div");
    newContent.classList.add("content");

    const temp = document.createElement("div");
    temp.textContent=info.currentConditions.temp;
    newContent.append(temp);
    main.append(newContent);
}

export {getCityData,updateDisplay};