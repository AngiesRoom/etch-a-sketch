const button = document.querySelector('button')
const grid = document.querySelector('.sketch-container')



function draw(input=16){
    for(let i=1; i <= input; i++){
    const horizontal = document.createElement('div')
    horizontal.classList.add('horizontal-container')
    for(let j=1; j <=input; j++){
        const item = document.createElement('div')
        item.classList.add('item')
        item.addEventListener("mouseenter", setColor)
        horizontal.appendChild(item)
    }
    grid.appendChild(horizontal)
}
}



function setColor(event){
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    event.target.style.backgroundColor = `rgb(${r},${g},${b})` 
}

button.addEventListener('click', () => {
    const input = prompt('Set your size: ')
    if(input >100){
        alert('You cannot do that!')

    }else{
        grid.replaceChildren()
        draw(input)
    }
})

draw()
