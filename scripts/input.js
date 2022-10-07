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