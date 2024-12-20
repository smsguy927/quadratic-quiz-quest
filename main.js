// Simplify Radical Elements
import {simplifyRadical} from "./public/Math.js";
import {renderSimpRad} from "./public/FrontEnd/Renderer.js";

const simplifyRadicalInput = document.getElementById("toSimpRad");
const degreeInput = document.getElementById("degree");
const simplifyRadicalButton = document.getElementById('toSimpRadBtn')
const simplifyRadicalOutBox= document.getElementById('toSimpRadOutBox')
const simplifiedRadical = document.getElementById('simpRad')
// Solve Quadratic Elements
/*
const wordsConvertInput = document.getElementById("toWords");
const wordsConvertButton = document.getElementById('toWordsConvertBtn')
const wordsOutput = document.getElementById('toWordsOutput')
*/
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

/*
// Words Converter Event Handlers
const handleWordsConvert = (e) => {
    const numberInput = wordsConvertInput.value
    wordsOutput.classList.remove('hidden')
    wordsOutput.innerText = toWords(numberInput)
}
wordsConvertButton.addEventListener("click", handleWordsConvert)
*/
