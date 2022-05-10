import React, { FunctionComponent } from "react";
import { geocodingDataDefinition, getGeocoding } from "../api/geocoding";
import { currentWeatherDataDefinition, getCurrentWeatherData } from "../api/currentWeatherData";
import SearchCity from "./searchCity";
import SelectCity from "./selectCity";
import WeatherInfo from "./weatherInfo";
import env from "../env.json"

interface AppProps {

}

const App: FunctionComponent<AppProps> = (props) => {

    const searchLimit = 5; // Maximum number of items getGeocoding is going to return.
    const [apiKey, setApiKey] = React.useState<string>(env.apiKey); // TODO: implement a way to input the API key from the UI.
    const [searchResult, setSearchResult] = React.useState<Array<geocodingDataDefinition> | null>(null);
    const [selectedResult, setSelectedResult] = React.useState<geocodingDataDefinition | null>(null);
    const [weatherData, setWeatherData] = React.useState<currentWeatherDataDefinition | null>(null);

    // Handles city search
    const searchHandler = (userInput: string) => {

        try {
            // Block empty search
            if (userInput.replace(/\s+/g, 'X').length < 1) {
                return;
            }

            getGeocoding(apiKey, userInput, searchLimit)
                .then((r: Array<geocodingDataDefinition>) => {
                    setSearchResult(r);
                })
                .catch(() => {
                    console.error("ERROR: Cannot fetch data from an external API.");
                })
        } catch (e) {
            console.warn("WARN: Cannot parse user input.");
        }

    }

    // Handles the selection of an city
    const selectHandler = (index: number) => {
        if (searchResult === null) {
            return;
        }
        setSelectedResult(searchResult[index]); // Do I even need this?

        getCurrentWeatherData(env.apiKey,searchResult[index].lat,searchResult[index].lon)
        .then((result: currentWeatherDataDefinition) => {
            setWeatherData(result);
        })
        .catch(() => {
            console.error("ERROR: Cannot fetch data from an external API.");
        })
    }

    return (
        <React.Fragment>
            <SearchCity
                onSearchHandler={searchHandler}
            />
            <SelectCity
                geocodingData={searchResult}
                onSelectHandler={selectHandler}
            />
            <WeatherInfo
                data={weatherData}
            />
        </React.Fragment>
    );
}

export default App;
