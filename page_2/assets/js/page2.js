


function search() {
    let input, filter, ul, li, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.second__card-list');
    li = ul.getElementsByTagName('li');

    // filter.includes(data.name)
    
    for (i = 0; i < li.length; i++) {
        if (li[i].id.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// // сортировка
// openList = document.querySelector('.second__functional-sort');
// sortOptions = document.querySelector('.second__functional-list');


// openList.onclick = function(){
//     if (sortOptions.style.display === "none"){
//         sortOptions.style.display = 'flex'
//     }
//     else{
//         sortOptions.style.display = 'none';
//     }
// }
// const firstCheckbox = document.querySelector('.second__functional-checkbox-1');
// const allCard = document.querySelectorAll('.second__card');  
// const FirstBlock = document.querySelector(".checkbox_show-1");
// const paginHide = document.querySelector('.second__pagination')

// firstCheckbox.addEventListener('change', function(){
//     if (firstCheckbox.checked){
//         allCard.forEach(function(card){
//             card.style.display = "none";
//             FirstBlock.style.display = "grid";
//             paginHide.style.display = "none";
//         })
//     }
//     else{
//         allCard.forEach(function(card){
//             card.style.display = "grid";
//             FirstBlock.style.display = "none"
//             paginHide.style.display = "flex";
//         })
//     }
// })

// const secondCheckbox = document.querySelector('.second__functional-checkbox-2'); 
// const secondBlock = document.querySelector(".checkbox_show-2");
// secondCheckbox.addEventListener('change', function(){
//     if (secondCheckbox.checked){
//         allCard.forEach(function(card){
//             card.style.display = "none";
//             secondBlock.style.display = "grid";
//             paginHide.style.display = "none";
//         })
//     }
//     else{
//         allCard.forEach(function(card){
//             card.style.display = "grid";
//             secondBlock.style.display = "none"
//             paginHide.style.display = "flex";
//         })
//     }
// })
// const thirdCheckbox = document.querySelector('.second__functional-checkbox-3'); 
// const thirdBlock = document.querySelector(".checkbox_show-3");
// thirdCheckbox.addEventListener('change', function(){
//     if (thirdCheckbox.checked){
//         allCard.forEach(function(card){
//             card.style.display = "none";
//             thirdBlock.style.display = "grid";
//             paginHide.style.display = "none";
//         })
//     }
//     else{
//         allCard.forEach(function(card){
//             card.style.display = "grid";
//             thirdBlock.style.display = "none"
//             paginHide.style.display = "flex";
//         })
//     }
// })


// пагинация
const baseUrl = 'https://672b185d976a834dd02595f5.mockapi.io/cards';
const itemsPerPage = 4;
let currentPage = 1;
let cards = [];  // Переменная для хранения всех карт

function fetchCards() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            cards = data;  // Сохраняем все карточки в переменную
            displayCards(currentPage);
            setupPagination();
            document.querySelector('.second__loader').style.display = 'none'
        })
        .catch(error => {
            console.error("Ошибка при получении данных", error);
        });
}

const secondContainer = document.getElementById('secondContainer')
const secondPagin = document.querySelector('.second__pagination-page')


function displayCards(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = cards.slice(startIndex, endIndex);

    secondPagin.innerHTML = '';  // Очищаем контейнер перед добавлением новых карточек
    
    const cardUl = document.createElement('ul');
    cardUl.classList.add('second__card-list');

    pageItems.forEach(card => {
        const cardLi = document.createElement('li');
        cardLi.classList.add('second__card');

        const itemCard = document.createElement('img');
        itemCard.src = card.card;
        itemCard.alt = card.name;
        itemCard.id = card.name
        itemCard.classList.add('second__card-img');

        cardLi.appendChild(itemCard);
        cardUl.appendChild(cardLi);
    });

    secondPagin.appendChild(cardUl);  // Добавляем новый список карточек в контейнер
}

function setupPagination() {
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const prevButton = document.querySelector('.second__pagination-prev');
    const nextButton = document.querySelector('.second__pagination-next');

    // Функции для переключения страниц
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards(currentPage);
        }
    };

    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayCards(currentPage);
        }
    };
}

fetchCards();




// сортировка

const openList = document.querySelector('.second__functional-sort');
const sortOptions = document.querySelector('.second__functional-list')

openList.onclick = function(){
    if (sortOptions.style.display === 'flex'){
        sortOptions.style.display = 'none';
    }
    else{
        sortOptions.style.display = 'flex'
    }
}

const cardList = document.querySelector('.second__card-list');
const firstCheckbox = document.getElementById('firstCheckbox');



