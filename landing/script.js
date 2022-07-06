// function Habibi (name, age) {
    // alert(`Добро пожаловать на сайт, ${name}, у нас есть предложения даже для ваших(${age}) лет!`)
// }
// Habibi('Илья', 25)



// age = prompt('Ваш возраст')
// age > 18 ? alert('gay') : alert('poop')
 


// for(let i = 0; i<10; i++){
    // alert(i)
//  }

// let arr = [10,11,12,13,14,15]



// arr.map(
    // (item)=>{
        // alert(item)
    // }
// )
let burger = document.querySelector('.burger-menu')
let button = document.querySelector('.nav-open')

button.addEventListener('click',()=>{
    burger.classList.toggle('opened')
        
})

// title.innerHTML = 'HEllo from JS'