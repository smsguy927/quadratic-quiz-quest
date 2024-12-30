// Simplify Radical Elements
import {parseQuadratic, simplifyRadical, solveQuadratic} from "./public/Math.js";
import {renderSimpRad} from "./public/FrontEnd/Renderer.js";

// Simplify Radical Elements
const simplifyRadicalInput = document.getElementById("toSimpRad");
const degreeInput = document.getElementById("degree");
const simplifyRadicalButton = document.getElementById('toSimpRadBtn')
const simplifyRadicalOutBox= document.getElementById('toSimpRadOutBox')
const simplifiedRadical = document.getElementById('simpRad')

// Solve Quadratic Elements
const solveQuadraticInput = document.getElementById("quadraticInput");
const solveQuadraticButton = document.getElementById('solveQuadraticBtn')
const quadraticOutput = document.getElementById('quadraticOutput')

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
    alert(quadratic)
    quadraticOutput.classList.remove('hidden')
    const quadraticParts = parseQuadratic(quadratic)


}
solveQuadraticButton.addEventListener("click", handleQuadratic)
