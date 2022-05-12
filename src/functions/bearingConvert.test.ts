import { bearingConvert } from "./bearingConvert";

test("bearingConvert", () =>{
    expect(bearingConvert(250)).toBe("WSW");
});
