import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface TemperatureProps {
    data: weatherDataT;
}

const Temperature: FunctionComponent<TemperatureProps> = (props) => {
    return (
        <h2 className="temperature">
            {props.data.main.temp} °C
        </h2>
    );
}

const FeelsLike: FunctionComponent<TemperatureProps> = (props) => {
    return (
        <p className="feels-like">
            Feels like: {props.data.main.feels_like} °C
        </p>
    )
}

export { Temperature, FeelsLike };
