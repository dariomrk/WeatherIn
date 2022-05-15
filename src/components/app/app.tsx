import React, { FunctionComponent, useEffect, useState } from "react";
import env from "../../env.json"
import { geocodingDataT } from "../../api/getGeocoding";
import { getWeatherData, weatherDataT } from "../../api/getWeatherData";
import { geocodingAdapter } from "../../api/adapter/geocodingAdapter";
import Search from "../input/search";
import WeatherIcon from "../output/weathericon";
import Output from "../output/output";

const App: FunctionComponent = () => {

    const [geocode, setGeocode] = useState<geocodingDataT | null | undefined>(undefined);
    const [weather, setWeatherData] = useState<weatherDataT | null>(null);
    const [showingError, setShowingError] = useState<boolean>(false);

    const searchHandler = (query: string): void => {
        geocodingAdapter(env.apiKey, query)
            .then((result) => {
                setGeocode(result);
            })
            .catch((e: Error) => {
                console.warn(e);
            })
    }

    useEffect(() => {
        // if searchHandler has never been invoked
        if (geocode === undefined) {
            return;
        }
        // if searchHandler has been invoked and geocodingAdapter returned null
        if (geocode === null) {
            setShowingError(true);
            return;
        }
        // if geocodingAdapter returned data
        setShowingError(false);

        getWeatherData(env.apiKey, geocode.lat, geocode.lon)
        .then((result) => {
            setWeatherData(result);
        })
        .catch((e: Error)=>{
            console.warn(e.message);
        })
    }, [geocode])

    return (
        <React.Fragment>
            <Search
                callback={searchHandler}
                showingError={showingError}
            />
            <Output data={weather} />
        </React.Fragment>
    );
}

export default App;
