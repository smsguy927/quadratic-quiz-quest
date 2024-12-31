// Simplify Radical Elements
import {addFractions, parseQuadratic, simplifyRadical, solveQuadratic} from "./public/Math.js";
import {renderSimpRad, renderSolvedQuadratic} from "./public/FrontEnd/Renderer.js";

// Simplify Radical Elements
const simplifyRadicalInput = document.getElementById("toSimpRad");
const degreeInput = document.getElementById("degree");
const simplifyRadicalButton = document.getElementById('toSimpRadBtn')
const simplifyRadicalOutBox= document.getElementById('toSimpRadOutBox')
const simplifiedRadical = document.getElementById('simpRad')
const quadraticMathMl = document.getElementById('quadratic')

// Solve Quadratic Elements
const solveQuadraticInput = document.getElementById("quadraticInput");
const solveQuadraticButton = document.getElementById('solveQuadraticBtn')
const quadraticOutBox = document.getElementById('quadraticOutBox')

// Simplify Radical Event Handlers
const handleSimplifyRadical = () => {
    const numberValue = parseInt(simplifyRadicalInput.value)
    if(isNaN(numberValue)){
        alert(`Please enter a number`)
        return;
    }
    const degreeValue = parseInt(degreeInput.value)
    const simpRadResult= simplifyRadical(numberValue, degreeValue)
    simplifyRadicalOutBox.classList.remove('hidden')
    simplifiedRadical.innerHTML = renderSimpRad(simpRadResult)
}
simplifyRadicalButton.addEventListener("click", handleSimplifyRadical)

// Solve Quadratic Event Handlers
const handleQuadratic = () => {
    const quadratic = solveQuadraticInput.value
    quadraticOutBox.classList.remove('hidden')
    const quadraticParts = parseQuadratic(quadratic)
    const solvedQuadratic = solveQuadratic(quadraticParts)
    if(solvedQuadratic.topRight.radicand === 1 && !solvedQuadratic.topRight.isImaginary){
        const minusFraction =  addFractions({top:solvedQuadratic.topLeft, bottom: solvedQuadratic.bottom}, {top: -solvedQuadratic.topRight.coefficient, bottom: solvedQuadratic.bottom})
        const plusFraction =  addFractions({top:solvedQuadratic.topLeft, bottom: solvedQuadratic.bottom}, {top: solvedQuadratic.topRight.coefficient, bottom: solvedQuadratic.bottom})
        solvedQuadratic.minus = minusFraction
        solvedQuadratic.plus = plusFraction
    }
    quadraticMathMl.innerHTML = renderSolvedQuadratic(solvedQuadratic)

}
solveQuadraticButton.addEventListener("click", handleQuadratic)
