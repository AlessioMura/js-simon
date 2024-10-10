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

let count_down = setInterval(function () {
    if (timer <= 0) {
        clearInterval(count_down);
        document.getElementById('count_down').innerHTML = 'Type the numer you just saw.'
    } else {
        document.getElementById('count_down').innerHTML = timer;
    }
    timer -= 1;
}, 1000);


// delete random numbers and add input fields

setTimeout(nmbrs_n_input, 31000);

function nmbrs_n_input() {
    // random numbers
    document.getElementById('random_number_1').innerHTML = null;
    document.getElementById('random_number_2').innerHTML = null;
    document.getElementById('random_number_3').innerHTML = null;
    document.getElementById('random_number_4').innerHTML = null;
    document.getElementById('random_number_5').innerHTML = null;

    // input boxes
    document.getElementById("input_box_1").classList.remove("d-none");
    document.getElementById("input_box_2").classList.remove("d-none");
    document.getElementById("input_box_3").classList.remove("d-none");
    document.getElementById("input_box_4").classList.remove("d-none");
    document.getElementById("input_box_5").classList.remove("d-none");
}


// submit and results

let btn = document.getElementById('submit_btn');

btn.addEventListener('click', function () {

    // save value in array
    let num_array = [];

    let box_1 = document.getElementById("input_num_1").value;
    let box_2 = document.getElementById("input_num_2").value;
    let box_3 = document.getElementById("input_num_3").value;
    let box_4 = document.getElementById("input_num_4").value;
    let box_5 = document.getElementById("input_num_5").value;
    num_array.push(box_1);
    num_array.push(box_2);
    num_array.push(box_3);
    num_array.push(box_4);
    num_array.push(box_5);

    // show results
    for (let i = 0; i < num_array.length; i++) {
        let array_number = num_array[i];
        if (array_number == rndm_number_1) {
            document.getElementById('label_1').innerHTML = 'Correct!';
        } else if (array_number == rndm_number_2) {
            document.getElementById('label_2').innerHTML = 'Correct!';
        } else if (array_number == rndm_number_3) {
            document.getElementById('label_3').innerHTML = 'Correct!';
        } else if (array_number == rndm_number_4) {
            document.getElementById('label_4').innerHTML = 'Correct!';
        } else if (array_number == rndm_number_5) {
            document.getElementById('label_5').innerHTML = 'Correct!';
        }

    }
})
