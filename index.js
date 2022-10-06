const inputValue = () => {
    let category = 0
    const input = document.querySelector("#input")
    const btnInsert = document.querySelector("#btn-insert")
    const btnEntrada = document.querySelector("#entrada")
    const btnSaida = document.querySelector("#saida")
    btnEntrada.addEventListener("click", (event) => {
        event.preventDefault()
        category = 0
        console.log(category)

    })
    btnSaida.addEventListener("click", (event) => {
        event.preventDefault()
        category = 1
        console.log(category)
    })
    btnInsert.addEventListener("click", (event) => {
        event.preventDefault()
        if(category == 0){
            const data = {
                id: insertedValues.length === 0 ? 0 : insertedValues[insertedValues.length - 1].id + 1,
                value: Number(input.value),
                categoryID: category
            }
            insertedValues.push(data)
        }else if(category == 1){
            const data = {
                id: insertedValues.length === 0 ? 0 : insertedValues[insertedValues.length - 1].id + 1,
                value: (Number(input.value)),
                categoryID: category
            }
            
            insertedValues.push(data)

        }
        

        let modal = document.getElementById("open")
        modal.classList.toggle("show-modal")
        renderCard(insertedValues)
        sum(insertedValues)
    })

}
inputValue()

const createCard = (product, category,filter) => {

    const [entrada, saida] = category
    const ul = document.createElement("ul")
    let cards = product.forEach((element) => {

        const li = document.createElement("li")
        li.classList.add("card-sum")
        const h4 = document.createElement("h4")
        h4.innerText = `R$ ${element.value}`

        const divTrash = document.createElement("div")
        divTrash.classList.add("box-trash")

        const p = document.createElement("p")
        p.classList.add("box-entr-exit")
        
        if (element.categoryID == 0) {
            p.innerText = entrada

        } else if(element.categoryID == 1){
            p.innerText = saida
        }


        const btnTrash = document.createElement("button")

        btnTrash.classList.add("btn-trash")
        if(filter == 0){
            btnTrash.addEventListener("click", (event) => {
            console.log(insertedValues)
            let arrAddv = insertedValues.filter((object) => {
                return object.id !== element.id
            })
            insertedValues = [...arrAddv]
            const arrFilter = insertedValues.filter((element) => {
                if (element.categoryID === 0) {
                    return element
                }
        
            })
            
            renderCard(arrFilter)
            sum(arrFilter)
            
            })
        }else if(filter == 1){
                btnTrash.addEventListener("click", (event) => {

                let arrAddv = insertedValues.filter((object) => {
                    return object.id !== element.id
                })
                insertedValues = [...arrAddv]
            const arrFilter = insertedValues.filter((element) => {
                if (element.categoryID === 1) {
                    return element
                }
        
            })
            
            renderCard(arrFilter)
            sum(arrFilter)
            
            })
        }else if(filter == undefined){
            btnTrash.addEventListener("click", (event) => {

                let arrAddv = insertedValues.filter((object) => {
                    return object.id !== element.id
                })
                insertedValues = [...arrAddv]
            
            renderCard(insertedValues)
            sum(insertedValues)
            
            })
        }
        


        divTrash.append(p, btnTrash)
        li.append(h4, divTrash)
        ul.appendChild(li)


    })

    return ul
}
let filterGlobal = 2

const renderCard = (array,filter) => {
    if(filterGlobal == 0){
        const arrFilter = array.filter((element) =>{
            return element.categoryID === 0
        })
        const sectionList = document.querySelector(".main-list")
        sectionList.innerHTML = ""
        sectionList.appendChild(createCard(arrFilter, valuesCategory,filter))
        valueEmpty(arrFilter)
    }else  if(filterGlobal == 1){
        const arrFilter = array.filter((element) =>{
            return element.categoryID === 1
        })
        const sectionList = document.querySelector(".main-list")
        sectionList.innerHTML = ""
        sectionList.appendChild(createCard(arrFilter, valuesCategory,filter))
        valueEmpty(arrFilter)
    }else{
        const sectionList = document.querySelector(".main-list")
        sectionList.innerHTML = ""
        sectionList.appendChild(createCard(array, valuesCategory,filter))
        valueEmpty(array)
    }
    
}
renderCard(insertedValues)






const btnEntraceFilter = (event) => {
    event.preventDefault()
    const arrFilter = insertedValues.filter((element) => {
        if (element.categoryID === 0) {
            return element
        }

    })
    filterGlobal = 0
    renderCard(arrFilter,filterGlobal)
    sum(arrFilter)
    
}
const btnEntrace = document.querySelector("#entrace")
btnEntrace.addEventListener("click", btnEntraceFilter)


const btnExitFilter = (event) => {
    event.preventDefault()
    const arrFilter = insertedValues.filter((element) => {
        if (element.categoryID === 1) {
            return element
        }

    })
    filterGlobal = 1
    renderCard(arrFilter,filterGlobal)
    sum(arrFilter)

}
const btnExit = document.querySelector("#exit")
btnExit.addEventListener("click", btnExitFilter)



const btnAllFilter = (event) => {
    event.preventDefault()
    const arrFilter = insertedValues.filter((element) => {
        return element

    })
    filterGlobal = undefined
    renderCard(arrFilter,filterGlobal)
    sum(arrFilter)

}
const btnAll = document.querySelector("#all")
btnAll.addEventListener("click", btnAllFilter)







const sum = (array) => {
    const sumHtml = document.querySelector("#sum-values")
    const total = array.reduce((contador, valorAtual) => {
        return contador + valorAtual.value
    }, 0)
    sumHtml.innerText = `R$ ${total}`

}
sum(insertedValues)


function valueEmpty(lista){
    const sumEmpty = document.querySelector("#sum-box")
        console.log(lista)
    if(lista.length == 0){
        sumEmpty.classList.add("sum-empty-show")
        
    }else{
        sumEmpty.classList.remove("sum-empty-show")
        
    }
     
}

