const btnAdd = document.querySelector('.btn-submit')
const inputThing = document.getElementById('things')
const listThing = document.getElementById('list-things')
// VARIABLES
let arr = []
if (localStorage.length > 0) {
    arr = JSON.parse(localStorage.list)
}

// LOAD THE LIST FROM THE LOCAL STORAGE
arr.forEach(elem => {
    //  <--- Creating buttons (edit, delete) ---->
    let edtBtn = document.createElement("button")
    edtBtn.className = "edtBtn"
    edtBtn.innerHTML = "Editar"
    let delBtn = document.createElement("button")      
    delBtn.className = "delBtn"
    delBtn.innerHTML = "Deletar"  
    //  <--- Creating the <article> ----->
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `${elem.value}`
    let article = document.createElement("article")
    article.id = `${elem.id}`
    article.appendChild(paragraph)
    let div = document.createElement("div")
    div.className = "btn-container"
    div.appendChild(edtBtn)
    div.appendChild(delBtn)
    article.append(div)
    //  <--- Editing DOM ---->
    listThing.appendChild(article)
    // GENERATING EVENTS OF DELETE
    console.log('test');
    delBtn.addEventListener('click', function(e) {
        btnDel(e.target.parentNode.parentNode.id)
        console.log(`Delete pressionado, id do avô: ${e.target.parentNode.parentNode.id}`)
    })
    edtBtn.addEventListener('click', function(e) {
        // let iden = arr.findIndex(arr => arr.id === id)
        // let id = e.target.parentNode.parentNode.id
        // inputThing.value = e.target.parentNode.parentNode.firstElementChild.innerHTML
        //     //arr.find(arr => arr.id === id).value
        // btnAdd.id = `${id}`
        // btnAdd.classList.add("edit")
        // btnAdd.innerHTML = 'Editar'
        // inputThing.focus()
        updateItem(e.target.parentNode.parentNode.id, e.target.parentNode.parentNode.firstElementChild.innerHTML)
    })
})

btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    addItem()
})
// <-------- FUNCTIONS -------->
function updateItem(id, value) {
    inputThing.value = value
    btnAdd.id = `${id}`
    btnAdd.classList.add("edit")
    btnAdd.innerHTML = 'Editar'
    inputThing.focus()
}
function btnDel(id) {
    console.log(typeof id);
    let resuArr = arr.filter(array => array.id !== Number(id))
    console.log(resuArr);
    arr = resuArr
    localStorage.setItem('list', JSON.stringify(arr))
    updateList(1, id, '')
}

function addItem() {
    if (btnAdd.classList.contains("edit")) {
        let id = Number(btnAdd.id)
        btnAdd.removeAttribute('id')
        let index = arr.findIndex(arr => arr.id === id)
        arr.splice(index, 1, {id: id, value: inputThing.value})
        localStorage.setItem('list', JSON.stringify(arr))
        updateList(2, id, inputThing.value)
        btnAdd.innerHTML = 'Adcionar'
    } else {
        let id = +(new Date())
        arr.push({id: id, value: inputThing.value})
        localStorage.setItem('list', JSON.stringify(arr))
        updateList(0, id, inputThing.value)
    }
}
function updateList(type, id, value) { //Type -> {0 : add}, {1 : delete}, {2 : update}
    if (type === 0) { // Adding new item

        //  <--- Creating buttons (edit, delete) ---->
        let edtBtn = document.createElement("button")
        edtBtn.className = "edtBtn"
        edtBtn.innerHTML = "Editar"
        let delBtn = document.createElement("button")      
        delBtn.className = "delBtn"
        delBtn.innerHTML = "Deletar"  
        //  <--- Creating the <article> ----->
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `${value}`
        let article = document.createElement("article")
        article.id = `${id}`
        article.appendChild(paragraph)
        console.log(article)
        let div = document.createElement("div")
        div.className = "btn-container"
        div.appendChild(edtBtn)
        div.appendChild(delBtn)
        article.append(div)
        //  <--- Editing DOM ---->
        listThing.appendChild(article)

        // btnDel()
        //  <--- Adding Event --->
        delBtn.addEventListener('click', function(e) {
            btnDel(e.target.parentNode.parentNode.id);
        })
        edtBtn.addEventListener('click', function(e) {
            updateItem(e.target.parentNode.parentNode.id, e.target.parentNode.parentNode.firstElementChild.innerHTML)
        })
        inputThing.value = ''

    } else if (type === 1) { // Deleting an item
        const article = document.getElementById(`${id}`)
        article.remove()
    } else {    // Updating a item
        console.log(document.getElementById(`${id}`))
        const article = document.getElementById(`${id}`)
        article.firstElementChild.innerHTML = value

    }
}