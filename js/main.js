// script.js
const perfumes = [
  { id: 1, name: "Amber Nights", price: "₪150", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg" },
  { id: 2, name: "Jadore", price: "₪150", image: "https://www.hdbeauty.co.il/images/itempics/3348900417885_28022025111013_large.jpg" },
  { id: 3, name: "Marly", price: "₪150", image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg" },
  { id: 4, name: "Paradis", price: "₪150", image: "https://images.pexels.com/photos/1961784/pexels-photo-1961784.jpeg" },
  { id: 5, name: "Chevignon", price: "₪150", image: "https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg" },
  { id: 6, name: "Ted Lapidus", price: "₪150", image: "https://images.pexels.com/photos/1961794/pexels-photo-1961794.jpeg" },
  { id: 7, name: "Spring", price: "₪150", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg" },
  { id: 8, name: "Narciso Rodriguez", price: "₪150", image: "https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_640.jpg" },
  { id: 9, name: "Lancome", price: "₪150", image: "https://www.april.co.il/Media/Uploads/3614273922975_1--.webp" },
  { id: 10, name: "روشاز", price: "₪150", image: "assets/images/2.jpg" },
  { id: 11, name: "اسمياكي", price: "₪150", image: "assets/images/2.jpg" },
  { id: 12, name: "انفكتوس", price: "₪150", image: "assets/images/3.jpg" },
  { id: 13, name: "كريد", price: "₪150", image: "assets/images/4.jpg" },
  { id: 14, name: "بوس سنت", price: "₪150", image: "assets/images/5.jpg" },
  { id: 15, name: "لاكوسست", price: "₪150", image: "assets/images/1.jpg" },
  { id: 16, name: "Amber Nights", price: "₪150", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg" },
  { id: 17, name: "Jadore", price: "₪150", image: "https://www.hdbeauty.co.il/images/itempics/3348900417885_28022025111013_large.jpg" },
  { id: 18, name: "Marly", price: "₪150", image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg" },
  { id: 19, name: "Paradis", price: "₪150", image: "https://images.pexels.com/photos/1961784/pexels-photo-1961784.jpeg" },
  { id: 20, name: "Chevignon", price: "₪150", image: "https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg" },
  { id: 21, name: "Ted Lapidus", price: "₪150", image: "https://images.pexels.com/photos/1961794/pexels-photo-1961794.jpeg" },
  { id: 22, name: "Spring", price: "₪150", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg" },
  { id: 23, name: "Narciso Rodriguez", price: "₪150", image: "https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_640.jpg" },
  { id: 24, name: "Lancome", price: "₪150", image: "https://www.april.co.il/Media/Uploads/3614273922975_1--.webp" },
  { id: 25, name: "روشاز", price: "₪150", image: "assets/images/2.jpg" },
  { id: 26, name: "اسمياكي", price: "₪150", image: "assets/images/2.jpg" },
  { id: 27, name: "انفكتوس", price: "₪150", image: "assets/images/3.jpg" },
  { id: 28, name: "كريد", price: "₪150", image: "assets/images/4.jpg" },
  { id: 29, name: "بوس سنت", price: "₪150", image: "assets/images/5.jpg" },
  { id: 30, name: "لاكوسست", price: "₪150", image: "assets/images/1.jpg" },
 
];

const storeContainer = document.getElementById('store');
  
  perfumes.forEach(perfume => {
    const card = document.createElement('div');
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
    << ${perfume.name} -- ${perfume.price} >>`;
    const encodedMessage = encodeURIComponent(message);

    card.className = 'card';
    card.innerHTML = `
    <div class="image-wrapper">
        <img src="${perfume.image}" alt="${perfume.name}">
        <a class="order-button" href="https://wa.me/+972505320456?text=${encodedMessage}"target="_blank">
        🛍️ اطلب عطرك الآن
        </a>
    </div>
    <div class="perfume-name">${perfume.name}</div>
    <div class="perfume-price">${perfume.price}</div>
    `;
    storeContainer.appendChild(card);
  });
  
  function switchTab(tab) {
    const store = document.getElementById('store');
    const contact = document.getElementById('contact');
    const about = document.getElementById('about');
    const buttons = document.querySelectorAll('.tab-button');
    
    // Hide all sections
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