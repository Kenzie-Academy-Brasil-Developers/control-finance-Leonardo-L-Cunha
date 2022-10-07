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