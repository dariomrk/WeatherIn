import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface ConditionProps {
    data: weatherDataT;
}

const Condition: FunctionComponent<ConditionProps> = (props) => {
    return (
        <div className="condition-container">
            <p className="condition">
                {props.data.weather[0].description.toUpperCase()}
            </p>
        </div>
    );
}

export default Condition;
