import { $ } from '/dom.js';
import { isValidNumeric } from '/validators.js';

//DOM elements for results
let abs = $('#abs');
let round = $('#round');
let ceiling = $('#ceiling');
let floor = $('#floor');
let square = $('#square');
let squareRoot = $('#squareRoot');
let power = $('#power');
let root = $('#root');
let sine = $('#sine');
let cos = $('#cos');
let tan = $('#tan');

let maxNumber = $('#maxNumber');
let minNumber = $('#minNumber');
let randomNumber = $('#randNumber');

//DOM Query for Form
const mathForm = $('#myMathForm');
mathForm.addEventListener('submit', function(e)
{
    e.preventDefault();
    let rand = Math.floor(Math.random() * 101);
    randomNumber.innerHTML = rand;

    let absInput = this.elements.txtAbs.value;
    if(isValidNumeric(absInput))
    {
        abs.textContent = Math.abs(absInput);
    }

    let roundInput = this.elements.txtRound.value;
    if(isValidNumeric(roundInput))
    {
        round.textContent = Math.round(roundInput);
    }

    let ceilingInput = this.elements.txtRound.value;
    if(isValidNumeric(ceilingInput))
    {
        ceil.textContent = Math.ceil(roundInput);
    }

    let floorInput = this.elements.txtRound.value;
    if(isValidNumeric(floorInput))
    {
        floor.textContent = floor.round(roundInput);
    }

    let squareInput = this.elements.txtRound.value;
    if(isValidNumeric(squareInput))
    {
        sqrt.textContent = Math.sqrt(roundInput);
    }

    let squareRootInput = this.elements.txtRound.value;
    if(isValidNumeric(squareRootInput))
    {
        sqrt.textContent = Math.sqrt(roundInput);
    }

    let powerInput = this.elements.txtRound.value;
    if(isValidNumeric(powerInput))
    {
        pow.textContent = Math.pow(roundInput);
    }

    let rootInput = this.elements.txtRound.value;
    if(isValidNumeric(rootInput))
    {
        SQRT.textContent = Math.SQRT(roundInput);
    }

    let sineInput = this.elements.txtRound.value;
    if(isValidNumeric(sineInput))
    {
        sin.textContent = Math.sin(roundInput);
    }

    let cosInput = this.elements.txtRound.value;
    if(isValidNumeric(cosInput))
    {
        cos.textContent = Math.cos(roundInput);
    }
    
    let tanInput = this.elements.txtRound.value;
    if(isValidNumeric(tanInput))
    {
        tan.textContent = Math.tan(roundInput);
    }
});