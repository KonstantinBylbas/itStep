const row = document.querySelector('tr:nth-child(2)');

const table = {
    "rows": [{
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: '20',
        company: 'Gugel'
    },
    {
        firstName: 'Anton',
        lastName: 'Nebrituy',
        age: '32',
        company: 'Nova Pichta'
    },
    {
        firstName: 'Durak',
        lastName: 'Redkostnuy',
        age: '15',
        company: 'ATB'
    }]
}
for (j = 0; j < table.rows.length; j++) {
    tableSort();
}



document.querySelector('table').addEventListener('click', ({ target }) => {
    if (target.dataset.filter) {
        let arr = [];

        if (target.dataset.filter == 'firstName') {
            for (i = 0; i < table.rows.length; i++)
                arr.push(table.rows[i].firstName);
            arr.sort();

            for (i = 0; i < arr.length; i++)
                for (j = 0; j < table.rows.length; j++)
                    if (arr[i] == table.rows[j].firstName)
                        tableSort();
        }

        if (target.dataset.filter == 'lastName') {
            for (i = 0; i < table.rows.length; i++)
                arr.push(table.rows[i].lastName);
            arr.sort();

            for (i = 0; i < arr.length; i++)
                for (j = 0; j < table.rows.length; j++)
                    if (arr[i] == table.rows[j].lastName)
                        tableSort();
        }

        if (target.dataset.filter == 'age') {
            for (i = 0; i < table.rows.length; i++)
                arr.push(table.rows[i].age);
            arr.sort();

            for (i = 0; i < arr.length; i++)
                for (j = 0; j < table.rows.length; j++)
                    if (arr[i] == table.rows[j].age)
                        tableSort();
        }

        if (target.dataset.filter == 'company') {
            for (i = 0; i < table.rows.length; i++)
                arr.push(table.rows[i].company);
            arr.sort();

            for (i = 0; i < arr.length; i++)
                for (j = 0; j < table.rows.length; j++)
                    if (arr[i] == table.rows[j].company)
                        tableSort();
        }


        for (i = 0; i < arr.length; i++)
            document.querySelector(`tr:nth-child(3)`).remove();
    }
});


function tableSort() {
    row.style.display = 'table-row';
    const newRow = row.cloneNode(true);
    row.style.display = 'none';

    newRow.children[0].innerText = table.rows[j].firstName;
    newRow.children[1].innerText = table.rows[j].lastName;
    newRow.children[2].innerText = table.rows[j].age;
    newRow.children[3].innerText = table.rows[j].company;

    document.querySelector('tbody').append(newRow);
}


const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
let month = '01';
let year = '2001';
let calendar;

inputMonth.addEventListener('input', () => {
    if (inputMonth.value.length == 2)
        month = inputMonth.value;

    if (inputMonth.value.length == 2 && inputYear.value.length == 4) {
        calendar = new Date(`${year}`, `${month - 1}`);

        generate();
    }
});

inputYear.addEventListener('input', () => {
    if (inputYear.value.length == 4)
        year = inputYear.value;

    if (inputMonth.value.length == 2 && inputYear.value.length == 4) {
        calendar = new Date(`${year}`, `${month - 1}`);

        generate();
    }
});


function generate() {
    let day = calendar.getDay() == 0 ? 7 : calendar.getDay();
    var daysIn = new Date(year, month, 0).getDate();

    for (i = 0; i < 42; i++)
        document.querySelector(`.calendar > div > div:nth-child(${8 + i})`).innerText = '';

    for (i = 0; i < daysIn; i++)
        document.querySelector(`.calendar > div > div:nth-child(${7 + day + i})`).innerText = calendar.getDate() + i;
}