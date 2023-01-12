const btnAdd = document.querySelector('.btn-submit')
const inputThing = document.getElementById('things')
const listThing = document.getElementById('list-things')

// QUERYSELECTOR PEGA O PRIMEIRO ELEMENTO HTML QUE FOI ACIONADO PELO EVENTLISTENER

let arr = []
getStorage(localStorage)
let cont = arr.length
generateList()

btnAdd.addEventListener('click',function() {
    event.preventDefault()
    cont++
    arr.push({id: cont, value: inputThing.value})
    localStorage.setItem('list', JSON.stringify(arr))
    getStorage(localStorage)
    generateList()
    inputThing.value = ''
})

// O ÍNDICE DO QUERYSELECTOR BATE COM O ÍNDECE NO ARRAY
// PRECISO DAR UMA OLHADA COM CARINHO E AMOR
let btnDelete = document.querySelectorAll('.btn-delete')
btnDelete.forEach((elem, ind) => {
    elem.addEventListener('click', function() {
        let id = elem.parentElement.id
        arrIndex = arr.findIndex(item => item.id == id)
        arr.splice(arrIndex, 1)
        localStorage.setItem('list', JSON.stringify(arr))
        getStorage(localStorage)
        generateList()
        btnDelete = document.querySelectorAll('.btn-delete')
        console.log(arrIndex)
        console.log(ind)
        return ''
    })
})


// UTIL FUNCTIONS
function getStorage(local) {
    if (local.length !== 0) {
        arr = JSON.parse(local.list)
    } else {
        arr = []
    }
}

function generateList() {
    const result = arr.map((item) => {
        return `
        <article id="${item.id}" class="articles">
        <div>${item.value}</div>
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
        </article>
        `
    }).join('')
    
    listThing.innerHTML = result
}