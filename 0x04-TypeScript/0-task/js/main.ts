interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const std1: Student = {
	firstName: 'Ken',
	lastName: 'Walibora',
	age: 30,
	location: 'Voi'
}

const std2 : Student = {
	firstName: 'Ben',
	lastName: 'Bora',
	age: 20,
	location: 'Zanzibar'
}

const studentsList: Student[] = [std1, std2]

const table = document.createElement('table');
const tr = document.createElement('tr')

for (let i of studentsList){
	table.appendChild(tr).innerHTML = `<td> ${i.firstName} </td>
	<td> ${i.location} </td>`
}
document.body.insertAdjacentElement('beforeend', table);
