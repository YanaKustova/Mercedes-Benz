const form = document.querySelector('.form-test-drive')


//https://jsonplaceholder.typicode.com  - чтобы отправлять данные формы 


form.addEventListener('submit', (event)=> {
    event.preventDefault() //перезагрузка прекратится, форма останется заполненной 
    
    let data = {}


    for (let {name, value} of form.elements){
  
        if(name){
            data[name] = value
        }
    }
    //сделает запрос с адресом   then - обрабатывает данные, когда они полностью дойдут
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status === 200 || response.status === 201) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data => {
        alert('Данные успешно сохранены!')
        form.reset()
    })
    .catch (error => {
        alert('Произошла ошибка, статус ' + error.message)
    })
})