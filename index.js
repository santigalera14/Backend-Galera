class ProductManager {
    constructor() {
        this.products = []
    }
    addProduct(title, description, price, thumbmail, code, stock) {
        if (!title || !description || !price || !thumbmail || !stock || !code) {
            console.log("ERROR: No se completaron todos los datos")
        } else {
            const checkCode = this.products.find(o => o.code === code)
            if (checkCode) {
                console.log("The code is already in use")
            } else {
                let id 
                if (this.products.length === 0) {
                    id = 1
                } else { id = this.products[this.products.length - 1].id + 1 }
                const newProducts = {
                    id,
                    title,
                    description,
                    price,
                    thumbmail,
                    code,
                    stock,
                }
                this.products.push(newProducts)
            }
        }
    }
    getProducts() {
        console.log (this.products)
    };
    getProductsById(x) {
        const buscado = this.products.find(p => p.id === x)
        if (buscado) {
            console.log (buscado)
        } else {
            console.log ("Not found")
        }
    }
};
const manager = new ProductManager

manager.addProduct("producto prueba",'este es un producto prueba',200,'sin imagen',"abc123",25)
manager.addProduct("producto prueba",'este es un producto prueba',"",'sin imagen',"abc123",25)
manager.getProductsById(1)