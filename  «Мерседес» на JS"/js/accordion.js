//querySelectorAll - по всей верстке
// querySelector - первый элемент 
// console.dir(btn);  - элемент  виде объекта

//addEventListener   - событие которое отловить

const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');



/// btn.addEventListener('click', () => console.log('1'))

// console.log(btns.length); - длина массива

/// console.log(btns[1]); // - отдельный элемент 



/* // первый вариант перебор массива 

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', () => console.log(btns[i]))
        }
*/

// 2 ПЕРЕБОР - метод forEach именно для такого пербоора 

        //переворачиваем стрелочки при нажатии на кнопку
btns.forEach((btnItem,index) => {
    btnItem.addEventListener('click', () => { 
        btns.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active')
    })
         btnItem.classList.add('feature__link_active')

         lists.forEach((listItem)=> {
             listItem.classList.add('hidden')
         })

         lists[index].classList.remove('hidden')

    })
})

