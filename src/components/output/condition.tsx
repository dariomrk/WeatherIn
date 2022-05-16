import { FunctionComponent } from "react";
import { weatherDataT } from "../../api/getWeatherData";

interface ConditionProps {
    data: weatherDataT;
}

const Condition: FunctionComponent<ConditionProps> = (props) => {
    return (
            <p className="condition">
                {props.data.weather[0].description.toUpperCase()}
            </p>
    );
}

export default Condition;
