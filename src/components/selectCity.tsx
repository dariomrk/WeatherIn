import { FunctionComponent } from "react";
import { geocodingDataDefinition } from "../api/geocoding";

interface SelectCityProps {
    geocodingData: Array<geocodingDataDefinition> | null;
    onSelectHandler: (index: number) => void;
}

/**
 * **Displays a list of cities.**  
 * When a user selects a city item the  
 * props.onSelectHandler gets invoked with the  
 * selected item index passed as the argument.
 */
const SelectCity: FunctionComponent<SelectCityProps> = (props) => {

    if (props.geocodingData === null) {
        return (
            <div id="select-city">
                <ul id="select-city-list">
                    Search for a city first.
                </ul>
            </div>
        );
    }

    const listEntries = props.geocodingData.map((entry, i) => {

        return (
            <CityListItem
                cityName={entry.name}
                countryCode={entry.country}
                index={i}
                onSelectHandler={props.onSelectHandler}
                key={i}
            />
        )

    });

    return (
        <div id="select-city">
            <ul id="select-city-list">
                {listEntries}
            </ul>
        </div>
    );
}

interface CityListItemProps {
    cityName: string,
    countryCode: string,
    index: number,
    onSelectHandler: (index: number) => void,
    key: number,
}

const CityListItem: FunctionComponent<CityListItemProps> = (props) => {
    return (
        <li className="select-city-item"
            onClick={() => {
                props.onSelectHandler(props.index);
            }}>
            {`${props.cityName}, ${props.countryCode}`}
        </li>
    );

}

export default SelectCity;
