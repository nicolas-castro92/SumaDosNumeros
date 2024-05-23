const { suma } = require("../suma");

describe("Test about suma function", () => {
    it("should return a + b number", () => {
        const result = suma(1, 1);
        expect(result).toBe(2);
    });
    
    it("should fail", () => {
        const numberA = 5;
        const numberB = 6;
        const result = suma(numberA, numberB);
        expect(result).not.toEqual(14);
    })
})