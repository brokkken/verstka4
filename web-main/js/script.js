// let age=17;
// // if (age >=16) {
// //     console.log ('доступ разрешен')
// // } else if () {

// // }
// // else {
// //     console.log ('доступ запрещен')
// // }
// // if (age == 14) {
// //     console.log('Персик, дозревай')
// // } else if (age== 16) {
// //     console.log('Доступ разрешен')
// // } else if (age <14) {
// //     console.log('Недозрел')
// // } else {
// //     console.log('Доступ ращрешен')
// // }
// let age1 = 15,
//     age2 = 18
// if (age1 >= 18 && age2 >= 19) {
//   console.log('Вы прошли вместе с другом')
// } else {
//     alert('Кто то из вас дозоревает')
// }
 let block  = document.querySelector('.aboutUs .aboutUsBlock .info-block .block');
 console.log(block)
 let h2 = document.querySelector('.aboutUs .aboutUsBlock h2')
//  h2.style.fontSize = '50px';
//  h2.style.background = 'red'
//  h2.stule.paddingTop = '30px'
// h2.classList.add('error')
let news = $('.news .newsBlock .info-block .block1')
// console.log(news)
// news.css({'background-color':'red',
//     'padding':'50px'
// })
// news.addClass('error')
$('.news .newsBlock .info-block .block1 .btnEditColor').on ('click', function() {
    news.toggleClass('error')
    editText();
})
function editText(){
    let btnText = $('.news .newsBlock .info-block .block1 .btnEditColor');
    if(btnText.val()== 'Замена текста'){
        btnText.val('ПАДЖ')
    } else{
        btnText.val('Замена текста')
    }
}