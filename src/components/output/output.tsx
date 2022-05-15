import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";
import Time from "./time";
import Temperature from "./temperature";
import WeatherIcon from "./weathericon";
import Condition from "./condition";
import Wind from "./wind";

interface OutputProps {
    data: weatherDataT | null;
}

const Output: FunctionComponent<OutputProps> = (props) => {

    if (props.data === null) {
        return null;
    }

    return (
        <div className="output-container">
            <Time />
            <Temperature data={props.data} />
            <WeatherIcon data={props.data} />
            <Condition data={props.data} />
            <Wind data={props.data} />
        </div>
    );
}

export default Output;
