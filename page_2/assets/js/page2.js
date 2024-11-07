


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

// сортировка
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


// пагинация
const baseUrl = 'https://672b185d976a834dd02595f5.mockapi.io/cards';
const cardPerPage = 4;
let currentPage = 1;

function fetchCards() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(cards => {
            displayCards(cards)
        })
        .catch(error => {
            console.error("Ошибка при получении данных", error);
        })
}

function displayCards(cards){
    const cardList = document.querySelector('.second__card-list');
    cardList.innerHTML = '';
    
    cards.forEach(card => {
        const cardLi = document.createElement('li');
        cardLi.classList.add('second__card');

        const itemCard = document.createElement('img');
        itemCard.src = card.card;
        itemCard.alt = card.name;
        itemCard.classList.add('second__card-img');

        cardLi.appendChild(itemCard);
        cardList.appendChild(cardLi);

    })
}

fetchCards()




