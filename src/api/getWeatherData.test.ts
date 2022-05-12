import { getWeatherData } from "./getWeatherData";
import env from "../env.json";

test("gettWeatherData: response status 200", done => {
    getWeatherData(env.apiKey,env.location.postion.lat as unknown as number,env.location.postion.lon as unknown as number)
    .then((result) => {
        expect(result.name).toBe(env.location.city);
        done();
    })
})

test("getWeatherData: response status not 200", async () => {
    await expect(
    getWeatherData("invalidApiKey", env.location.postion.lat as unknown as number, env.location.postion.lon as unknown as number))
    .rejects.toThrow();
})