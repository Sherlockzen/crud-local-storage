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
    })
    edtBtn.addEventListener('click', function(e) {

        updateItem(e.target.parentNode.parentNode.id)
    })
})

btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    addItem()

})
function btnDel(id) {
    console.log(id);
    arr = arr.filter(arr => arr.id !== id)
    console.log(arr);
    localStorage.setItem('list', JSON.stringify(arr))
    updateList(1, id, '')
}

function addItem() {
    let id = +(new Date())
    arr.push({id: id, value: inputThing.value})
    localStorage.setItem('list', JSON.stringify(arr))
    updateList(0, id, inputThing.value)
    
}
//ALTERAR VALOR DE UM OBJETO DO ARRAY
function updateItem(id) {
    let iden = arr.findIndex(arr => arr.id === id)
    inputThing.value =
    console.log(arr.splice(iden, 1, {id: id, value: inputThing.value}))

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
            updateItem(e.target.parentNode.parentNode.id)
        })
        inputThing.value = ''

    } else if (type === 1) { // Deleting a item

        const article = document.getElementById(`${id}`)
        article.remove()
    } else {    // Updating a item



    }
}