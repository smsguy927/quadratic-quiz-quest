const renderSimpRad = simpRad => {
    const simpRadParts = []

    if(simpRad.coefficient > 1){
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.coefficient)
        simpRadParts.push('</mn>')

    }
    if(simpRad.isImaginary){
        simpRadParts.push('<mi>')
        simpRadParts.push('i')
        simpRadParts.push('</mi>')
    }
    if(simpRad.degree > 2){
        simpRadParts.push('<mroot>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.radicand)
        simpRadParts.push('</mn>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.degree)
        simpRadParts.push('</mn>')
        simpRadParts.push('</mroot>')
    }else if(simpRad.degree === 2){
        simpRadParts.push('<msqrt>')
        simpRadParts.push('<mn>')
        simpRadParts.push(simpRad.radicand)
        simpRadParts.push('</mn>')
        simpRadParts.push('</msqrt>')
    }

    return simpRadParts.join('')
}

export {renderSimpRad}