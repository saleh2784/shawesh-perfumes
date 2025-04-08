const storeContainer = document.getElementById('store');

function renderMetaher(list) {
  storeContainer.innerHTML = ''; // Clear previous content

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لم يتم العثور على نتائج.</p>";
    return;
  }

  list.forEach(metaher => {
    const card = document.createElement('div');
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${metaher.name} -- ${metaher.price} >>`;
    const encodedMessage = encodeURIComponent(message);
    
    card.className = 'card';
    card.innerHTML = `
    <div class="image-wrapper">
      <a href="product.html?id=${metaher.id}">
        <img src="${metaher.image}" alt="${metaher.name}">
      </a>
      <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank">
        🛍️ اطلب عطرك الآن
      </a>
    </div>
    <div class="perfume-name">${metaher.name}</div>
    <div class="perfume-price">${metaher.price}</div>
  `;;
    storeContainer.appendChild(card);
  });
}

// Initial render
renderMetaher(metaher);

// Filter function
function filterPerfumes() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = metaher.filter(metaher => metaher.name.toLowerCase().includes(input));
  renderMetaher(filtered);
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
// Hook up search input
document.getElementById('searchInput').addEventListener('input', () => {
  filterPerfumes(metaher, renderMetaher);
});
