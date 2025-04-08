const storeContainer = document.getElementById('store');

// Main product render function
function renderMainProd(list) {
  storeContainer.innerHTML = '';

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لا توجد عطور متاحة حاليا.</p>";
    return;
  }

  list.forEach(main_prod => {
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${main_prod.name} -- ${main_prod.price} >>`;
    const encodedMessage = encodeURIComponent(message);

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="image-wrapper">
        <a href="product.html?id=${main_prod.id}">
          <img src="${main_prod.image}" alt="${main_prod.name}">
        </a>
        <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank">
          🛍️ اطلب عطرك الآن
        </a>
      </div>
      <div class="perfume-name">${main_prod.name}</div>
      <div class="perfume-price">${main_prod.price}</div>
    `;
    storeContainer.appendChild(card);
  });
}

// Generic filter function
function filterPerfumes(perfumeList, renderFn) {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = perfumeList.filter(perfume =>
    perfume.name.toLowerCase().includes(input)
  );
  renderFn(filtered);
}

// Initial render
renderMainProd(main_prod);

// Hook up search input
document.getElementById('searchInput').addEventListener('input', () => {
  filterPerfumes(main_prod, renderMainProd);
});
