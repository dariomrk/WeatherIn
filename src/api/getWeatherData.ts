export type weatherDataT = {
    coord: {lon: number, lat: number,},
    weather: Array<{id: number, main: string, description: string, icon: string,}>,
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    }
    visibility: number,
    wind: {speed: number, deg: number,},
    clouds: {all: number,},
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number,
    id: number,
    name: string,
    cod: number,
}

/**
 * Fetches current weather data from https://openweathermap.org/current based on the lat and long arguments.  
 * In case the HTTP request returns a 200 status, the function resolves and returns weather data,
 * otherwise the function rejects and returns an error.
 * @param apiKey OpenWeatherMap API key
 * @param lat Latitude
 * @param lon Longitude
 * @returns Promise with weather data
 */
export const getWeatherData = async (apiKey: string, lat: number, lon: number): Promise<weatherDataT> => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const data = fetch(url)
    .then((httpResponse: Response) => {
        if (httpResponse.status !== 200) {
            return Promise.reject(new Error(`Cannot fetch from http://api.openweathermap.org/. HTTP status: ${httpResponse.status}`));
        }
        return httpResponse.json() as Promise<weatherDataT>;
    })

    return Promise.resolve(data);

}
