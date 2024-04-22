// blog button
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})

// card 1 button
document.getElementById('btn-card1').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-1-input-1');
    const cardInput2 = getInputValue('card-1-input-2');

    if (isNaN(cardInput1) || isNaN(cardInput2)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0 || cardInput2 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (0.5 * cardInput1 * cardInput2).toFixed(2);
        showResult('triangel-result', cardResult);
    }
})

// card 2 button
document.getElementById('btn-card2').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-2-input-1');
    const cardInput2 = getInputValue('card-2-input-2');

    if (isNaN(cardInput1) || isNaN(cardInput2)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0 || cardInput2 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (cardInput1 * cardInput2).toFixed(2);
        showResult('ractangle-result', cardResult);
    }
})

// card 3 button
document.getElementById('btn-card3').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-3-input-1');
    const cardInput2 = getInputValue('card-3-input-2');

    if (isNaN(cardInput1) || isNaN(cardInput2)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0 || cardInput2 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (cardInput1 * cardInput2).toFixed(2);
        showResult('parallelogram-result', cardResult);
    }
})

// card 4 button
document.getElementById('btn-card4').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-4-input-1');
    const cardInput2 = getInputValue('card-4-input-2');

    if (isNaN(cardInput1) || isNaN(cardInput2)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0 || cardInput2 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (0.5 * cardInput1 * cardInput2).toFixed(2);
        showResult('rhombus-result', cardResult);
    }
})

// card 5 button
document.getElementById('btn-card5').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-5-input-1');
    const cardInput2 = getInputValue('card-5-input-2');

    if (isNaN(cardInput1) || isNaN(cardInput2)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0 || cardInput2 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (0.5 * cardInput1 * cardInput2).toFixed(2);
        showResult('pentagon-result', cardResult);
    }
})

// card 6 button
document.getElementById('btn-card6').addEventListener('click', function () {
    const cardInput1 = getInputValue('card-6-input-1');

    if (isNaN(cardInput1)) {
        alert('Please input two number!');
    }
    else if (cardInput1 <= 0) {
        alert('Please input number greatter than zero!');
    }
    else {
        // calculation formula
        const cardResult = (3.1416 * cardInput1 * cardInput1).toFixed(2);
        showResult('ellipse-result', cardResult);
    }
})

//----------------------------------------------------------------------------------------------
// extra try to random background color change

// function randomNumber() {
//     return Math.floor(Math.random() * 255);
// }
// function rgbColor() {
//     const r = randomNumber();
//     const g = randomNumber();
//     const b = randomNumber();
//     const color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.5 + ')';
//     return color;
// }
// function changeBackground() {
//     this.style.backgroundColor = color;
// }
// function resetBackground() {
//     this.style.backgroundColor = '';
// }
// const cards = document.getElementsByClassName('card');
// cards.addEventListener('mouseover', changeBackground);
// cards.addEventListener('mouseout', resetBackground);

//------------------------------------------------------------------------------------------
// extra try to create element on Area Calculation field

// const areaResults = document.getElementById('area-results');
        // const div = document.createElement('div');
        // div.classList.add('flex justify-between my-2 items-center');
        // areaResults.appendChild(div);

        // const resultsArray = areaResults.children;
        // const numberOfResult = resultsArray.length;
        // const number = createElement('p');
        // number.innerText = numberOfResult + '.';
        // div.appendChild(number);

        // const name = createElement('p');
        // name.innerText = getInnerText('triangle');
        // div.appendChild(name);

        // const result = createElement('p');
        // result.innerText = card1Result.toFixed(2);
        // div.appendChild(result);

        // const unit = createElement('span');
        // const sup = createElement('sup');
        // sup.innerText = '2';
        // unit.innerText = 'cm'+ sup;
        // div.appendChild(unit);

        // const btnText = createElement('p');
        // const sup2 = createElement('sup');
        // sup2.innerText = '2';
        // btnText.innerText = 'Convert to m' + sup;
        
        // const btn = createElement('button');
        // btn.innerText = btnText;
        // btn.classList.add('p-2 bg-sky-600 text-white rounded');
        // div.appendChild(btn);