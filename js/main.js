//! селекторы JQuery
// !селектор по ID

// let elemById = $('#title');
// console.log(elemById);

//! селектор по классу
// let elemsByClassName = $('.list');
// console.log(elemsByClassName);

//! селектор по тегу
// let elemsByTagName = $('li');
// console.log(elemsByTagName);
//! селектор по атрибуту
// let elem = $('[name='value']')

// console.log(typeof elemById, typeof elemsByClassName);

// elemById.css('color','red');
// elemsByClassName.css('color','green');

// for(let i=0; i < elemsByTagName.length; i++){
//     elemsByTagName[i].innerText = `item ${i + 1}`
// }

// elemById.addClass('addedClass');
// elemById.removeClass('addedClass')
// elemById.toggleClass('addedClass')
// console.log(elemById.hasClass('addedClass'));

// console.log(getComputedStyle(elemById[0]));

// console.log(elemById.width());
// console.log(elemById.height());

// let inp = $('input');
// // inp.val('Hello')
// inp.attr('value','changed value!')
// inp.attr('disabled','true')

// let img = $('img');
// img.hide();
// img.show();

// img.toggle()
// img.toggle()

// img.fadeOut('slow');
// img.fadeIn('slow');
// img.slideUp(1000);
// img.slideDown(1000)

// setTimeout(() =>{
//     console.log("hello setTimeOut");
// },2000)

// setInterval(()=>{
//     console.log("hello");
// },1000)

// setTimeout(()=>{
//     img.css('transition','all 3s ease')
//     img.css("opacity",'0%');
// },1000)

// setTimeout(()=>{
//     img.css('transition','all 3s ease')
//     img.css("opacity",'100%');
// },4000)

// elemsByTagName.each((index,item) => {
//     console.log(item);
//     item.innerText = `item ${index + 1}`
// })


// img.removeAttr('src');
// img.attr('src','https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg')

// let container = $(".container")
// container.append('<h1>Append elem </h1>')
// container.prepend('<h1>Append elem </h1>')

// elemById.prependTo(container);
// elemById.append(container)

// elemById.before('<span> before</span>')
// elemById.after('<span> after</span>')
// elemById.remove()
// elemById.empty()

let students = [
    {
      name: "Kate",
      kpi: "100",
    },
    {
      name: "Marina",
      kpi: "100",
    },
    {
      name: "Alina",
      kpi: "10",
    },
    {
      name: "Dan",
      kpi: "100",
    },
    {
      name: "Jonh",
      kpi: "100",
    },
    {
      name: "Mark",
      kpi: "10",
    },
    {
      name: "Boris",
      kpi: "10",
    },
  ];

  let container = $('.container');
  for (let i of students){
      if(i.kpi > 50){

      }
  }
  console.log();