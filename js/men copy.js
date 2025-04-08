const men_perfumes = [
  { id: 1, name: "روشاز", price: "₪150", image: "assets/images/1.jpg" },
  { id: 2, name: "اسمياكي", price: "₪150", image: "assets/images/2.jpg" },
  { id: 3, name: "انفكتوس", price: "₪150", image: "assets/images/3.jpg" },
  { id: 4, name: "كريد", price: "₪150", image: "assets/images/4.jpg" },
  { id: 5, name: "بوس سنت", price: "₪150", image: "assets/images/5.jpg" },
  { id: 6, name: "لاكوسست", price: "₪150", image: "assets/images/1.jpg" },
  { id: 7, name: "روشاز", price: "₪150", image: "assets/images/2.jpg" },
  { id: 8, name: "اسمياكي", price: "₪150", image: "assets/images/3.jpg" },
  { id: 9, name: "انفكتوس", price: "₪150", image: "assets/images/4.jpg" },
  { id: 10, name: "كريد", price: "₪150", image: "assets/images/5.jpg" },
  { id: 11, name: "بوس سنت", price: "₪150", image: "assets/images/1.jpg" },
  { id: 12, name: "لاكوسست", price: "₪150", image: "assets/images/2.jpg" },
];

const storeContainer = document.getElementById('store');

function renderMenPerfumes(list) {
  storeContainer.innerHTML = '';

  if (list.length === 0) {
    storeContainer.innerHTML = "<p>لم يتم العثور على نتائج.</p>";
    return;
  }

  list.forEach(men_perfume => {
    const card = document.createElement('div');
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
<< ${men_perfume.name} -- ${men_perfume.price} >>`;
    const encodedMessage = encodeURIComponent(message);

    card.className = 'card';
    card.innerHTML = `
      <div class="image-wrapper">
          <img src="${men_perfume.image}" alt="${men_perfume.name}">
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

// Initial render
renderMenPerfumes(men_perfumes);

// Filter function
function filterMenPerfumes() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = men_perfumes.filter(p =>
    p.name.toLowerCase().includes(input)
  );
  renderMenPerfumes(filtered);
}

// Optional: reuse switchTab from before if needed
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
