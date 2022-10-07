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
