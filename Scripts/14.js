fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        if (data.ok)
            return data.json();

        throw (error => console.log('Error download'));
    })
    .then((data => {
        str = JSON.parse(JSON.stringify(data));
        step1(data);
    }))

function step1(data) {
    const arr = data.map(d => `<div class="box" data-id="${d.id}">${d.name}</div>`);

    users.innerHTML = arr.join('');
}

document.getElementById('users').addEventListener('click', ({ target }) => {
    if (target.dataset.id) {
        getUserById({ target });
    }
});

function getUserById({ target }) {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${target.dataset.id}`)
        .then((data) => {
            if (data.ok)
                return data.json();
        })
        .then((data) => {
            user.innerHTML = `
            <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td> id: </td>
                        <td> ${data[0].id} </td>
                    </tr>
                    <tr>
                        <td> name: </td>
                        <td> ${data[0].name} </td>
                    </tr>
                    <tr>
                        <td> username: </td>
                        <td> ${data[0].username} </td>
                    </tr>
                </tbody>
            </table>

            <button id='${data[0].id}'> Show posts </button>
        `

        posts.innerText = '';

            document.querySelector('button').addEventListener('click', ({ target }) => {
                fetch(`https://jsonplaceholder.typicode.com/posts?user=${target.id}`)
                    .then((data) => {
                        if (data.ok)
                            return data.json();
                    })
                    .then((data) => {
                        for(p in data){
                            posts.innerText += `
                            \n\n
                            ${data[p].title}
                            \n
                            ${data[p].body}
                            `
                        }
                    })
            })
        })
}