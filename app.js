const btnAdd = document.querySelector('.btn-submit')
const inputThing = document.getElementById('things')
const listThing = document.getElementById('list-things')

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
    console.log(arr);
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
        <article class="articles">
        <div id="${item.id}">${item.value}</div>
        <button class="btn-edit">Edit</button>
        <button class="btn-delete">Delete</button>
        </article>
        `
    }).join('')
    
    listThing.innerHTML = result
}

function deleteItem() {
    const btnDelete = document.querySelectorAll('.btn-delete')
    btnDelete.forEach(elem => {
        elem.addEventListener('click', function() {
            
        })
    })
    
}