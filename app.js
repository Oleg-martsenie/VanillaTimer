let second = 00;
let tens = 00;
let appensTens = document.querySelector('#tens')
let appensSecond = document.querySelector('#seconds')
let buttonStart = document.querySelector('#button-start');
let buttonStop = document.querySelector('#button-stop');
let buttonReset = document.querySelector('#button-reset');
let interval; //to store timer values

// function start

function startBtn() {
    tens++;

    if(tens < 9){
        appensTens.innerHTML = '0' + tens;
    }
    if(tens > 9) {
        appensTens.innerHTML = tens;
    }
    if(tens > 99) {
        second ++;
        appensSecond.innerHTML = '0' + second;
        tens = 0;
        appensTens.innerHTML = '0' + 0;
    }
    if(second > 9) {
        appensSecond.innerHTML = second;
    }
}

buttonStart.onclick = function() {
    interval = setInterval(startBtn)
};

buttonStop.onclick = function() {
    clearInterval(interval)
};

buttonReset.onclick = function() {
    clearInterval(interval);
    tens = '00';
    second = '00';
    appensSecond.innerHTML = second;
    appensTens.innerHTML = tens;
};