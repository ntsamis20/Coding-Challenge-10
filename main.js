// Task 2 
const priceElement = document.getElementById('price');
const sizeSelector = document.getElementById('size');

const prices = {
    small: 20,
    medium: 25,
    large: 30
};

sizeSelector.addEventListener('change', function() {
    const selectedSize = sizeSelector.value;

    priceElement.textContent = `$${prices[selectedSize].toFixed(2)}`;
});
// Task 3
const purchaseButton = document.getElementById('purchaseBtn');
const productInfo = {
    small: { price: 20, inStock: true },
    medium: { price: 25, inStock: true },
    large: { price: 30, inStock: false }
};

function updateProductDetails() {
    const selectedSize = sizeSelector.value.split(' ')[0];}

//Task 4 
priceElement.textContent = `$${productInfo[selectedSize].price.toFixed(2)}`;

    // Enable/Disable the purchase button based on stock status
    if (productInfo[selectedSize].inStock) {
        purchaseButton.disabled = false;
    } else {
        purchaseButton.disabled = true;
    }
}

sizeSelector.addEventListener('change', updateProductDetails);

purchaseButton.addEventListener('click', function() {
    const selectedSize = sizeSelector.value.split(' ')[0]; 

    if (productInfo[selectedSize].inStock) {
        alert(`Thank you for your purchase of the product in size: ${selectedSize.toUpperCase()}!`);
    } else {
        alert(`We're Sorry, the product in size: ${selectedSize.toUpperCase()} is not available and cannot be bought.`);
    }
});

updateProductDetails();

//Task 5
const productList = document.getElementById('productList');
const productForm = document.getElementById('productForm');

const products = {};

function createProductItem(name, price, size, inStock) {
    const li = document.createElement('li');
    li.classList.add('product-item');
    li.dataset.productName = name;
    li.dataset.productSize = size;
    li.dataset.productPrice = price;
    li.dataset.inStock = inStock; 
    li.innerHTML = `
    <h4>${name}</h4>
    <p>Size: ${size} | Price: $${price} | <span class="stock-status">${inStock === 'true' ? 'In Stock' : 'Out of Stock'}</span></p>
    <button class="purchase-btn" ${inStock === 'false' ? 'disabled' : ''}>Purchase</button>
`;
return li;
}

productForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const size = document.getElementById('productSize').value;
    const inStock = document.getElementById('productStock').value;
    const productItem = createProductItem(name, price, size, inStock);
    productList.appendChild(productItem);
    products[name] = { price: parseFloat(price), size: size, inStock: inStock === 'true' };
    productForm.reset();
});

productList.addEventListener('click', function (event) {
    if (event.target.classList.contains('purchase button')) {
        const productItem = event.target.closest('product item');
        const productName = productItem.dataset.productName;
        const productSize = productItem.dataset.productSize;
        const inStock = productItem.dataset.inStock;

    }
});
