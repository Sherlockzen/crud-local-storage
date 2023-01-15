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
    console.log('teste');
    const btnDele = document.querySelector('.delBtn')
    btnDele.addEventListener("click", function() {
        console.log(btnDele.value)
    })
})

btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    addItem()

})
function btnDel() {
    const btnDele = document.querySelectorAll('.delBtn')
    console.log('btnDel');
    btnDele.forEach((elem) => {
        elem.addEventListener('click', function() {
            console.log(elem.parentNode.parentNode.id);
            arr = arr.filter(arr => arr.id != elem.parentNode.parentNode.id)
            console.log(arr);
            localStorage.setItem('list', JSON.stringify(arr))
            updateList(1, elem.parentNode.parentNode.id, '')
        })
    })
}

function addItem() {
    let id = +(new Date())
    arr.push({id: id, value: inputThing.value})
    localStorage.setItem('list', JSON.stringify(arr))
    updateList(0, id, inputThing.value)
    
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
        btnDel()

    } else if (type === 1) { // Deleting a item

        const article = document.getElementById(`${id}`)
        article.remove()
    } else {    // Updating a item



    }
}







// // QUERYSELECTOR PEGA O PRIMEIRO ELEMENTO HTML QUE FOI ACIONADO PELO EVENTLISTENER

// let arr = []
// getStorage(localStorage)
// // let cont = arr.length
// generateList()
// // let btnDelete = document.querySelectorAll('.btn-delete')

// btnAdd.addEventListener('click',function() {
//     event.preventDefault()
//     arr.push({value: inputThing.value})
//     localStorage.setItem('list', JSON.stringify(arr))
//     getStorage(localStorage)
//     generateList()
//     inputThing.value = ''
// })


// // O ÍNDICE DO QUERYSELECTOR BATE COM O ÍNDICE NO ARRAY
// // PRECISO DAR UMA OLHADA COM CARINHO E AMOR
// let btnDelete = document.querySelectorAll('.btn-delete')
//     btnDelete.forEach((elem, ind) => {
       
//         elem.addEventListener('click', function() {
//             console.log('CLICOU');
//             // let id = elem.parentElement.id
//             // arrIndex = arr.findIndex(item => item.id == id)
//             arr.splice(ind, 1)
//             localStorage.setItem('list', JSON.stringify(arr))
//             getStorage(localStorage)
//             generateList()
//             // btnDelete = document.querySelectorAll('.btn-delete')
//             console.log(btnDelete)
//             console.log(ind)
            
//         })
//     })


// // O ÍNDICE DO QUERYSELECTOR BATE COM O ÍNDICE NO ARRAY
// function deleteFunc()  {
    
//     let btnDelete = document.querySelectorAll('.btn-delete')
//     btnDelete.forEach((elem, ind) => {
       
//         elem.addEventListener('click', function() {
//             console.log('CLICOU');
//             // let id = elem.parentElement.id
//             // arrIndex = arr.findIndex(item => item.id == id)
//             arr.splice(ind, 1)
//             localStorage.setItem('list', JSON.stringify(arr))
//             getStorage(localStorage)
//             generateList()
//             // btnDelete = document.querySelectorAll('.btn-delete')
//             console.log(btnDelete)
//             console.log(ind)
            
//         })
//     })
// } 
    

// // UTIL FUNCTIONS
// function getStorage(local) {
//     if (local.length !== 0) {
//         arr = JSON.parse(local.list)
//     } else {
//         arr = []
//     }
// }

// function generateList() {
//     const result = arr.map((item) => {
//         return `
//         <article id="${item.id}" class="articles">
//         <div>${item.value}</div>
//         <button class="btn-edit">Edit</button>
//         <button class="btn-delete">Delete</button>
//         </article>
//         `
//     }).join('')
    
//     listThing.innerHTML = result
//     deleteFunc()
// }