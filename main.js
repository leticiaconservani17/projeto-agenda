const form = document.getElementById('contactForm')
let lines = ``;
const name = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddLine()
    AttTable()
    LastContact()
})

function AddLine(){
    const inputNameContact = document.getElementById('contact-name')
    const inputNumberContact = document.getElementById('number-contact')

    if (name.includes(inputNameContact.value)){
        alert(`O contato ${inputNameContact.value} já existe`)
    } else {

        name.push(inputNameContact.value)
    
        let line = `<tr>`
    
        line += `<td>${inputNameContact.value}</td>`;
        line += `<td>${inputNumberContact.value}</td>`;
        line += `</tr>`;
    
        lines += line
    }


    inputNameContact.value = ''
    inputNumberContact.value = ''
}

function AttTable() {
    const TableBody = document.querySelector('tbody')
    TableBody.innerHTML = lines
}

function LastContact() {
    const lastContactName = name[name.length - 1]; 
    const lastContactCell = document.querySelector('tfoot td:last-child'); 

    lastContactCell.textContent = lastContactName; 
}