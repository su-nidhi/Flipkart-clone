// login button toggle 
//wht we want to do jb ham login button pr hover kre to login item show ho or jb na kre to na show ho
let loginButton = document.querySelector('.login');
let loginItems = document.querySelector('.login-items');
loginItems.style.display = 'none';
loginButton.addEventListener('mouseenter', () => {
     loginItems.style.display = 'block';
});
loginButton.addEventListener('mouseleave', () => {
     loginItems.style.display = 'none';
});
//menu button dropdown
let threeDotMenu = document.querySelector('.three-dot-menu');
let threeDotlist = document.querySelector('.menu-list');
threeDotlist.style.display = 'none';
threeDotMenu.addEventListener('mouseover', () => {
     threeDotlist.style.display = 'block';
});
threeDotMenu.addEventListener('mouseout', () => {
     threeDotlist.style.display = 'none';
});

//slider
let prev = document.querySelector('.previous-btn');
let next = document.querySelector('.next-btn');
let sliderImages = document.querySelectorAll('.slider .slider-img');
let indicators = document.querySelectorAll('.indicator');

let curntelem = 0;

function handlebutonSlider() {
     sliderImages.forEach((slider, index) => {
          slider.style.display = index === curntelem ? 'block' : 'none';
     });

     indicators.forEach((dot, index) => {
          dot.classList.toggle('active', index === curntelem)
     })
     prev.disabled = curntelem === 0;
     next.disabled = curntelem === sliderImages.length - 1;
}
function nextSlide() {
     curntelem = (curntelem + 1) % sliderImages.length;
     handlebutonSlider()
}

setInterval(nextSlide, 2000)
prev.addEventListener('click', () => {
     if (curntelem > 0) {
          curntelem--
          handlebutonSlider()
     }
});
next.addEventListener('click', () => {
     if (curntelem < sliderImages.length - 1) {
          curntelem++
          handlebutonSlider()
     }
})

handlebutonSlider();

//product data

let ElectronicsProduct = [
     {
          img: './images/electronic1.webp',
          name: 'Best true wireless',
          prize: 'Grab now'
     },
     {
          img: './images/electronic2.webp',
          name: 'boAt Smartwatches',
          prize: 'from 999'
     },
     {
          img: './images/electronic3.webp',
          name: 'sandisk Extreme portable',
          prize: 'from 5799'
     },
     {
          img: './images/electronic4.webp',
          name: 'noise smartwatches',
          prize: '1099'
     },
     {
          img: './images/electronic5.webp',
          name: 'Fastrack Smartwathes',
          prize: 'from 5799'
     },
     {
          img: './images/cate6.webp',
          name: 'noise smartwatches',
          prize: '1099'
     },

     {
          img: './images/electronic7.webp',
          name: 'BenQ Monitors',
          prize: 'from 9990'
     },
     {
          img: './images/electronic8.webp',
          name: 'Monitors',
          prize: 'from 6599'
     },
];
let productContainer = document.querySelector('.products')
ElectronicsProduct.forEach((item) => {
     productContainer.innerHTML += `
<div class="slider-product">
<img class="product-img" src="${item.img}" alt="">
<div class="product-text">
<p>${item.name}</p>
<p class="b">${item.prize}</p>
</div>
</div>`;
});

//slider js
let sliderContainer = document.querySelectorAll('.slider-product').forEach(section => {
     let slider = document.querySelector('.products');
     let prev2 = document.querySelector('.prev2');
     let next2 = document.querySelector('.next2');

     function countAmount() {
          const card = document.querySelector('.slider-product');
          return card.offsetWidth;
     }
     function updatebuttonSlide() {
          let maxscroll = slider.scrollWidth - slider.clientWidth;
          prev2.disabled = slider.scrollLeft <= 0;
          next2.disabled = slider.scrollLeft >= maxscroll;
     }
     next2.addEventListener('click', () => {
          slider.scrollLeft += countAmount();
          updatebuttonSlide();
     })

     prev2.addEventListener('click', () => {
          slider.scrollLeft -= countAmount();
          updatebuttonSlide();
     });

     slider.addEventListener('scroll', updatebuttonSlide);
     window.addEventListener('resize', updatebuttonSlide);
     updatebuttonSlide()

})

//4 box groups
let productGroup = [
     {
          heading: "Fashion Top Details",
          products: [
               { img: './images/product-card1.webp', title: 'Shavers', offer: "Min. 50% Off" },
               { img: './images/product-card2.webp', title: 'Trimmer', offer: "Min. 50% Off" },
               { img: './images/product-card3.webp', title: 'Hairdryer', offer: "Min. 50% Off" },
               { img: './images/product-card4.webp', title: 'Camera', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Top Grooming Deals",
          products: [
               { img: './images/product-cardg-2.webp', title: 'Beard Oil', offer: "Min. 50% Off" },
               { img: './images/product-cardg-2-2.webp', title: 'Comb', offer: "Min. 50% Off" },
               { img: './images/product-card-g2-3.webp', title: 'Face Wash', offer: "Min. 50% Off" },
               { img: './images/product-card2-4.webp', title: 'Hair Wax', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Men's Style Essentials",
          products: [
               { img: './images/product-card3-1.webp', title: 'Shirt', offer: "Min. 50% Off" },
               { img: './images/product-card3-2.webp', title: 'Jeans', offer: "Min. 50% Off" },
               { img: './images/product-card3-3.webp', title: 'Shoes', offer: "Min. 50% Off" },
               { img: './images/product-card3-4.webp', title: 'Watch', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Fashion Top Details",
          products: [
               { img: './images/product-card4-1.webp', title: 'Shavers', offer: "Min. 50% Off" },
               { img: './images/product-card4-2.webp', title: 'Trimmer', offer: "Min. 50% Off" },
               { img: './images/product-card4-3.webp', title: 'Hairdryer', offer: "Min. 50% Off" },
               { img: './images/product-card4-4.webp', title: 'Camera', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Top Grooming Deals",
          products: [
               { img: './images/product-card5-1.webp', title: 'Beard Oil', offer: "Min. 50% Off" },
               { img: './images/product-card5-2.webp', title: 'Comb', offer: "Min. 50% Off" },
               { img: './images/product-card5-3.webp', title: 'Face Wash', offer: "Min. 50% Off" },
               { img: './images/product-card1.webp', title: 'Hair Wax', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Men's Style Essentials",
          products: [
               { img: './images/product-card3-1.webp', title: 'Shirt', offer: "Min. 50% Off" },
               { img: './images/product-card3-2.webp', title: 'Jeans', offer: "Min. 50% Off" },
               { img: './images/product-card3-3.webp', title: 'Shoes', offer: "Min. 50% Off" },
               { img: './images/product-card3-4.webp', title: 'Watch', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Fashion Top Details",
          products: [
               { img: './images/product-card4-1.webp', title: 'Shavers', offer: "Min. 50% Off" },
               { img: './images/product-card4-2.webp', title: 'Trimmer', offer: "Min. 50% Off" },
               { img: './images/product-card4-3.webp', title: 'Hairdryer', offer: "Min. 50% Off" },
               { img: './images/product-card4-4.webp', title: 'Camera', offer: "Min. 50% Off" },
          ],
     },
     {
          heading: "Top Grooming Deals",
          products: [
               { img: './images/product-card5-1.webp', title: 'Beard Oil', offer: "Min. 50% Off" },
               { img: './images/product-card5-2.webp', title: 'Comb', offer: "Min. 50% Off" },
               { img: './images/product-card5-3.webp', title: 'Face Wash', offer: "Min. 50% Off" },
               { img: './images/product-card1.webp', title: 'Hair Wax', offer: "Min. 50% Off" },
          ],
     },
     {
          bigImage: true,
          img: './images/big-img-boxex.webp'
     },
];
let secrionContainer = document.querySelector('.section-container');
for (let i = 0; i < productGroup.length; i += 3) {
     let sectionROW = productGroup.slice(i, i + 3).map((item) => {

     //  Big Image box check
          if (item.bigImage) {
               return `
     <img src="${item.img}"alt="" style="width:469px; height:696px; object-fit:cover;"/>
     `}
          let productRow = '';
          for (let j = 0; j < item.products.length; j += 2) {

               let rowitem = item.products.slice(j, j + 2).map(product => {
                    return `
            <div class="product-card">
                                <div class="card-img">
                                    <img src="${product.img}" alt="">
                                </div>
                                <div class="card-title"> ${product.title}</div>
                                <div class="card-offer"><p>${product.offer}</p></div>
                            </div>`;
               }).join('');

               productRow += `<div class="product-card-row">${rowitem}</div>`;
          }
          return `
      <div class="product-section-box">
                    <div class="section-header">
                        <div class="section-title"><h1>${item.heading}</h1></div>
                        <div class="section-arrow"><i class="bi bi-chevron-right"></i></div>
                    </div>
                     <div class="products-cards">${productRow}</div></div>
                    `;
     }).join(' ');
     secrionContainer.innerHTML += `<div class="section-row">${sectionROW}</div>`
}

//sm-card-data
let cardData = [
     {
          titleCard: 'Beauty,Food,Toyes & More',
          data: [
               { img: './images/card-img-1.webp', productName: 'cycle', productOffer: 'Upto 80% off' },
               { img: './images/card-img-2.webp', productName: 'coffe', productOffer: 'Upto 80% off' },
               { img: './images/card-img-3.webp', productName: 'stationarry', productOffer: 'Upto 80% off' },
               { img: './images/card-img-4.webp', productName: 'action toy', productOffer: 'Upto 80% off' },
               { img: './images/card-img-5.webp', productName: 'remote control toyes', productOffer: 'Upto 80% off' },
               { img: './images/card-img-6.jpeg', productName: 'soft toy', productOffer: 'Upto 80% off' },
               { img: './images/card-img-7.jpeg', productName: 'dry fruit', productOffer: 'Upto 80% off' },
               { img: './images/card-img-8.jpeg', productName: 'icecreame', productOffer: 'Upto 80% off' },

          ]
     },
     {
          titleCard: 'Sport HealthCare & More',
          data: [
               { img: './images/card2-img1.webp', productName: 'cycle', productOffer: 'Upto 80% off' },
               { img: './images/card2-img2.webp', productName: 'coffe', productOffer: 'Upto 80% off' },
               { img: './images/card2-img3.webp', productName: 'stationarry', productOffer: 'Upto 80% off' },
               { img: './images/card2-img4.webp', productName: 'action toy', productOffer: 'Upto 80% off' },
               { img: './images/card2-img5.webp', productName: 'remote control toyes', productOffer: 'Upto 80% off' },
               { img: './images/card2-img6.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
          ]
     },
     {
          titleCard: 'Furniture deals',
          data: [
               { img: './images/card3-img1.webp', productName: 'cycle', productOffer: 'Upto 80% off' },
               { img: './images/card3-img2.webp', productName: 'coffe', productOffer: 'Upto 80% off' },
               { img: './images/card3-img3.webp', productName: 'stationarry', productOffer: 'Upto 80% off' },
               { img: './images/card3-img4.webp', productName: 'action toy', productOffer: 'Upto 80% off' },
               { img: './images/card3-img5.webp', productName: 'remote control toyes', productOffer: 'Upto 80% off' },
               { img: './images/card3-img6.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
               { img: './images/card3-img7.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
               { img: './images/card3-img8.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
          ]
     },
     {
          titleCard: 'Top deals',
          data: [
               { img: './images/card4-img1.jpeg', productName: 'cycle', productOffer: 'Upto 80% off' },
               { img: './images/card4-img2.webp', productName: 'coffe', productOffer: 'Upto 80% off' },
               { img: './images/card4-img3.webp', productName: 'stationarry', productOffer: 'Upto 80% off' },
               { img: './images/card4-img4.webp', productName: 'action toy', productOffer: 'Upto 80% off' },
               { img: './images/card4-img5.webp', productName: 'remote control toyes', productOffer: 'Upto 80% off' },
               { img: './images/card4-img6.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
               { img: './images/card4-img7.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
               { img: './images/card4-img8.webp', productName: 'soft toy', productOffer: 'Upto 80% off' },
          ]
     }

];
let cardDataTop = cardData.slice(0, 2);     // First 2 sliders
let cardDataBottom = cardData.slice(2);

function createCardSlider(item, index) {
     const uniqueId = `cards-${index}`;
     const cardHtml = item.data.map(product => `
      <div class="card">
            <img src="${product.img}" />
            <p>${product.productName}</p>
            <p>${product.productOffer}</p>
        </div>
     `).join('');
     const wrapper = document.createElement('div');
     wrapper.className = 'card-slider-container';
     wrapper.innerHTML = `
    
            <div class="heading-cards">${item.titleCard}</div>
            <div class="cards" id="cards-${index}">
                ${cardHtml}
            </div>
            <div class="controls">
            <i class="bi bi-chevron-left prev3" data-target="${uniqueId}"></i>
            <i class="bi bi-chevron-right next3" data-target="${uniqueId}"></i>
            </div>
`;
     return wrapper;
}
// Add sliders to top
const sliderTop = document.getElementById('slider-top');
cardDataTop.forEach((item, index) => {
     sliderTop.appendChild(createCardSlider(item, index));
});

// Add sliders to bottom
const sliderBottom = document.getElementById('slider-bottom');
cardDataBottom.forEach((item, index) => {
     sliderBottom.appendChild(createCardSlider(item, index + cardDataTop.length));
})

document.addEventListener('click', function (e) {
     if (e.target.classList.contains('prev3') || e.target.classList.contains('next3')) {
          const targetId = e.target.getAttribute('data-target');
          const scrollContainer = document.getElementById(targetId);
          const scrollAmount = scrollContainer.querySelector('.card')?.offsetWidth + 15 || 200;
          if (e.target.classList.contains('prev3')) {
               scrollContainer.scrollLeft -= scrollAmount;
          } else {
               scrollContainer.scrollLeft += scrollAmount;
          }
     }
});




