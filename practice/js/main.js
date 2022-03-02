// let title = $('h1');
// let welcome = $(".welcome");
// let titleById = $('#title');
// let inp = $('[name="inp-name"]');

// console.log(title, welcome, titleById,inp);

// title.css('color', 'red');
// welcome.css('background-color','pink');

// titleById.append('GGGG');
// titleById.prepend('GGGG');

// title.prependTo('titleById');

// $('.center').before('<h3 class="new">New element</h3>');
// $('.center').after('<h2 class="new">New element</h2>');

// let result = confirm('Are you 18 y.o.?');
// if (result){
//     $('h3').css('display', 'block')
// }

// $('body').html('Hello')


//! Calculator
function sum(){
    let num1 = +prompt('first number:');
    let num2 = +prompt('second number:');
    let result = num1 + num2;
    $('body').html(`<h1>${result}</h1>`);
};

function sub(){
    let num1 = +prompt('first number:');
    let num2 = +prompt('second number:');
    let result = num1 - num2;
    $('body').html(`<h1>${result}</h1>`);
};

function mul(){
    let num1 = +prompt('first number:');
    let num2 = +prompt('second number:');
    let result = num1 * num2;
    $('body').html(`<h1>${result}</h1>`);
};

function div(){
    let num1 = +prompt('first number:');
    let num2 = +prompt('second number:');
    let result = num1 / num2;
    $('body').html(`<h1>${result}</h1>`);
};