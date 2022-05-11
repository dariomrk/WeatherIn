import { FunctionComponent } from "react";

interface WeatherInfoItemProps {
    info: string;
}

const WeatherInfoItem: FunctionComponent<WeatherInfoItemProps> = (props) => {
    return (
        <li className="weather-info-item">
            {props.info}
        </li>
    );
}

export default WeatherInfoItem;
