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
let productContainer=document.querySelector('.products')
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
let sliderContainer = document.querySelectorAll('.slider-product').forEach(section=> { 
     let slider = document.querySelector('.products');
     let prev2 = document.querySelector('.prev2');
     let next2 = document.querySelector('.next2');

     function countAmount() {
          const card = document.querySelector('.slider-product');
          return card.offsetWidth ;
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

let beautyToysProducts = [
     {
          img: '', // coffee powder image path
          name: 'Coffee Powder',
          price: 'Upto 80% Off'
     },
     {
          img: '', // soft toys image path
          name: 'Soft Toys',
          price: 'Upto 70% Off'
     },
     {
          img: '', // stationery image path
          name: 'Top Selling Stationery',
          price: 'From ₹49'
     },
     {
          img: '', // remote toy image path
          name: 'Remote Control Toys',
          price: 'Up to 80% Off'
     },
     {
          img: '', // action toys image path
          name: 'Best of Action Toys',
          price: 'Up to 70% Off'
     },
     {
          img: '', // dry fruits image path
          name: 'Dry Fruits',
          price: 'Upto 75% Off'
     },
     {
          img: '', // cycle image path
          name: 'Geared Cycles',
          price: 'Up to 70% Off'
     },
     {
          img: '', // peanut butter image path
          name: 'Food Spreads',
          price: 'Upto 75% Off'
     }
];

let sportsHealthcareProducts = [
     {
          img: '', // puzzles image
          name: 'Puzzles & Cubes',
          price: 'From ₹79'
     },
     {
          img: '', // learning games image
          name: 'Learning & Educational Games',
          price: 'Up to 80% Off'
     },
     {
          img: '', // cereal image
          name: 'Breakfast Cereal',
          price: 'Upto 75% Off'
     },
     {
          img: '', // musical toys image
          name: 'Musical Toys',
          price: 'Under 199'
     },
     {
          img: '', // tea powder image
          name: 'Tea Powder',
          price: 'Upto 75% Off'
     },
     {
          img: '', // honey image
          name: 'Honey',
          price: 'Upto 75% Off'
     }
];