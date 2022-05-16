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
        <div className="wind">
            <p>Wind speed: {props.data.wind.speed}m/s</p>
        </div>
    );
}

const Direction: FunctionComponent<WindProps> = (props) => {

    return (
        <div className="wind-direction">
            <p>Wind direction: {bearingConvert(props.data.wind.deg)}</p>
        </div>
    )
}

export { Wind, Direction };
