// gen random numbers

let rndm_number_1 = Math.floor(Math.random() * 100 + 1);
let rndm_number_2 = Math.floor(Math.random() * 100 + 1);
let rndm_number_3 = Math.floor(Math.random() * 100 + 1);
let rndm_number_4 = Math.floor(Math.random() * 100 + 1);
let rndm_number_5 = Math.floor(Math.random() * 100 + 1);


document.getElementById('random_number_1').innerHTML = rndm_number_1;
document.getElementById('random_number_2').innerHTML = rndm_number_2;
document.getElementById('random_number_3').innerHTML = rndm_number_3;
document.getElementById('random_number_4').innerHTML = rndm_number_4;
document.getElementById('random_number_5').innerHTML = rndm_number_5;

// countdown

let timer = 30;

let count_down = setInterval(function() {
    if (timer <= 0) {
        clearInterval(count_down);
        document.getElementById('count_down').innerHTML = 'Write the numer you just saw.'
    } else {
        document.getElementById('count_down').innerHTML = timer;
    }
    timer -= 1;
}, 1000);