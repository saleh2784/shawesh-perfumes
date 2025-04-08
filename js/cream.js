const storeContainer = document.getElementById('store');

function renderCreams(list) {
  storeContainer.innerHTML = ''; // Clear previous content

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لم يتم العثور على نتائج.</p>";
    return;
  }

  list.forEach(cream => {
    const card = document.createElement('div');
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${cream.name} -- ${cream.price} >>`;
    const encodedMessage = encodeURIComponent(message);
    
    card.className = 'card';
    card.innerHTML = `
  <div class="image-wrapper">
      <a href="product.html?id=${cream.id}">
        <img src="${cream.image}" alt="${cream.name || 'منتج'}">
      </a>
      <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank">
        🛍️ اطلب عطرك الآن
      </a>
  </div>
  <div class="perfume-name">${cream.name}</div>
  <div class="perfume-price">${cream.price}</div>
`;;
    storeContainer.appendChild(card);
  });
}

// Initial render
renderCreams(creams);

// Filter function
function filterPerfumes() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = creams.filter(cream => cream.name.toLowerCase().includes(input));
  renderCreams(filtered);
}

// Tab switching logic
function switchTab(tab) {
  const store = document.getElementById('store');
  const contact = document.getElementById('contact');
  const about = document.getElementById('about');
  const buttons = document.querySelectorAll('.tab-button');

  store.style.display = 'none';
  contact.style.display = 'none';
  about.style.display = 'none';
  buttons.forEach(btn => btn.classList.remove('active'));

  if (tab === 'store') {
    store.style.display = 'grid';
    buttons[0].classList.add('active');
  } else if (tab === 'contact') {
    contact.style.display = 'block';
    buttons[1].classList.add('active');
  } else if (tab === 'about') {
    about.style.display = 'block';
    buttons[2].classList.add('active');
  }
}

