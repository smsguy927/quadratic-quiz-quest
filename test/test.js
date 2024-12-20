import * as assert from "node:assert";
import {simplifyRadical} from "../public/Math.js";

describe("simplifyRadical", function() {
    it('0 It returns a simplified radical object ', function () {
        // Setup
        const input = 1
        const expected = {
            coefficient: 1,
            isImaginary: false,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('1 It returns a simplified radical object ', function () {
        // Setup
        const input = 2
        const expected = {
            coefficient: 1,
            isImaginary: false,
            degree: 2,
            radicand: 2
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('2 It returns a simplified radical object ', function () {
        // Setup
        const input = 4
        const expected = {
            coefficient: 2,
            isImaginary: false,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('3 It returns a simplified radical object ', function () {
        // Setup
        const input = 8
        const expected = {
            coefficient: 2,
            isImaginary: false,
            degree: 2,
            radicand: 2
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('4 It returns a simplified radical object ', function () {
        // Setup
        const input = [8,3]
        const expected = {
            coefficient: 2,
            isImaginary: false,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input[0], input[1]);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('5 It returns a simplified radical object ', function () {
        // Setup
        const input = [27,3]
        const expected = {
            coefficient: 3,
            isImaginary: false,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input[0], input[1]);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('6 It returns a simplified radical object ', function () {
        // Setup
        const input = [16,3]
        const expected = {
            coefficient: 2,
            isImaginary: false,
            degree: 3,
            radicand: 2
        }

        // Exercise
        const result = simplifyRadical(input[0], input[1]);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('7 It returns a simplified radical object ', function () {
        // Setup
        const input = 75
        const expected = {
            coefficient: 5,
            isImaginary: false,
            degree: 2,
            radicand: 3
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('8 It returns a simplified radical object ', function () {
        // Setup
        const input = -1
        const expected = {
            coefficient: 1,
            isImaginary: true,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('9 It returns a simplified radical object ', function () {
        // Setup
        const input = -4
        const expected = {
            coefficient: 2,
            isImaginary: true,
            degree: 1,
            radicand: 1
        }

        // Exercise
        const result = simplifyRadical(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
})
