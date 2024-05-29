'use strict'
const modalEl = document.querySelector('.modal')
const addBtn = document.querySelector('.add_note')
const userText = document.querySelector('.input')
const stickers = document.querySelector('.stickers')


function closeModal () {
    modalEl.classList.remove('modal--show')
    userText.value = ''
}

function addSticker(e) {
    if(e.keyCode === 13 && modalEl.classList.contains('modal--show')){
        const sticker = document.createElement('div')
        sticker.classList.add('sticker')
        sticker.innerText = userText.value
        sticker.style.transform = `rotate(${getRandomFloat()}deg)`
        sticker.style.margin = `${getRandomFloat()}px`
        sticker.style.backgroundColor = `${colorSticker[getRandomNumber()]}`

        sticker.addEventListener('dblclick', () => {
            sticker.remove()
        })
        stickers.appendChild(sticker)
        userText.value = ''
    }
    
}

function getRandomFloat() {
    return Math.random() * (10 + 10)  -10;
  }




window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27){
        closeModal();
    }
})

window.addEventListener('click', (e) => {
    if(e.target === modalEl) {
        closeModal()
    }
})

window.addEventListener('keydown', addSticker)

addBtn.addEventListener('click', () => {
    modalEl.classList.add('modal--show')
})

/**----------------GENERATE_HEX-------------------------------- */
const colorSticker = ['#FF0000', '#FFFF00', '#00FF00', '#00FF00', '#FF1493', '#7FFFD4', '#7B68EE', '#FFFAF0', '#FF8C00', '#a5ff00','#ffc401', '	#FF8C00', '	#FF1493', '#BA55D3', '	#1E90FF', '#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#ff3de8']

function getRandomNumber () {
    return Math.floor(Math.random() * colorSticker.length)
}

/**----DELETE_ALL----------------------------------------------------- */

const deleteEl = document.querySelector('.delete')

deleteEl.addEventListener('click', () =>{
    stickers.innerHTML = ''
})





















