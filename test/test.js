import * as assert from "node:assert";
import {simplifyRadical, parseQuadratic, solveQuadratic} from "../public/Math.js";

describe("simplifyRadical", function () {
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
        const input = [8, 3]
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
        const input = [27, 3]
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
        const input = [16, 3]
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
describe('parseQuadratic()', function () {
    it('0 It returns a parsed quadratic object ', function () {
        // Setup
        const input = '12x^2+34x+56'
        const expected = {
            a: 12,
            b: 34,
            c: 56
        }

        // Exercise
        const result = parseQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('1 It returns a parsed quadratic object ', function () {
        // Setup
        const input = '123x^2+345x+567'
        const expected = {
            a: 123,
            b: 345,
            c: 567
        }

        // Exercise
        const result = parseQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('1 It returns a parsed quadratic object ', function () {
        // Setup
        const input = '-1x^2+0x+0'
        const expected = {
            a: -1,
            b: 0,
            c: 0
        }

        // Exercise
        const result = parseQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })

})
describe('solveQuadratic()', function () {
    it('0 It returns solved quadratic', function () {
        // Setup
        const input = {a: 1, b: 2, c: 3}
        const expected = {
            topLeft: -1,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: 2},
            bottom: 1
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('1 It returns solved quadratic', function () {
        // Setup
        const input = {a: -1, b: 10, c: 10}
        const expected = {
            topLeft: 5,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 35},
            bottom: 1
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('2 It returns solved quadratic', function () {
        // Setup
        const input = {a: -2, b: -7, c: 2}
        const expected = {
            topLeft: -7,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 65},
            bottom: 4
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('3 It returns solved quadratic', function () {
        // Setup
        const input = {a: -2, b: 1, c: 7}
        const expected = {
            topLeft: 1,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 57},
            bottom: 4
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('4 It returns solved quadratic', function () {
        // Setup
        const input = {a: -1, b: 8, c: 4}
        const expected = {
            topLeft: 4,
            topRight: {coefficient: 2, isImaginary: false, degree: 2, radicand: 5},
            bottom: 1
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('5 It returns solved quadratic', function () {
        // Setup
        const input = {a: -3, b: -4, c: -10}
        const expected = {
            topLeft: -2,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: 26},
            bottom: 3
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('6 It returns solved quadratic', function () {
        // Setup
        const input = {a: -2, b: -5, c: 9}
        const expected = {
            topLeft: -5,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 97},
            bottom: 4
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('7 It returns solved quadratic', function () {
        // Setup
        const input = {a: -6, b: -10, c: -2}
        const expected = {
            topLeft: -5,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 13},
            bottom: 6
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('8 It returns solved quadratic', function () {
        // Setup
        const input = {a: -3, b: -3, c: -10}
        const expected = {
            topLeft: -1,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: {top:37, bottom:3}},
            bottom: 2
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('9 It returns solved quadratic', function () {
        // Setup
        const input = {a: -6, b: -9, c: 2}
        const expected = {
            topLeft: -3,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: {top:43, bottom:3}},
            bottom: 4
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('10 It returns solved quadratic', function () {
        // Setup
        const input = {a: 9, b: -1, c: 3}
        const expected = {
            topLeft: 1,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: 107},
            bottom: 18
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('11 It returns solved quadratic', function () {
        // Setup
        const input = {a: -4, b: -10, c: -10}
        const expected = {
            topLeft: -5,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: 15},
            bottom: 4
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('12 It returns solved quadratic', function () {
        // Setup
        const input = {a: -13, b: 14, c: -40}
        const expected = {
            topLeft: 7,
            topRight: {coefficient: 1, isImaginary: true, degree: 2, radicand: 471},
            bottom: 13
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('13 It returns solved quadratic', function () {
        // Setup
        const input = {a: -13, b: 14, c: 40}
        const expected = {
            topLeft: 7,
            topRight: {coefficient: 1, isImaginary: false, degree: 2, radicand: 569},
            bottom: 13
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })
    it('14 It returns solved quadratic', function () {
        // Setup
        const input = {a: -7, b: -2, c: 9}
        const expected = {
            topLeft: -1,
            topRight: {coefficient: 8, isImaginary: false, degree: 1, radicand: 1},
            bottom: 7
        }

        // Exercise
        const result = solveQuadratic(input);

        // Verify
        assert.deepStrictEqual(result, expected);
    })


})