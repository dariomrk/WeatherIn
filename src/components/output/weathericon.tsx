import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface WeatherIconProps {
    data: weatherDataT;
}

const WeatherIcon: FunctionComponent<WeatherIconProps> = (props) => {

    return (
        <div className="weather-icon-container">
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
        </div>
    );
}

export default WeatherIcon;
