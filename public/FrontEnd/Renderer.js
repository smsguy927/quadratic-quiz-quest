const renderSimpRad = simpRad => {
    const simpRadParts = []

    if (simpRad.coefficient > 1) {
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.coefficient)
        simpRadParts.push('</mn>')

    }
    if (simpRad.isImaginary) {
        simpRadParts.push('<mi>')
        simpRadParts.push('i')
        simpRadParts.push('</mi>')
    }
    if (simpRad.degree > 2) {
        simpRadParts.push('<mroot>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.radicand)
        simpRadParts.push('</mn>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.degree)
        simpRadParts.push('</mn>')
        simpRadParts.push('</mroot>')
    } else if (simpRad.degree === 2) {
        simpRadParts.push('<msqrt>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.radicand)
        simpRadParts.push('</mn>')
        simpRadParts.push('</msqrt>')
    }

    return simpRadParts.join('')
}

const renderSolvedQuadratic = solvedQuadratic => {
    const PLUS_MINUS = '±'
    const htmlParts = []
    htmlParts.push('<mi>')
    htmlParts.push('x')
    htmlParts.push('</mi>')
    htmlParts.push('<mo>')
    htmlParts.push('=')
    htmlParts.push('</mo>')
    if (solvedQuadratic.hasOwnProperty('minus')) {
        if (solvedQuadratic.minus.bottom > 1) {
            htmlParts.push('<mfrac>')
            htmlParts.push('<mrow>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.minus.top)
            htmlParts.push('</mn>')
            htmlParts.push('</mrow>')
            htmlParts.push('<mrow>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.minus.bottom)
            htmlParts.push('</mn>')
            htmlParts.push('</mrow>')
            htmlParts.push('</mfrac>')
        } else {
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.minus.top)
            htmlParts.push('</mn>')
        }
        htmlParts.push('<mphantom>')
        htmlParts.push('<mi>')
        htmlParts.push('x')
        htmlParts.push('</mi>')
        htmlParts.push('</mphantom>')
        htmlParts.push('<mtext>')
        htmlParts.push('and')
        htmlParts.push('</mtext>')
        htmlParts.push('<mphantom>')
        htmlParts.push('<mi>')
        htmlParts.push('x')
        htmlParts.push('</mi>')
        htmlParts.push('</mphantom>')


        if (solvedQuadratic.plus.bottom > 1) {
            htmlParts.push('<mfrac>')
            htmlParts.push('<mrow>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.plus.top)
            htmlParts.push('</mn>')
            htmlParts.push('</mrow>')
            htmlParts.push('<mrow>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.plus.bottom)
            htmlParts.push('</mn>')
            htmlParts.push('</mrow>')
            htmlParts.push('</mfrac>')
        } else {
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.plus.top)
            htmlParts.push('</mn>')
        }
    } else {
        if (solvedQuadratic.bottom > 1) {
            htmlParts.push('<mfrac>')
            htmlParts.push('<mrow>')
        }
        if (solvedQuadratic.topLeft !== 0) {
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.topLeft)
            htmlParts.push('</mn>')
        }
        if (solvedQuadratic.topRight.coefficient !== 0) {
            htmlParts.push('<mo>')
            htmlParts.push(PLUS_MINUS)
            htmlParts.push('</mo>')
        }
        if (solvedQuadratic.topRight.coefficient > 1) {
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.topRight.coefficient)
            htmlParts.push('</mn>')
        }
        if (solvedQuadratic.topRight.isImaginary) {
            htmlParts.push('<mi>')
            htmlParts.push('i')
            htmlParts.push('</mi>')
        }
        if (solvedQuadratic.topRight.radicand > 1) {
            htmlParts.push('<msqrt>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.topRight.radicand)
            htmlParts.push('</mn>')
            htmlParts.push('</msqrt>')
        }
        if (solvedQuadratic.bottom > 1) {
            htmlParts.push('</mrow>')
            htmlParts.push('<mn>')
            htmlParts.push(solvedQuadratic.bottom)
            htmlParts.push('</mn>')
            htmlParts.push('</mfrac>')
        }
    }
    return htmlParts.join('')
}
export {renderSimpRad, renderSolvedQuadratic}