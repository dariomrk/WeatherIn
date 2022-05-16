import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface WeatherIconProps {
    data: weatherDataT;
}

const WeatherIcon: FunctionComponent<WeatherIconProps> = (props) => {

    return (
            <img className="weather-icon"
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="Weather icon" />
    );
}

export default WeatherIcon;
