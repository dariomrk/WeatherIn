import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface TemperatureProps {
    data: weatherDataT;
}

const Temperature: FunctionComponent<TemperatureProps> = (props) => {
    return (
        <div className="temperature-container">
            <p className="actual-temperature">
                Actual temperature: {props.data.main.temp} °C
            </p>
            <div className="spacer" />
            <p className="feels-like">
                Feels like: {props.data.main.feels_like} °C
            </p>
        </div>
    );
}

export default Temperature;
