
import { getCurrentWeatherData } from "./currentWeatherData";
import env from "../env.json";

test("getCurrentWeatherData: response status 200", done => {
    getCurrentWeatherData(env.apiKey,env.location.postion.lat as unknown as number,env.location.postion.lon as unknown as number)
    .then((result) => {
        expect(result.name).toBe(env.location.city);
        done();
    })
})

test("getCurrentWeatherData: response status not 200", async () => {
    await expect(
    getCurrentWeatherData("invalidApiKey", env.location.postion.lat as unknown as number, env.location.postion.lon as unknown as number))
    .rejects.toThrow();
})