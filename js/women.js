
const storeContainer = document.getElementById('store');

function renderWomenPerfumes(list) {
  storeContainer.innerHTML = '';

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لا توجد عطور متاحة حاليا.</p>";
    return;
  }

  list.forEach(women_perfume => {
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${women_perfume.name} -- ${women_perfume.price} >>`;
    const encodedMessage = encodeURIComponent(message);

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="image-wrapper">
        <a href="product.html?id=${women_perfume.id}">
          <img src="${women_perfume.image}" alt="${women_perfume.name}">
        </a>
        <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank">
          🛍️ اطلب عطرك الآن
        </a>
      </div>
      <div class="perfume-name">${women_perfume.name}</div>
      <div class="perfume-price">${women_perfume.price}</div>
    `;

    storeContainer.appendChild(card);
  });
}

renderWomenPerfumes(women_perfumes);

// Filter function
// Generic filter function
function filterPerfumes(perfumeList, renderFn) {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = perfumeList.filter(perfume =>
    perfume.name.toLowerCase().includes(input)
  );
  renderFn(filtered);
}

// Initial render
renderWomenPerfumes(women_perfumes);

// Connect to input
document.getElementById('searchInput').addEventListener('input', () => {
  filterPerfumes(women_perfumes, renderWomenPerfumes);
});

