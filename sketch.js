const grid = document.querySelector('.sketch-container')

for(let i=1; i <= 16; i++){
    const horizontal = document.createElement('div')
    horizontal.classList.add('horizontal-container')
    for(let j=1; j <=16; j++){
        const item = document.createElement('div')
        item.classList.add('item')
        item.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = 'violet'
        })
        horizontal.appendChild(item)
    }
    grid.append(horizontal)
}



const gridItem = document.querySelector('.item')
gridItem.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'green';
})