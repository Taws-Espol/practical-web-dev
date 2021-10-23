const formElement = document.getElementById("loan_form")
const successLoanModal = document.getElementById("success_loan_modal")
const successLoanButton = document.getElementById("success_loan_button")

function openSuccessLoanModal(){
    successLoanModal.hidden=false
}

function redirectSucessLoan(){
    window.location.reload()
}

function createLoan(name, last_name, email, student_id, terminal){
    return {
        "name" : name,
        "last_name" : last_name,
        "email" : email,
        "student_id" : student_id,
        "terminal" : terminal
    }
}

successLoanButton.addEventListener("click", redirectSucessLoan)

function retrieveLoansFromLocalStorage(){
    let loans = JSON.parse(window.localStorage.getItem("loans"))
    return loans ? loans : {"data":[]}
}

function addLoanToLoanList(newLoan, loans){
    return [...loans, newLoan]
}

function saveLoan(newLoan){
    let loans = retrieveLoansFromLocalStorage();
    let newloans = {...loans, data:addLoanToLoanList(newLoan,loans["data"])}
    window.localStorage.setItem("loans", JSON.stringify(newloans))
}

function newLoanSubmit(event) {
    event.preventDefault();
    let name = event.target.nombre.value
    let last_name = event.target.apellido.value
    let email = event.target.correo.value
    let student_id = event.target.matricula.value
    let terminal = event.target.terminal.value
    let newLoan = createLoan(name, last_name, email, student_id, terminal)
    saveLoan(newLoan)
    openSuccessLoanModal()
}

formElement.addEventListener('submit', newLoanSubmit);