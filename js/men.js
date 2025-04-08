const storeContainer = document.getElementById('store');

function renderMenPerfumes(list) {
  storeContainer.innerHTML = '';

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لا توجد عطور متاحة حاليا.</p>";
    return;
  }

  list.forEach(men_perfume => {
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${men_perfume.name} -- ${men_perfume.price} >>`;
    const encodedMessage = encodeURIComponent(message);

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="image-wrapper">
        <a href="product.html?id=${men_perfume.id}">
          <img src="${men_perfume.image}" alt="${men_perfume.name}">
        </a>
        <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank">
          🛍️ اطلب عطرك الآن
        </a>
      </div>
      <div class="perfume-name">${men_perfume.name}</div>
      <div class="perfume-price">${men_perfume.price}</div>
    `;
    storeContainer.appendChild(card);
  });
}
renderMenPerfumes(men_perfumes);

// Filter function
function filterPerfumes(perfumeList) {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = perfumeList.filter(perfume =>
    perfume.name.toLowerCase().includes(input)
  );
  renderMenPerfumes(filtered);
}
document.getElementById('searchInput').addEventListener('input', () => {
  filterPerfumes(men_perfumes);
});
