const defaultBlock = document.querySelector('.block');
const transport = document.querySelector('[name="v"] > div');

for (i = 2; i < 31; i++) {
    const newBlock = defaultBlock.cloneNode(true);
    newBlock.children[0].innerText = `${i}`;
    newBlock.children[0].htmlFor = `checkbox${i}`;
    newBlock.children[1].id = `checkbox${i}`;
    transport.append(newBlock);
}


document.forms.f.onsubmit = function (event) {
    event.preventDefault();

    if (date.value) {
        document.forms.v.style.display = 'block';

        checkBtn.forEach(checkbox => checkbox.disabled = false)
        checkBtn.forEach(checkbox => checkbox.checked = false);
        cost = 0;
        document.querySelector('#price span').innerText = cost;

        for (i = 0; i < tickets.length; i++)
            if (date.value == tickets[i].date && select.value == tickets[i].direction) {
                document.getElementById(`checkbox${tickets[i].seat}`).checked = true;
                document.getElementById(`checkbox${tickets[i].seat}`).disabled = true;
            }
    }
}

let tickets = [];
document.forms.v.onsubmit = function (event) {
    event.preventDefault();

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const ticket = {
            direction: select.value,
            date: date.value,
            seat: checkbox.previousElementSibling.innerText
        }
        tickets.push(ticket);

        document.querySelector('table tbody').innerHTML += `
            <tr>
                <td>${ticket.direction}</td>
                <td>${ticket.date}</td>
                <td>${ticket.seat}</td>
            </tr>
        `;

        checkbox.disabled = 'true';
    })

    document.querySelector('table').style.display = 'block';
}


let cost = 0;
const checkBtn = document.querySelectorAll('input[type="checkbox"]');

checkBtn.forEach(checkbox => checkbox.addEventListener('input', ({ target }) => {
    if (target.checked)
        cost += 62;
    else
        cost -= 62;

    document.querySelector('#price span').innerText = cost;
}));


date.addEventListener('input', () => {
    document.forms.v.style.display = 'none';
});


select.addEventListener('input', () => {
    document.forms.v.style.display = 'none';
});