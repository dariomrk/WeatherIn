/**
 * Returns cardinal or intercardinal direction depending on the bearing argument.
 * @param bearing Bearing
 * @returns Cardinal or intercardinal direction such as: N, SE, WSW...
 */
export const bearingConvert = (bearing: number) => {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    
    return directions[Math.round((bearing % 360) / 22.5)];
}
