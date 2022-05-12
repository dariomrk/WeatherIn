import React, { FunctionComponent } from "react";
import { geocodingDataDefinition, getGeocoding } from "../api/geocoding";
import { currentWeatherDataDefinition, getCurrentWeatherData } from "../api/currentWeatherData";
import SearchCity from "./searchCity";
import WeatherInfo from "./weatherInfo";
import env from "../env.json"
import WeatherInfoItem from "./weatherInfoItem";

interface AppProps {

}

const App: FunctionComponent<AppProps> = (props) => {

    const [apiKey, setApiKey] = React.useState<string>(env.apiKey); // TODO: implement a way to input the API key from the UI.
    const [weatherData, setWeatherData] = React.useState<currentWeatherDataDefinition | null>(null);

    /**
     * Returns cardinal or intercardinal direction depending on the bearing argument.
     * @param bearing Bearing
     * @returns Cardinal or intercardinal direction
     */
    const bearingToCardinal = (bearing: number) => {
        const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
        return directions[Math.round((bearing % 360) / 22.5)];
    }

    /**
     * Handles city search and sets the current weather data.
     * @param userInput City of interest
     */
    const searchHandler = (userInput: string): void => {

        try {
            // Block empty search
            if (userInput.replace(/\s+/g, 'X').length < 1) {
                return;
            }

            getGeocoding(apiKey, userInput, 1)
                .then((geocodes: Array<geocodingDataDefinition>) => {
                    const r = geocodes[0];
                    getCurrentWeatherData(env.apiKey,r.lat,r.lon)
                    .then((w: currentWeatherDataDefinition)=>{
                        setWeatherData(w);
                    })
                    .catch(()=>{
                        console.error("ERROR: Cannot fetch weather data.")
                    })
                })
                .catch(() => {
                    console.error("ERROR: Cannot perform geocoding.");
                })
        } catch (e) {
            console.warn("WARN: Cannot parse user input.");
        }

    }

    /**
     * Handles the display of simple weather information.
     * @returns WeatherInfoItem array if weather info is available
     */
    const displayWeatherInfo = () => {
        if (weatherData === null) {
            return (
                <p id="weather-info-null">No information available.</p>
            )
        }

        const main = weatherData.main;

        return (
            <React.Fragment>
                <WeatherInfoItem
                    info={`Feels like: ${main.feels_like}°C`}
                />
                <WeatherInfoItem
                    info={`Actual temperature: ${main.temp}°C`}
                />
                <WeatherInfoItem
                    info={`Wind speed: ${weatherData.wind.speed}m/s`}
                />
                <WeatherInfoItem
                    info={`Wind speed: ${weatherData.wind.speed}m/s`}
                />
                <WeatherInfoItem
                    info={`Wind direction: ${bearingToCardinal(weatherData.wind.deg)}`}
                />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div id="input">
                <SearchCity
                    onSearchHandler={searchHandler}
                />
            </div>
            <WeatherInfo>
                {displayWeatherInfo()}
            </WeatherInfo>
        </React.Fragment>
    );
}

export default App;
