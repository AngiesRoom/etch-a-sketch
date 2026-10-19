const grid = document.querySelector('.sketch-container')

for(let i=1; i <= 16; i++){
    const horizontal = document.createElement('div')
    horizontal.classList.add('horizontal-container')
    for(let i=1; i <=16; i++){
        const item = document.createElement('div')
        item.classList.add('item')
        horizontal.appendChild(item)
    }
    grid.append(horizontal)
}