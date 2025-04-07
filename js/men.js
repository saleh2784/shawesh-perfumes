const perfumes = [
    {
      name: "روشاز",
      price: "₪220",
      image: "assets/images/1.jpg"
    },
    {
      name: "اسمياكي",
      price: "₪180",
      image: "assets/images/2.jpg"
    },
    {
      name: "ون مليون",
      price: "₪250",
      image: "assets/images/3.jpg"
    },
    {
      name: "انفكتوس",
      price: "₪280",
      image: "assets/images/4.jpg"
    },
    {
      name: "باي جفنشي",
      price: "₪200",
      image: "assets/images/5.jpg"
    },
    {
      name: "كريد",
      price: "₪480",
      image: "assets/images/1.jpg"
    },
    {
      name: "بوس سنت",
      price: "₪200",
      image: "assets/images/2.jpg"
    },
    {
      name: "لاكوسست",
      price: "₪150",
      image: "assets/images/3.jpg"
    },
    {
      name: "فهرنهايت",
      price: "₪100",
      image: "assets/images/4.jpg"
    },
    {
      name: "جوب",
      price: "₪120",
      image: "assets/images/5.jpg"
    },
    {
      name: "بلاك اكس اس",
      price: "₪250",
      image: "assets/images/1.jpg"
    },
    {
      name: "عود",
      price: "₪480",
      image: "assets/images/2.jpg"
    }
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