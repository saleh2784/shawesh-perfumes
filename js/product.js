// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

// Combine all product types into one array
const allProducts = [...women_perfumes, ...men_perfumes, ...creams, ...main_prod, ...metaher];

// Find the product with matching ID
const product = allProducts.find(p => p.id === productId);

// Get the container where product info will be shown
const container = document.getElementById('productDetails');
  
  if (product) {
    const message = ` مرحبا ارغب بشراء هذا المنتج , الرجاء أن ترسل لي المزيد من التفاصيل حول التوفر وسعر الشحن , شكرا
  << ${product.name} -- ${product.price} >>`;
    const encodedMessage = encodeURIComponent(message);
  
    container.innerHTML = `
  <div style="max-width: 600px; margin: auto; text-align: center; padding: 20px;">
    <h2 style="margin-top: 25px; color: white;"> ${product.name}</h2>
    <a href="${product.image}" target="_blank">
      <img src="${product.image}" alt="${product.name}" style="max-width: 100%; border-radius: 12px;">
    </a>
    <h2 style="margin-top: 25px; color: white;"> اسم المنتج  = ${product.name}</h2>
    <p style="font-size: 25px; color: white;">السعر   = ${product.price}</p>
    <p style="margin: 10px 0 20px; color: white;">${product.description || ''}</p>
    <a href="https://wa.me/+972505320456?text=${encodedMessage}" target="_blank" style="
      background-color: #28a745;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      text-decoration: none;
      display: inline-block;
    ">🛍️ اطلب الآن عبر واتساب</a>
  </div>
`;
  } else {
    container.innerHTML = "<p>عذرًا، لم يتم العثور على هذا المنتج.</p>";
  }
  