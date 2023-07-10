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
            console.log ("No se encontro")
        }
    }
};
const manager = new ProductManager

manager.addProduct("prueba de producto",'esto es una prueba',200,'image not found',"a",10)
manager.addProduct("prueba de producto",'esto es una prueba',50,'image not found',"b",20)
manager.getProductsById(1)