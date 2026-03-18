document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(navToggle && navLinks){
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const socialIcons = document.querySelectorAll('.social-icons a');
	const navIcons = document.querySelectorAll('.nav-icons i');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');

        navLinks.forEach(link => link.style.color = 'white');
        socialIcons.forEach(icon => icon.style.color = 'white');
    } else {
        header.classList.remove('scrolled');

        navLinks.forEach(link => link.style.color = 'black');
        socialIcons.forEach(icon => icon.style.color = 'black');
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".scroll-wrapper");

  wrappers.forEach(wrapper => {
    const scrollContainer = wrapper.querySelector(".scroll-container");
    const scrollLeftBtn = wrapper.querySelector(".scroll-btn.left");
    const scrollRightBtn = wrapper.querySelector(".scroll-btn.right");

    if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
      scrollLeftBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
      });

      scrollRightBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  const buyButtons = document.querySelectorAll('.btn.primary-btn');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

 
  function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalCount > 0) {
      cartCount.textContent = totalCount;
      cartCount.style.display = 'inline-block';
    } else {
      cartCount.style.display = 'none';
    }
  }

  updateCartCount();

  buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      const productCard = button.closest('.product-card');
      if (!productCard) return;

      const name = productCard.querySelector('h3').textContent.trim();
      const priceText = productCard.querySelector('.price').textContent.trim();
      const price = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));

      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      updateCartCount();
    });
  });
});


 document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.getElementById("cart-items");
    let total = 0;

    cartItems.forEach(item => {
        const row = document.createElement("tr");

        const totalPerItem = (item.price * item.quantity).toFixed(2);
        total += parseFloat(totalPerItem);

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)} €</td>
            <td>${totalPerItem} €</td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("total-price").innerText = `${total.toFixed(2)} €`;
});

const clearCartBtn = document.getElementById("clear-cart");

clearCartBtn.addEventListener("click", () => {
  localStorage.removeItem("cart");  
  location.reload();  
});



