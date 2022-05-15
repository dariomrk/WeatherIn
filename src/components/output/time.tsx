import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

const Time: FunctionComponent = () => {

    const d = new Date;
    const currentTime = `${d.getHours()}:${d.getMinutes()}`;

    return (
        <div className="time-container">
            <p className="time">{currentTime}</p>
        </div>
    );
}

export default Time;
