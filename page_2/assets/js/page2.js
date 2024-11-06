function search() {
    let input, filter, ul, li, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("card_list");
    li = ul.getElementsByTagName('li');
    
    for (i = 0; i < li.length; i++) {
        if (li[i].id.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
openList = document.querySelector('.second__functional-sort');
sortOptions = document.querySelector('.second__functional-list');


openList.onclick = function(){
    if (sortOptions.style.display === "none"){
        sortOptions.style.display = 'flex'
    }
    else{
        sortOptions.style.display = 'none';
    }
}

const firstCheckbox = document.querySelector('.second__functional-checkbox-1');
const allCard = document.querySelectorAll('.second__card');  
const FirstBlock = document.querySelector(".checkbox_show-1");
const paginHide = document.querySelector('.second__pagination')

firstCheckbox.addEventListener('change', function(){
    if (firstCheckbox.checked){
        allCard.forEach(function(card){
            card.style.display = "none";
            FirstBlock.style.display = "grid";
            paginHide.style.display = "none";
        })
    }
    else{
        allCard.forEach(function(card){
            card.style.display = "grid";
            FirstBlock.style.display = "none"
            paginHide.style.display = "flex";
        })
    }
})

const secondCheckbox = document.querySelector('.second__functional-checkbox-2'); 
const secondBlock = document.querySelector(".checkbox_show-2");
secondCheckbox.addEventListener('change', function(){
    if (secondCheckbox.checked){
        allCard.forEach(function(card){
            card.style.display = "none";
            secondBlock.style.display = "grid";
            paginHide.style.display = "none";
        })
    }
    else{
        allCard.forEach(function(card){
            card.style.display = "grid";
            secondBlock.style.display = "none"
            paginHide.style.display = "flex";
        })
    }
})
const thirdCheckbox = document.querySelector('.second__functional-checkbox-3'); 
const thirdBlock = document.querySelector(".checkbox_show-3");
thirdCheckbox.addEventListener('change', function(){
    if (thirdCheckbox.checked){
        allCard.forEach(function(card){
            card.style.display = "none";
            thirdBlock.style.display = "grid";
            paginHide.style.display = "none";
        })
    }
    else{
        allCard.forEach(function(card){
            card.style.display = "grid";
            thirdBlock.style.display = "none"
            paginHide.style.display = "flex";
        })
    }
})



const firstPage = document.querySelector('.second__pageone')
const secondPage = document.querySelector('.second__pagetwo')
const clickOne = document.querySelector('.second__pagination-link-1')
const clickTwo = document.querySelector('.second__pagination-link-2')

clickTwo.onclick = function(){
    firstPage.style.display = "none"
    secondPage.style.display = "grid"
}
clickOne.onclick = function(){
    secondPage.style.display = "none"
    firstPage.style.display = "grid"
}


// const sortOpen = document.querySelector('.second__sort');
// const sortOption = document.querySelector('.second__checkbox-list');
// sortOpen.onclick = function(){
//     if (sortOption.style.display === "none"){
//         sortOption.style.display = "flex"
//     }
//     else{
//         sortOption.style.display = "none"
//     }
// }


// const checkboxOne = document.querySelector('.second__checkbox-one');
// const forCheckboxOne = document.querySelectorAll('.card_checkbox1');


// checkboxOne.addEventListener('change', function(){
//     if (checkboxOne.checked){
//         allCard.forEach(function(card){
//             card.style.display = "none";
//             open1.style.display = "block"
//         })
//     }
//     else{
//         allCard.forEach(function(card){
//             card.style.display = 'block'
//         })
//     }
// })















// checkboxOne.addEventListener('change', function() {
//     if (checkboxOne.checked) {
//         allCard.forEach(function(card) {
//             card.style.display = "none";
//         });
//     } else {
//         allCard.forEach(function(card) {
//             card.style.display = "block"; 
//         });
//     }
// });

