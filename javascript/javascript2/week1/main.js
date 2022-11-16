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