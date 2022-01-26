// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span')
  let result = Number(price.innerHTML) * Number(quantity.value);
  subtotal.innerHTML = result;
  return result;
};

function calculateAll() {
  let listOfProducts = document.getElementsByClassName('product');
  let totalPrice = document.querySelector('#total-value span')
  
  let total = 0;
  for (let i = 0; i < listOfProducts.length; i++) {
  total += updateSubtotal(listOfProducts[i]);
  } 
  totalPrice.innerHTML = `${total}`;
};


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.parentNode.parentNode;
  let parent = product.parentNode;
  parent.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelectorAll('.create-product input');
  const newProductName = newProduct[0].value;
  const newProductPrice = Number(newProduct[1].value).toFixed(2);
  const createProductRow = document.getElementById('create-product')
  let newRow = document.createElement('tr');
  newRow.setAttribute('class', 'product');
  newRow.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  let parent = document.getElementsByTagName('tbody')[0]
  parent.insertBefore(newRow, createProductRow); // OR parent.appendChild(newRow);
  newProduct[0].value = '0';
  newProduct[1].value = '0';
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
};

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  for (i=0; i<removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)};
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
 