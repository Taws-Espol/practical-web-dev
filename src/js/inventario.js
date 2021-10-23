const tableContainer = document.getElementById("loan_table_container")

function loadLoans(){
    let loans = JSON.parse(window.localStorage.getItem("loans"))
    return loans ? loans : {"data":[]}
}

function createLoanItem(loan){
    return `<tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                                ${loan.name}  ${loan.last_name}
                            </div>
                            <div class="text-sm text-gray-500">
                                ${loan.email}
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${loan.terminal}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                       En uso
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${loan.student_id}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-red-600 hover:text-red-900">Devolver</a>
                </td>
            </tr>`
}

function createLoanBody(loans){
    return loans.map((loan)=>{
        return createLoanItem(loan)
    }).join("\n")
}

function createLoanTable(loans){
    return `<table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nombre del Estudiante
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Terminal
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Número de Matricula
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Devolver</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    ${createLoanBody(loans)}
                </tbody>
            </table>`
}

function populateLoanTable(){
    let loans = loadLoans()
    console.log(createLoanTable(loans["data"]));
    tableContainer.innerHTML = createLoanTable(loans["data"]);
}

document.addEventListener("DOMContentLoaded",populateLoanTable,false)