import { FunctionComponent } from "react";

const Time: FunctionComponent = () => {

    const d = new Date();
    const currentTime = `${d.getHours()}:${String(d.getMinutes()).padStart(2,"0")}`;

    return (
            <p className="time">{currentTime}</p>
    );
}

export default Time;
