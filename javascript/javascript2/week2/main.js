console.log("Script loaded");

const products = getAvailableProducts();

const ul = document.querySelector('ul');

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: ${product.rating}</p>`;
        ul.appendChild(li);
    });
}

renderProducts(products);

// search by name
const input = document.querySelector('.inp1');

input.addEventListener('input', product => {
    const lowerCase = product.target.value.toLowerCase();
    const filter = products
        .filter(product => product.name.toLowerCase().includes(lowerCase));
    ul.innerHTML = '';
    renderProducts(filter);
})

// search by max price
const input2 = document.querySelector('.inp2');

input2.addEventListener('input', product => {
    const filter = products
        .filter(product => product.price <= input2.value);
    ul.innerHTML = '';
    if (input2.value === '') renderProducts(products);
    renderProducts(filter);
})

//get new products
const button = document.querySelector('.btn');

button.addEventListener('click', function () {
    return location.reload();
})