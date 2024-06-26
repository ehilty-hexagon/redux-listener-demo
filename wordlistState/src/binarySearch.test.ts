import { binarySearch } from "./binarySearch";

describe("binary search", () => {

    it("should search empty array", () => {
        expect(binarySearch([], 0)).toBe(null);
    });

    it("should return null if value not found", () => {
        expect(binarySearch([1,2,3], 4)).toBe(null);
    });

    it("should return index of value if found", () => {
        expect(binarySearch([1,8,10,20,21], 8)).toBe(1);
    });

});