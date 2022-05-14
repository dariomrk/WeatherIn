import { bearingConvert } from "./bearingConvert";

test("bearingConvert: 250 degrees to WSW", () =>{
    expect(bearingConvert(250)).toBe("WSW");
});
