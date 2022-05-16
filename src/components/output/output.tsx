import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";
import Time from "./time";
import { Temperature, FeelsLike } from "./temperature";
import WeatherIcon from "./weathericon";
import Condition from "./condition";
import { Wind, Direction } from "./wind";

interface OutputProps {
    data: weatherDataT | null;
}

const Output: FunctionComponent<OutputProps> = (props) => {

    if (props.data === null) {
        return null;
    }

    return (
        <div className="output-container">
            <div className="weather-card">
                <div className="weather-card-header">
                    <h1>Weather In {props.data.name.toUpperCase()}</h1>
                    <Time />
                </div>
                <div className="content">
                    <div className="row">
                        <div className="row-item">
                            <div className="icon-and-temperature">
                                <WeatherIcon data={props.data} />
                                <Temperature data={props.data} />
                            </div>
                            <Condition data={props.data} />
                        </div>
                        <div className="row-item">
                            <FeelsLike data={props.data} />
                            <br />
                            <Wind data={props.data} />
                            <Direction data={props.data} />
                        </div>
                    </div>
                    <div className="content-extra">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Output;
