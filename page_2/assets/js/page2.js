// Функция поиска
function search() {
    let input, filter, ul, li, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.second__card-list');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        const cardName = li[i].querySelector('img').alt.toUpperCase(); // Получаем имя из атрибута alt
        if (cardName.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// OPEN BURGER MENU
const burgerOpenMenu = document.querySelector('.header__burger');
const burgerMenu = document.getElementById('modal_burger');
const burgerCloseMenu = document.getElementById('burger_close');

burgerOpenMenu.onclick = function() {
    burgerMenu.style.display = 'flex';
    burgerOpenMenu.style.display = 'none';
};

burgerCloseMenu.onclick = function() {
    burgerMenu.style.display = 'none';
    burgerOpenMenu.style.display = 'flex';
};


function byName(cardName) {
    return (a, b) => a[cardName].localeCompare(b[cardName]);
}
function byID(CardID){
    return (a,b) => a[cardID] > b[CardID] ? 1: -1;
}
function ByPopularity(cardPopopularity) {
    return (a, b) => a[cardPopopularity] > b[cardPopopularity] ? 1 : -1;
}

function byNameReverse(cardNameReverse){
    return (a,b) => b[cardNameReverse] - a[cardNameReverse] ? 1 : -1;
}

const firstSortingDiv = document.querySelector('.second__functional-sorting_1');
const firstSortingClose = document.querySelector('.second__functional-sorting_close1');

firstSortingDiv.onclick = function() {
    if (firstSortingClose.style.display === "block") {
        secondSortingDiv.style.display = 'flex';
        thirdSortingDiv.style.display = 'flex';
        firstSortingClose.style.display = 'none';
        cards.sort(byName('id'));
        displayCards(currentPage);
    } else {
        firstSortingClose.style.display = 'block';
        secondSortingDiv.style.display = 'none';
        thirdSortingDiv.style.display = 'none';
        cards.sort(ByPopularity('popularity'));
        displayCards(currentPage);
    }
}


const secondSortingDiv = document.querySelector('.second__functional-sorting_2')
const secondSortingClose = document.querySelector('.second__functional-sorting_close2');

secondSortingDiv.onclick = function(){
    if (secondSortingClose.style.display === "block"){
        firstSortingDiv.style.display = 'flex'
        thirdSortingDiv.style.display = 'flex'
        secondSortingClose.style.display = 'none';
        cards.sort(byName('id'));
        displayCards(currentPage);
    }
    else{
        secondSortingClose.style.display = 'block';
        firstSortingDiv.style.display = 'none';
        thirdSortingDiv.style.display = 'none';
        cards.sort(byName('name'));
        displayCards(currentPage);
        console.log(cards)
    }
}  

const thirdSortingDiv = document.querySelector('.second__functional-sorting_3')
const thirdSortingClose = document.querySelector('.second__functional-sorting_close3');

thirdSortingDiv.onclick = function(){
    if (thirdSortingClose.style.display === "block"){
        secondSortingDiv.style.display = 'flex'
        firstSortingDiv.style.display = 'flex'
        thirdSortingClose.style.display = 'none';
        cards.sort(byName('id'));
        displayCards(currentPage);
    }
    else{
        thirdSortingClose.style.display = "block";
        secondSortingDiv.style.display = 'none';
        firstSortingDiv.style.display = 'none'
        cards.sort(byNameReverse('name'));
        displayCards(currentPage);
    }
}   

// пагинация
const baseUrl = 'https://672b185d976a834dd02595f5.mockapi.io/cards';
const itemsPerPage = 4;
let currentPage = 1;
let cards = [];     

function fetchCards() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            cards = data; // карточки в переменную
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

    secondPagin.innerHTML = '';
    
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


sightArr = [1,3,10,11]
entertainmentArr = [2,3,4,12]
parkArr = [5,6,8,9]

// сортировка

const openList = document.querySelector('.second__functional-sort');
const sortOptions = document.querySelector('.second__functional-list')

openList.onclick = function(){
    if (sortOptions.style.display === 'flex'){
        sortOptions.style.display = 'none';
        sorting.style.display = 'flex'
    }
    else{
        sortOptions.style.display = 'flex';
    }
}






const cardList = document.querySelector('.second__card-list');
const firstCheckbox = document.getElementById('firstCheckbox');

firstCheckbox.addEventListener('change', function() {
    if (firstCheckbox.checked) {
        console.log('Чекбокс выбран');
        cards.forEach(card => {
            if (sightArr.includes(cards.id)) {
                console.log(cards.id);
            }
        });
    }
});


let checkboxes = document.querySelectorAll('.second__functional-checkbox')

cards.sort(byName('name'));
console.log(cards);

function checkCheckboxes(){

    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked){
            checkedCount++;
        }
    });

    displayCards(currentPage);

}
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkCheckboxes);
});
checkCheckboxes()


