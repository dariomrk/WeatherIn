import React, { FunctionComponent, useEffect, useState } from "react";
import { geocodingDataT } from "../../api/getGeocoding";
import { weatherDataT } from "../../api/getWeatherData";
import { geocodingAdapter } from "../../api/adapter/geocodingAdapter";
import env from "../../env.json"
import Search from "../search/search";

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
        // TODO: get weather data and display it
    }, [geocode])

    return (
        <React.Fragment>
            <Search
                callback={searchHandler}
                showingError={showingError}
            />
        </React.Fragment>
    );
}

export default App;
