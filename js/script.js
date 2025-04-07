// script.js
const perfumes = [
    // { id: 1, name: "Amber Nights امبر نايت", price: "₪150", image: "assets/images/1.jpg" },
    { id: 1, name: "Amber Nights", price: "₪150", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Amber Nights" , price: "₪250", image: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Amber Night", price: "₪180", image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Amber Night", price: "₪130", image: "https://images.pexels.com/photos/1961784/pexels-photo-1961784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Amber Nights", price: "₪170", image: "https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Amber Nights", price: "₪350", image: "https://images.pexels.com/photos/1961794/pexels-photo-1961794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Amber Nights", price: "₪550", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Amber Nights", price: "₪50", image: "https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_640.jpg" },
    { id: 9, name: "Amber Nights", price: "₪600", image: "https://cdn.pixabay.com/photo/2017/06/09/15/40/bottle-2387210_640.jpg" },
    { id: 10, name: "Amber Nights", price: "₪100", image: "https://cdn.pixabay.com/photo/2018/08/27/15/11/perfume-3635207_640.jpg" },
    // ... rest of the perfume data
  ];
  
  const storeContainer = document.getElementById('store');
  
  perfumes.forEach(perfume => {
    const card = document.createElement('div');
    const message = ` مرحبا ارغب بشراء هذا العطر , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
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
  