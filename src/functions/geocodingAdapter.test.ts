import { geocodingAdapter } from "./geocodingAdapter";
import env from "../env.json";

test("getGeocoding: response status 200", done => {
    geocodingAdapter(env.apiKey,env.location.city)
    .then((result) => {
        expect(result.country).toBe(env.location.countryCode);
        done();
    })
})

test("getGeocoding: response status not 200", async () => {
    await expect(geocodingAdapter("invalidApiKey",env.location.city)).rejects.toThrow();
})

test("getGeocoding: empty array", async () => {
    await expect(geocodingAdapter(env.apiKey,"thisIsNotARealLocation")).rejects.toThrow();
})