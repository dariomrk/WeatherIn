import { FunctionComponent } from "react";

interface WeatherInfoProps {
    children: JSX.Element | JSX.Element[];
}

const WeatherInfo: FunctionComponent<WeatherInfoProps> = (props) => {

    return (
        <div id="weather-info">
            <ul id="weather-info-list">
                {props.children}
            </ul>
        </div>
    );

}

export default WeatherInfo;
