const year = document.querySelector('.year')
const date = new Date().getFullYear()
year.textContent = date

// navbar section

const navBtn = document.getElementById('nav-icon')
const navItems = document.querySelector('.nav')
const closeBtn = document.getElementById('close-btn')


navBtn.addEventListener('click', () => {
    navItems.classList.toggle('display-nav')
})

closeBtn.addEventListener('click', () => {
        navItems.classList.remove('display-nav')
})

const bigImage = document.querySelector('.large-image')
const smallImage = document.querySelectorAll('.small-image')
const bigImage2 = document.querySelector('.large-image2')
const smallImage2 = document.querySelectorAll('.small-image2')
const bigImage3 = document.querySelector('.large-image3')
const smallImage3 = document.querySelectorAll('.small-image3')

smallImage[0].addEventListener('click', () => {
    bigImage.src = smallImage[0].src
})

smallImage[1].addEventListener('click', () => {
    bigImage.src = smallImage[1].src
})

smallImage[2].addEventListener('click', () => {
    bigImage.src = smallImage[2].src
})

smallImage[3].addEventListener('click', () => {
    bigImage.src = smallImage[3].src
})

smallImage2[0].addEventListener('click', () => {
    bigImage2.src = smallImage2[0].src
})

smallImage2[1].addEventListener('click', () => {
    bigImage2.src = smallImage2[1].src
})

smallImage2[2].addEventListener('click', () => {
    bigImage2.src = smallImage2[2].src
})

smallImage2[3].addEventListener('click', () => {
    bigImage2.src = smallImage2[3].src
})


smallImage3[0].addEventListener('click', () => {
    bigImage3.src = smallImage3[0].src
})

smallImage3[1].addEventListener('click', () => {
    bigImage3.src = smallImage3[1].src
})

smallImage3[2].addEventListener('click', () => {
    bigImage3.src = smallImage3[2].src
})

smallImage3[3].addEventListener('click', () => {
    bigImage3.src = smallImage3[3].src
})


const cartIcon = document.getElementById('shopping')
const cartIt = document.getElementById('cart-container')

// Display cart items

cartIcon.addEventListener('click', () => {
    cartIt.classList.toggle('show-cart')
})

const removeBtns = document.querySelectorAll('.remove-item')

removeBtns.forEach(btn => {
    btn.addEventListener('click', removeItem)
})

function removeItem(e){
    const removeButton = e.target
    removeButton.parentElement.remove()
    updateTotal()
}

function updateTotal(){
    let cartContainer = document.getElementById('cart')
    let cartItem = cartContainer.querySelectorAll('.cart-content')
    let total = 0
    cartItem.forEach(item =>  {
        let priceElement = item.querySelector('.price')
        let qtyElement = item.querySelector('.qty')
        
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = parseInt(qtyElement.innerText)
         total = total + (price * quantity)
    })
    total = Math.round(total * 100) / 100
    let cartTotal = document.getElementById('cart-total')
    cartTotal.innerText = '$ ' + total
    
}

const addBtns = document.querySelectorAll('.init')

addBtns.forEach(btn => {
    btn.addEventListener('click', addToCartClick)
    
})

function addToCartClick(e){
    
    const addButton = e.target
    const items = addButton.parentElement.parentElement
    
    let title = items.querySelector('.cart-title').innerText
    let price = items.querySelector('.item-price').innerText
    let input = items.querySelector('.quantity-input').value
    let itemImage = items.querySelector('#big-img').src
    addToCart(title, price, input,itemImage)
    updateTotal()
}

function addToCart(title, price, input,itemImage){
   
    let cartDisplay = document.createElement('div')
    cartDisplay.classList.add('cart-content')
    let cartItems = document.getElementById('cart')
    

    let itemTitles = document.querySelectorAll('.cart-item-title')

    
    for(let i  = 0; i < itemTitles.length; i++){
        if (itemTitles[i].innerText == title){
            alert('item is already added to cart')
            return
        }
    }

    let cartDisplayContents = `            
                <img src=${itemImage} alt="">
                <div class="cart-text">
                    <p class="cart-item-title">${title}</p>
                    <div>
                    <h3 class="price">${price}</h3>
                    x
                    <span class="qty">${input}</span>
                </div>
                </div>
                <button class="remove-item">REMOVE</button>`

     
        cartDisplay.innerHTML = cartDisplayContents
        cartItems.append(cartDisplay)
        cartDisplay.querySelector('.remove-item').addEventListener('click', removeItem)
        
}

const checkout = document.querySelector('.checkout-btn')

checkout.addEventListener('click', checkoutClicked)

function checkoutClicked(){
    alert('Purchase successful')
    let cart = document.getElementById('cart')
    while(cart.hasChildNodes()){
        cart.removeChild(cart.firstChild)
    }
    setTimeout(() =>{
        const cartIt = document.getElementById('cart-container')
        cartIt.classList.remove('show-cart')
    }, 1000)
    
    updateTotal()
}

const cartQtyInputs =  document.querySelectorAll('.quantity-input')

cartQtyInputs.forEach(qty => {
    qty.addEventListener('change', quantityChange)
})

function quantityChange(e){
    let input = e.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal()
}

