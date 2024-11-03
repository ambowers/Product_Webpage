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
    .then(data => resolve(data))
    .catch(error => reject(error));
});
}

