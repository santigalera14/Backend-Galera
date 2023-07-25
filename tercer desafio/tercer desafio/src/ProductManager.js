
import * as fs from 'node:fs';

export class ProductManager {
    constructor(path) {
        this.path = path
    }

    async product() {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8')
                return JSON.parse(data) 

            } else {
                return [] // devuelve el arreglo vacio para que el addproduct trabaje
            }
        } catch {
            (error) => { return error }
        }
    };
    
    async getProducts(){
        try{
            let variablew=await this.product()
            console.log(await variablew)
        }catch{(error) => { return error }}
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            if (!title || !description || !price || !thumbnail || !stock || !code) {//analiza si esta todo lleno
                console.log('ERROR: no se borro toda la informacion')
                return
            }
            let list = await this.product()
            const listCode = list.find(e => e.code === code)// busca si el codigo esta repetido
            if (listCode) {
                console.log("El codigo ingresado ya existe, por favor ingresar uno nuevo");
                return
            };
            let obj = {
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }
            let id
            if (list.length == 0) {
                id = 1;
            } else {
                id = list[list.length - 1].id + 1
            }

            list.push({ ...obj, id })
            await fs.promises.writeFile(this.path, JSON.stringify(list))
            console.log(`El producto con el ID ${id} fue generado con exito`)

        }
        catch { (error) => { console.log("error") } }
    };

    async getProductsById(id) {
        try {
            let list = await this.product()
            const itemId = list.find(e => e.id === id)
            if (itemId) {
                console.log(itemId)
                return itemId
            }
            else { console.log(`No hay producto con este id ${id}`) }

        } catch { (error) => { return (error) } }
    }
    async deleteProduct(id) {
        try {
            let list = await this.product()
            if (list.findIndex(e => e.id === id) !== -1) {
                const newList = list.filter(e => e.id !== id)
                await fs.promises.writeFile(this.path, JSON.stringify(newList))
                console.log(`El producto con el id ${id} fue removido`)
            }
            else { console.log("El producto que intentas borrar no existe") }
        }
        catch { (error) => { return error } }
    }

    async updateProduct(id, k) {

        try {
            let list = await this.product()
            let objKey = Object.keys(k)
            let noId = objKey.find(e => e === "id")
            if (noId) {
                console.log("No se puede modificar el id, por favor ingresar un valor valido")
                return
            };
            const ub = list.findIndex(e => e.id === id)
            if (ub !== -1) {
                const objRaw = list[ub]
                const objMod = { ...objRaw, ...k }
                list[ub] = objMod
                console.log("Cambio realizado con exito")
                fs.promises.writeFile(this.path, JSON.stringify(list))
            }
            else { console.log(`No existe producto con ese id${id}`) }


        }
        catch { (error) => { return error } }
    }
}


const instanciaManager = new ProductManager("archivo.json")
instanciaManager.product()

// TESTING

/* const manager = new ProductManager("arhivo.json")  */
/* manager.getProducts() */ 
/* manager.addProduct('mate',"madera", 220, " ", 1,22) */
/*  manager.addProduct('yerba','organica',190, " ", 2,22) */
/* manager.addProduct('termo ',"palstico", 230, " ", 5,22) */
/* manager.addProduct('matelisto',"toma mates", 22, " ", 88,22) */
/* manager.addProduct('bombilla',"alpaca", 2200, " ", 44,22)  */
/* export const c = manager.getProducts() */
/* manager.getProductsById(2) */
/* manager.updateProduct(2,{title:"hola"}) */
/* manager.getProducts() */
/* manager.deleteProduct(5) */