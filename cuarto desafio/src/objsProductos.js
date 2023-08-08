
import ProductManager from './managers/ProductManager.js';


// Buzos

const prod1 = {
    title: "Hoddie 1",
    description: "La ropa que mas te gusta",
    price: 1100,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/453/319/products/buzo-negro-whitout-espalda1-c0d12f3526bb14e15516239734858222-320-0.webp',
    code: 'HOD-001',
    stock: 2,
  status: true,
    category: 'Abrigo'
};

const prod2 = {
    title: 'Hoddie 2',
    description: 'Samsung Galaxy S21 128GB',
    price: 1000,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/453/319/products/buzo-negro-the-true-dystopia-is-here-frente1-f44454af2a4c03ccba16511791789981-320-0.webp',
    code: 'HOD-002',
    stock: 2,
     
    category: 'Abrigo'
};

const prod3 = {
    title: 'Hoddie 3',
    description: 'La ropa que mas te gusta',
    price: 900,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/453/319/products/buzo-negro-frente-sons-of-the-moon1-ece6bc390ec13400f016300834968414-320-0.webp',
    code: 'HOD-003',
    stock: 2,
     
    category: 'Abrigo'
};

const prod4 = {
    title: 'Hoddie 4',
    description: 'La ropa que mas te gusta',
    price: 800,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/453/319/products/buzo-negro-jack-boys-frente1-b4df7c02655694a53e16251733721719-320-0.webp',
    code: 'HOD-004',
    stock: 2,
     
    category: 'Abrigo'
};

const prod5 = {
    title: 'Hoddie 5',
    description: 'La ropa que mas te gusta',
    price: 700,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/453/319/products/after-death-frente-negro1-cd8927dec0ef67df3b16182736806195-320-0.webp',
    code: 'HOD-005',
    stock: 2,
     
    category: 'Abrigo'
};

// remeras

const prod6 = {
    title: 'T-Shirt 1',
    description: 'La ropa que mas te gusta',
    price: 2000,
    thumbnail: 'https://underwavebrand.com/wp-content/uploads/2017/04/DSC07132-1-768x1152.jpg',
    code: 'TSH-001',
    stock: 2,
     
    category: 'Remera'
};

const prod7 = {
    title: 'T-Shirt 2',
    description: 'La ropa que mas te gusta',
    price: 1800,
    thumbnail: 'https://underwavebrand.com/wp-content/uploads/2023/04/DSC05298-1-1024x1536.jpg',
    code: 'TSH-002',
    stock: 2,
     
    category: 'Remera'
};

const prod8 = {
    title: 'T-Shirt 3',
    description: 'La ropa que mas te gusta',
    price: 1600,
    thumbnail: 'https://underwavebrand.com/wp-content/uploads/2023/04/DSC05324-1-1091x1536.jpg',
    code: 'TSH-003',
    stock: 2,
     
    category: 'Remera'
};

const prod9 = {
    title: 'T-Shirt 4',
    description: 'La ropa que mas te gusta',
    price: 1400,
    thumbnail: 'https://underwavebrand.com/wp-content/uploads/2023/04/DSC05319-1-1024x1536.jpg',
    code: 'TSH-004',
    stock: 2,
     
    category: 'Computers'
};

const prod10 = {
    title: 'T-Shirt 5',
    description: 'La ropa que mas te gusta"',
    price: 1200,
    thumbnail: 'https://underwavebrand.com/wp-content/uploads/2023/01/R7NM7494-1-1-1-1025x1536.jpg',
    code: 'TSH-005',
    stock: 2,
     
    category: 'Remera'
};

// Pantalones

const prod11 = {
    title: 'Jogger 1',
    description: 'La ropa que mas te gusta',
    price: 300,
    thumbnail: 'https://d28hi93gr697ol.cloudfront.net/64c12ccb-f061-7216/img/Producto/35d39e87-ca61-bacd-f0c7-47aae7494c9d/3-64498de3940a8.webp',
    code: 'JOG-001',
    stock: 2,
     
    category: 'Jogger'
};

const prod12 = {
    title: 'Jogger 2',
    description: 'La ropa que mas te gusta',
    price: 280,
    thumbnail: 'https://d28hi93gr697ol.cloudfront.net/64c12ccb-f061-7216/img/Producto/d3587b0d-5839-de68-d117-6c63018c378c/CARGO-CELESTE-2-63e2aa68b1b85.webp',
    code: 'JOG-002',
    stock: 2,
     
    category: 'Jogger'
};

const prod13 = {
    title: 'Jogger 3',
    description: 'La ropa que mas te gusta',
    price: 260,
    thumbnail: 'https://d28hi93gr697ol.cloudfront.net/64c12ccb-f061-7216/img/Producto/0d2c27e6-f3bd-87bd-0626-fdeb478d27da/3-63dc231049583.webp',
    code: 'JOG-003',
    stock: 2,
     
    category: 'Jogger'
};

const prod14 = {
    title: 'Jogger 4',
    description: 'La ropa que mas te gusta',
    price: 240,
    thumbnail: 'https://d28hi93gr697ol.cloudfront.net/64c12ccb-f061-7216/img/Producto/b7887787-c19c-b3c2-27d4-dc967614d256/2-638127c5d6f51.webp',
    code: 'JOG-004',
    stock: 2,
     
    category: 'Jogger'
};

const prod15 = {
    title: 'Jogger 5',
    description: 'La ropa que mas te gusta',
    price: 220,
    thumbnail: 'https://d28hi93gr697ol.cloudfront.net/64c12ccb-f061-7216/img/Producto/1cdb21ca-af89-c66f-4189-5ffe4242aa1b/CAR-BLUE-3-63e2a70d23d40.webp',
    code: 'JOG-005',
    stock: 2,
    
    category: 'Jogger'
};




const productos = new ProductManager('./src/JSONs/productos.json');

async function main() {
    for (let i = 1; i <= 15; i++) {
        await productos.addProduct(eval(`prod${i}`));
    }
}

main();