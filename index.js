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




