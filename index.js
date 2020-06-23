const ranges = document.querySelectorAll('.range_inputs'), 
    numbers = document.querySelectorAll('.num_inputs');

function change_color(inputs) {
    const [{value:red}, {value:green}, {value:blue}] = inputs
    const canvas = document.getElementById('colour');
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.fillRect(0, 0, 200, 200);
}


for (let i = 0; i < ranges.length; ++i){
    // Syncronizing inputs
    numbers[i].addEventListener('input', ({target}) => {
        ranges[i].value = target.value;
        change_color(numbers);
    });
    ranges[i].addEventListener('input', ({target}) => {
        numbers[i].value = target.value;
        change_color(numbers);
    });
};