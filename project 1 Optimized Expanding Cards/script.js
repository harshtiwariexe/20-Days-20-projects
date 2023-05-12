const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click',function(){
        remove();
        card.classList.add('active')
    })

})
function remove(){
    cards.forEach(card => {
        card.classList.remove('active')
    })
}