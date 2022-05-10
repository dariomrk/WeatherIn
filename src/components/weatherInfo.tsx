import { FunctionComponent } from "react";
import { currentWeatherDataDefinition } from "../api/currentWeatherData";

interface WeatherInfoProps {
    data: currentWeatherDataDefinition | null;
}
 
const WeatherInfo: FunctionComponent<WeatherInfoProps> = (props) => {

    const addInfoItem = (txtBefore: string, input: string | number, txtAfer: string) => {
        return(
            <li className="weather-info-item">
                {txtBefore}{input}{txtAfer}
            </li>
        )
    }

    if(props.data === null) {
        return(
            <div id="weather-info">
            <p id="weather-info-null">There is no information available.</p>
        </div>
        )
    }

    const main = props.data.main; // just for ease of writing

    return ( 
        <div id="weather-info">
            <ul id="weather-info-list">
                {addInfoItem("Feels like: ",main.feels_like,"°C")}
                {addInfoItem("Actual temperature: ",main.temp,"°C")}
                {addInfoItem("Relative humidity: ",main.humidity,"%")}
                {addInfoItem("Wind speed: ",props.data.wind.speed, " m/s")}
                {addInfoItem("Wind direction: ",props.data.wind.deg,"°")}
            </ul>
        </div>
     );
}
 
export default WeatherInfo;
