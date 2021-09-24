const moadalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

moadalBtn.addEventListener('click',() =>{
    modal.classList.remove('hidden') //по клику убираем класс  hidden
})

//  modal__close
// закрытие модального окна вокруг
modal.addEventListener('click', (event) => {
    const target = event.target

    if(target.classList.contains('overlay') ||(target.classList.contains('modal__close') )) {
        modal.classList.remove('hidden') 
    }
})

