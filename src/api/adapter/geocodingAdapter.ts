import { geocodingDataT, getGeocoding } from "../getGeocoding";

/** 
 * Fetches location data from https://openweathermap.org/api/geocoding-api based on the input argument.  
 * In case the HTTP request returns a 200 status, the function resolves and returns the most likely location.  
 * In case there is no valid location for the given input, null is returned.  
 * In case of an external or fetch error an error the function rejects and returns an error object.
 * @param apiKey OpenWeatherMap API key
 * @param input City name, country code divided by comma
 * @returns Promise with the most likely location for the given input string or null if there is no valid location
 */
export const geocodingAdapter = async (apiKey: string, input: string): Promise<geocodingDataT | null> => {
    
    const geocode = getGeocoding(apiKey,input,1)
    .then((response) => {
        if(response.length < 1) {
            return Promise.resolve(null)
        }
        return response[0];
    })
    .catch((e: Error) => {
        return Promise.reject(e);
    })
    
    return Promise.resolve(geocode);
}
