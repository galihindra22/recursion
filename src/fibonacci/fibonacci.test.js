import { fibonacci, fibonacciIterative } from "./fibonacci.js";

describe("fibonacci", () =>{
    test("Return empty array if input is less than equal 0", () => {
        expect(fibonacci(0)).toEqual([]);
    });
    test("The first element should be 0", () => {
        expect(fibonacci(1)).toEqual([0]);
    });
    test("The second element should be 1", () => {
        expect(fibonacci(2)).toEqual([0, 1]);
    });
    test("The third element should be sum of the last 2 elements", () =>{
        expect(fibonacci(3)).toEqual([0, 1, 1]);
    });
    test("The fourth element should be sum of the last 2 elements", () =>{
        expect(fibonacci(4)).toEqual([0, 1, 1, 2]);
    });
    test("The fifth element should be sum of the last 2 elements", () =>{
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });
    test("The sixth element should be sum of the last 2 elements", () =>{
        expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
    });
});

describe("fibonacciIterative", () =>{
    test("Return array of 5 elements at Fibonacci(5)", () => {
        expect(fibonacciIterative(5)).toEqual([0, 1, 1, 2, 3]);
    });
});