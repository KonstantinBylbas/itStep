const input = document.querySelector('input[type="text"]');
const coctails = document.querySelector('.coctails');

search.addEventListener('click', () => {
    load.style.display = 'block';

    setTimeout(() => {
        load.style.display = 'none';
    }, 2000);

    coctails.innerHTML = '';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`)
        .then((data) => {
            if (data.ok) return data.json();
        })
        .then((data) => {
            for (i = 0; i < data.drinks.length; i++)
                coctails.innerHTML += `
                    <div>
                        <img src="${data.drinks[i].strDrinkThumb}">
                        <p>${data.drinks[i].strDrink}</p>
                    </div>
            `
        })
})

document.querySelectorAll('.keyboard > .btn').forEach(button => button.addEventListener('click', ({ target }) => {
    input.value += target.innerText.toLowerCase();
}))