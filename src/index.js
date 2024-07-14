import { getInput } from "./weather.js";
import { updateDisplay,getCityData } from "./interface.js";
import "./style.css";

async function displayLondon(){
    const london = await getCityData("london");
    updateDisplay(london);
}

displayLondon();
getInput();
