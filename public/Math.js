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
    if(result.radicand === 1){
        result.degree = 1
    }
    return result
}

export {
    simplifyRadical
}