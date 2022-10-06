const openModal = () => {
    const btnModal = document.querySelectorAll("[data-control-modal]")
    btnModal.forEach((element) => {
        element.addEventListener("click", () => {
            let modalControl = element.getAttribute("data-control-modal")
            document.getElementById(modalControl).classList.toggle("show-modal")
        })
    })

}
openModal()