import { getCityData, updateDisplay } from "./interface.js";

async function getInput(){
    const input = document.querySelector("input");
    input.addEventListener("change",async ()=>{
        const city = input.value;
        const info = await getCityData(city);
        console.log(info);
        if(info===undefined){

        }
        else{
        updateDisplay(info);
        }


    })
}


export {getInput}
