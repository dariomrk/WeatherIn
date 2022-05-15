import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface WindProps {
    data: weatherDataT;
}

/**
 * Returns cardinal or intercardinal direction depending on the bearing argument.
 * @param bearing Bearing
 * @returns Cardinal or intercardinal direction such as: N, SE, WSW...
 */
const bearingConvert = (bearing: number) => {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

    return directions[Math.round((bearing % 360) / 22.5)];
}

const Wind: FunctionComponent<WindProps> = (props) => {

    return (
        <div className="wind-container">
            <div className="wind-container-intensity">
                <p className="wind-intensity">
                    Wind speed: {props.data.wind.speed}m/s
                </p>
            </div>
            <div className="spacer" />
            <div className="wind-container-direction">
                <p className="wind-direction">
                    Wind coming from: {bearingConvert(props.data.wind.deg)}
                </p>
            </div>
        </div>
    );
}

export default Wind;
