const simplifyRadical = (int, degree = 2) => {
    const result = {
        coefficient: 1,
        isImaginary: false,
        degree: degree,
        radicand: int
    }
    if (int === 0) {
        result.coefficient = 0
        result.radicand = 0
        result.degree = 1
    } else if (int < 0) {
        result.isImaginary = true
        int *= -1
    }
    let k = 2
    let divided
    let loop = true
    while (loop) {
        divided = false
        const kPow = k ** degree
        if (kPow > int) {
            result.radicand = int
            loop = false
            break
        }
        if ((int / kPow) % 1 === 0) {
            divided = true
            result.coefficient *= k
            int /= kPow
            k = 2
        } else {
            k++
        }
    }
    if (result.radicand === 1) {
        result.degree = 1
    }
    return result
}

function removeSpaces(str) {
    return str.replace(/\s+/g, "");
}

function isDigit(char) {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
}

function isAlpha(char) {
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
}

function advancePart(char) {
    return String.fromCharCode(char.charCodeAt(0) + 1)
}

const parseQuadratic = (equation) => {
    equation = removeSpaces(equation)
    const parts = {
        a: 1,
        b: 1,
        c: 1
    }
    let currentPart = 'a'
    let digitStart = 0
    let digitEnd = 0
    for (let i = 0; i < equation.length; i++) {
        if (equation[i] === '-') {
            parts[currentPart] *= -1
            digitStart = i + 1
            digitEnd = i + 1
        } else if (equation[i] === '+') {
            digitStart = i + 1
            digitEnd = i + 1
        } else if (isDigit(equation[i])) {
            digitEnd++
        } else {
            const digits = parseInt(equation.slice(digitStart, digitEnd))
            if(!isNaN(digits)){
                parts[currentPart] *= digits
            }

            if (currentPart === 'a') {
                i += 2
            }
            currentPart = advancePart(currentPart)
        }
    }
    parts[currentPart] *= parseInt(equation.slice(digitStart, digitEnd))
    return parts
}

const calcGreatestCommonFactor = (x, y) => {
    // Check if both x and y are of type number, if not, return false.
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        alert(`${x}, ${y}`)
        return false;
    }
    // Take the absolute values of x and y to ensure positivity.
    x = Math.abs(x);
    y = Math.abs(y);

    // Iterate using the Euclidean algorithm to find the GCD.
    while (y > 0) {
        // Store the value of y in a temporary variable t.
        const temp = y;
        // Calculate the remainder of x divided by y and assign it to y.
        y = x % y;
        // Assign the value of t (previous value of y) to x.
        x = temp;
    }
    // Return the GCD, which is stored in x after the loop.
    return x;
};
const reduceFraction = (numerator, denominator) => {
    const greatestCommonFactor = calcGreatestCommonFactor(numerator, denominator)
    return {top: numerator / greatestCommonFactor, bottom: denominator / greatestCommonFactor}
}

const divideRadical = (radical, divisor) => {
    const radCoef = radical.coefficient
    if (radCoef % divisor === 0) {
        radical.coefficient /= divisor
    } else {
        const reduced = reduceFraction(radical.radicand, divisor ** 2)
        if(reduced.bottom === 1){
            radical.radicand = reduced.top
        } else {
            radical.radicand = {
                top: reduced.top,
                bottom: reduced.bottom
            }
        }
    }
}

const addFractions = (left, right) => {
    const added = {top: left.top + right.top, bottom: left.bottom}
    return reduceFraction(added.top, added.bottom)
}

/**
 * Uses Quadratic Formula (https://en.wikipedia.org/wiki/Quadratic_formula)
 * Returns an object in the form {topLeft, topRight, bottom}
 * topLeft is -b , topRight is sqrt(-b**2 - 4ac), and
 * bottom is 2a.
 * Move the negative sign out of the denominator.
 * Another function is needed to format the output.
 */
const solveQuadratic = (parts) => {

    const solved = {
        topLeft: -parts.b,
        topRight: simplifyRadical((parts.b ** 2) - (4 * parts.a * parts.c), 2),
        bottom: 2 * parts.a
    }
    // Move the negative sign out of the denominator.
    if (solved.bottom < 0) {
        solved.topLeft *= -1
        solved.bottom *= -1
    }
    const reducedFractionLeft = reduceFraction(solved.topLeft, solved.bottom)
    const reducedBy = solved.bottom / reducedFractionLeft.bottom
    divideRadical(solved.topRight, reducedBy)
    solved.topLeft = reducedFractionLeft.top
    solved.bottom = reducedFractionLeft.bottom
    if(solved.topLeft === -0){
        solved.topLeft = 0
    }
    return solved
}

export {
    simplifyRadical,
    parseQuadratic,
    solveQuadratic,
    addFractions,
    reduceFraction
}