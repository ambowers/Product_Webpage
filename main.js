// Task 2 fetch products from the API using fetch and promises

const productList = document.getElementById('product-list')

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

function displayProducts(product){
    productList.forEach(product => {
        const {company, name, price} = product.fields;
        const imageUrl = product.fields.image[0].url;
        const productElement = document.createElement('div');

        productElement.innerHTML = `
        <img src= "${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p> by ${company}</p>
        <p> $${(price/100).toFixed(2)}</p> 
        `; //displays price correctly
        productList.appendChild(productElement); 
    });
}