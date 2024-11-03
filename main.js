// Task 2 fetch products from the API using fetch and promises

const productList = document.getElementById('product-list');

function fetchProducts() {
    return new Promise ((resolve, reject)=> {
// fetch call to the API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok){
            throw new Error('Network response was not okay');
    }
        return response.json();
    })
// .then() and .catch() to handle the promise
    .then(data => resolve(data))
    .catch(error => reject(error));
});
}

// Task 3 display product details dynamically

function displayProducts(products){
    products.forEach(product => {
        const {company, name, price} = product.fields;
        const imageUrl = product.fields.image[0].url;
        
        const productElement = document.createElement('div');
// display company name, product price, producr name, and producr image
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = name;
        productElement.appendChild(imgElement);

        const nameElement = document.createElement('h3');
        nameElement.textContent = name;
        productElement.appendChild(nameElement);

        const companyElement = document.createElement('p');
        companyElement.textContent = name;
        productElement.appendChild(companyElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = `$${(price/100).toFixed(2)}`;
        productElement.appendChild(priceElement);

        productList.appendChild(productElement);
    });
}

// Task 4 handle errors gracefully

fetchProducts()
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        productList.innerHTML = '<p> Failed to load products. Please try again later.</p>';
        console.error('Fetch error:', error);
    });