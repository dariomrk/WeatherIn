export type geocodingDataDefinition = {
    name: string,
    local_names: {},
    lat: number,
    lon: number,
    country: string,
}

/** 
 * Fetches location data from https://openweathermap.org/api/geocoding-api based on the input argument.
 * In case the HTTP request returns a 200 status, the function resolves and returns an array of locations,
 * otherwise the function rejects and returns an error.
 * @param apiKey OpenWeatherMap API key
 * @param input City name, country code divided by comma
 * @param limit Number of locations in API response
 * @returns Promise with the array of locations
 */
export const getGeocoding = async (apiKey: string, input: string, limit: number = 5) : Promise<Array<geocodingDataDefinition>> => {

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=${limit}&appid=${apiKey}`;

    const data = fetch(url)
    .then((httpResponse: Response) => {
        if (httpResponse.status !== 200) {
            return Promise.reject(new Error(`Cannot fetch from http://api.openweathermap.org/. HTTP status: ${httpResponse.status}`));
        }
        return httpResponse.json() as Promise<Array<geocodingDataDefinition>>;
    })

    return Promise.resolve(data);
}
