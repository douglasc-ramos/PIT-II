/*
PROJETO INTEGRADOR EM ENGENHARIA DE SOFTWARE II
Nome: Douglas Coutinho Ramos
Instituição: Universidade Positivo
RGM: 28860179
Semestre: 7º / 2024
*/

console.log("Front-End da Cafeteria Carregado!");

let cart = [];

// Adiciona itens ao carrinho
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: item, quantity: 1 });
    }
    updateCartCount();
    alert(`${item} adicionado ao carrinho!`);
    saveCart();
}

// Atualiza a contagem de itens no carrinho
function updateCartCount() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = itemCount;
}

// Salva o carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Carrega o carrinho do localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Exibe os itens do carrinho
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        itemInfo.innerHTML = `<strong>${item.name}</strong><span>Quantidade: ${item.quantity}</span>`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(item.name);

        li.appendChild(itemInfo);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
}

// Remove um item do carrinho
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    saveCart();
    displayCartItems();
    updateCartCount();
}

// Limpa todos os itens do carrinho
function clearCart() {
    cart = [];
    saveCart();
    displayCartItems();
    updateCartCount();
}

// Carrega o carrinho ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    if (document.getElementById('cart-list')) {
        displayCartItems();
    }
});

// Atualiza a bandeira do país selecionado
function updateCountry() {
    const country = document.getElementById('countrySelector').value;
    const flagImage = document.getElementById('flagImage');
    
    let flagUrl = '';
    switch (country) {
        case 'USA':
            flagUrl = 'https://flagcdn.com/us.svg';
            break;
        case 'Brazil':
            flagUrl = 'https://flagcdn.com/br.svg';
            break;
        case 'UK':
            flagUrl = 'https://flagcdn.com/gb.svg';
            break;
        case 'Canada':
            flagUrl = 'https://flagcdn.com/ca.svg';
            break;
        case 'Australia':
            flagUrl = 'https://flagcdn.com/au.svg';
            break;
        default:
            flagUrl = '';
    }
    
    if (flagUrl) {
        flagImage.src = flagUrl;
        flagImage.style.display = 'block';
    } else {
        flagImage.style.display = 'none';
    }
}

// Calcula a data de entrega estimada
function calculateDeliveryDate() {
    const processingDays = parseInt(document.getElementById('processingDays').value);
    const country = document.getElementById('countrySelector').value;
    
    if (isNaN(processingDays) || processingDays < 0) {
        alert("Por favor, insira um número válido de dias.");
        return;
    }

    if (!country) {
        alert("Por favor, selecione um país.");
        return;
    }

    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + processingDays);

    let formattedDate = '';
    if (country === 'USA') {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = deliveryDate.toLocaleDateString('en-US', options);
    } else if (country === 'Brazil') {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = deliveryDate.toLocaleDateString('pt-BR', options);
    } else {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        formattedDate = deliveryDate.toLocaleDateString('en-GB', options);
    }

    document.getElementById('result').innerText = `Data estimada de entrega: ${formattedDate}`;
}
