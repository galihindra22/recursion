import { mergeSort } from "./mergeSort.js";

describe("mergeSort", () => {
    test("Expect to return a sorted array", () => {
        expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});