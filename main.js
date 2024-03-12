const products = [
    {
      name: 'Sony Playstation 5',
      url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'https://i.ibb.co/rFFMDH7/samsung-galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'https://i.ibb.co/mhm1hLq/cannon-eos-camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'https://i.ibb.co/LS9TDLN/sony-a7-camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'https://i.ibb.co/QHgFnHk/lg-tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'https://i.ibb.co/L0L9SdG/nintendo-switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'https://i.ibb.co/C8rBVdT/xbox-series-x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'https://i.ibb.co/Pj1nm4B/samsung-tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'https://i.ibb.co/5F58zmH/google-pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'https://i.ibb.co/5Wy3RZ9/sony-zv1f-camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'https://i.ibb.co/FxM6rXq/toshiba-tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'https://i.ibb.co/5vc7J6s/iphone-14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];

//   Select DOM Elements
const productsWrapper = document.getElementById('products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartCount = document.getElementById('cart-count');

// Initialize the cart item count
let cartItemCount = 0;