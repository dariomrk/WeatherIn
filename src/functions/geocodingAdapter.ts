import { geocodingDataT, getGeocoding } from "../api/getGeocoding";

/** 
 * Fetches location data from https://openweathermap.org/api/geocoding-api based on the input argument.
 * In case the HTTP request returns a 200 status, the function resolves and returns the most likely location.  
 * Otherwise the function rejects and returns an error.
 * @param apiKey OpenWeatherMap API key
 * @param input City name, country code divided by comma
 * @returns Promise with the most likely location for the given input string
 */
export const geocodingAdapter = async (apiKey: string, input: string): Promise<geocodingDataT> => {
    
    const geocode = getGeocoding(apiKey,input,1)
    .then((response) => {
        if(response.length < 1) {
            return Promise.reject(new Error("Unexpected getGeocode response."))
        }
        return response[0];
    })
    .catch((e: Error) => {
        return Promise.reject(e);
    })
    
    return Promise.resolve(geocode);
}
