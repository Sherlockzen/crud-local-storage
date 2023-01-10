const btnAdd = document.querySelector('.btn-submit')
const inputThing = document.getElementById('things')
const listThing = document.getElementById('list-things')

let arr = []
getStorage(localStorage)
// let cont = arr.length
generateList()
// let btnDelete = document.querySelectorAll('.btn-delete')

btnAdd.addEventListener('click',function() {
    event.preventDefault()
    arr.push({value: inputThing.value})
    localStorage.setItem('list', JSON.stringify(arr))
    getStorage(localStorage)
    generateList()
    inputThing.value = ''

})


// O ÍNDICE DO QUERYSELECTOR BATE COM O ÍNDICE NO ARRAY
function deleteFunc()  {
    
    let btnDelete = document.querySelectorAll('.btn-delete')
    btnDelete.forEach((elem, ind) => {
       
        elem.addEventListener('click', function() {
            console.log('CLICOU');
            // let id = elem.parentElement.id
            // arrIndex = arr.findIndex(item => item.id == id)
            arr.splice(ind, 1)
            localStorage.setItem('list', JSON.stringify(arr))
            getStorage(localStorage)
            generateList()
            // btnDelete = document.querySelectorAll('.btn-delete')
            console.log(btnDelete)
            console.log(ind)
            
        })
    })
} 
    

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
    deleteFunc()
}