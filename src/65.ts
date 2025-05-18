import { strict as assert } from "assert";

describe("MathClass", () => {
    it("should calculate simple addition", () => {
        const result = Math.add(3, 4);
        assert(result === 7);
    });

    it("should return the maximum of two numbers", () => {
        const max = Math.max(5, 10);
        assert(max === 10);
    });
});
