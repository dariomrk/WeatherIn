
import { getGeocoding } from "./geocoding";
import env from "../env.json";

test("getGeocoding: response status 200", done => {
    getGeocoding(env.apiKey,env.location.city,1)
    .then((result) => {
        expect(result[0].country).toBe(env.location.countryCode);
        done();
    })
})

test("getGeocoding: response status not 200", async () => {
    await expect(getGeocoding("invalidApiKey",env.location.city,1)).rejects.toThrow();
})
