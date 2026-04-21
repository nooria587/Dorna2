// navbar toggle button behavior
const menuToggle = document.getElementById('menuToggle');
const menuModal = document.getElementById('menuModal');
const closeModal = document.getElementById('closeModal');

menuToggle.addEventListener('click', () => {
  menuModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  menuModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === menuModal) {
    menuModal.style.display = 'none';
  }
});
//Nooria js section client
const testimonialsRow1 = [
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"The team at Dorna Media helped us grow our social media audience and build a stronger digital identity. The team at Dorna Media helped us grow our social media audience and build a stronger digital identity."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"Working with Dorna Media completely transformed our brand presence. Their creative ideas and professional execution exceeded our expectations."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"The team at Dorna Media helped us grow our social media audience and build a stronger digital identity. The team at Dorna Media helped us grow our social media audience and build a stronger digital identity."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"Working with Dorna Media completely transformed our brand presence. Their creative ideas and professional execution exceeded our expectations."},
];

const testimonialsRow2 = [
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"Working with Dorna Media completely transformed our brand presence. Their creative ideas and professional execution exceeded our expectations."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"The team at Dorna Media helped us grow our social media audience and build a stronger digital identity. The team at Dorna Media helped us grow our social media audience and build a stronger digital identity."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"Working with Dorna Media completely transformed our brand presence. Their creative ideas and professional execution exceeded our expectations."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"Working with Dorna Media completely transformed our brand presence. Their creative ideas and professional execution exceeded our expectations."},
  {name:"Ahmad Ahmadi", title:"Momand Company Founder", img:"./src/assets/images/dorna-duck.webp", text:"The team at Dorna Media helped us grow our social media audience and build a stronger digital identity. The team at Dorna Media helped us grow our social media audience and build a stronger digital identity."},
];

function renderCards(rowId, data) {
  const row = document.getElementById(rowId);
  
  // بررسی وجود row
  if (!row) return;

  data.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="profile">
        <img src="${t.img}" alt="${t.name}">
        <div>
          <h3>${t.name}</h3>
          <p>${t.title}</p>
        </div>
      </div>
      <div class="testimonial">${t.text}</div>
    `;

    row.appendChild(card);
  });
}

// اطمینان از بارگذاری کامل DOM
document.addEventListener('DOMContentLoaded', function() {
  renderCards("row1", testimonialsRow1);
  renderCards("row2", testimonialsRow2);

  /* =========================
     DRAG SCROLL FUNCTION
  ========================= */
  function enableDragScroll(row) {
    if (!row) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
      row.style.cursor = 'grabbing';
    });

    row.addEventListener("mouseleave", () => {
      isDown = false;
      row.style.cursor = 'grab';
    });

    row.addEventListener("mouseup", () => {
      isDown = false;
      row.style.cursor = 'grab';
    });

    row.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 2;
      row.scrollLeft = scrollLeft - walk;
    });
  }

  enableDragScroll(document.getElementById("row1"));
  enableDragScroll(document.getElementById("row2"));

  /* about - FAQ */
  const faqItems = document.querySelectorAll('.faq-item');
  
  function closeItem(item) {
    if (!item) return;
    item.classList.remove('active');
    const icon = item.querySelector('.faq-icon');
    if (icon) {
      icon.textContent = '+';
    }
  }
  
  function openItem(item) {
    if (!item) return;
    item.classList.add('active');
    const icon = item.querySelector('.faq-icon');
    if (icon) {
      icon.textContent = '−';
    }
  }
  
  function closeAllItems() {
    faqItems.forEach(function(item) {
      closeItem(item);
    });
  }
  
  faqItems.forEach(function(item) {
    if (item.classList.contains('active')) {
      const icon = item.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = '−';
      }
    } else {
      const icon = item.querySelector('.faq-icon');
      if (icon) {
        icon.textContent = '+';
      }
    }
  });
  
  faqItems.forEach(function(item) {
    const questionDiv = item.querySelector('.faq-question');
    
    if (questionDiv) {
      questionDiv.addEventListener('click', function() {
        if (item.classList.contains('active')) {
          closeItem(item);
        } else {
          closeAllItems();
          openItem(item);
        }
      });
    }
  });

  /* footer */
  const ctaButton = document.querySelector('.btn-cta');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert('✨ Let\'s build something amazing together! ✨\nContact Dorna Media to start your project.');
    });
  }

  const footerLinks = document.querySelectorAll('.footer-nav a, .social-icons a');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent.trim() || link.getAttribute('aria-label') || 'Link';
      alert(`🔗 ${text} - Coming soon. Get in touch with us!`);
    });
  });
});
