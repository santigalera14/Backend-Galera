
import * as fs from 'node:fs';

export class ProductManager {
    constructor(path) {
        this.path = path
    }

    async product() {
        try {
            if (fs.existsSync(this.path)) {// busca si hay o no archivo
                const data = await fs.promises.readFile(this.path, 'utf-8')
                return JSON.parse(data) // consultar porque si pongo data =JSON.parse(data) da error pero usandolo en otra variable da correcto

            } else {
                return [] // retorna arreglo vacio para que el addproduct trabaje
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
            if (!title || !description || !price || !thumbnail || !stock || !code) {//analiza si todos los campos estan llenos
                console.log('ERROR: Not all data is complete')
                return
            }
            let list = await this.product()
            const listCode = list.find(e => e.code === code)// busca si el code esta repetido
            if (listCode) {
                console.log("The entered code exists, please enter a new one");
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
            console.log(`The product with the ID ${id} was generated successfully`)

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
            else { console.log(`There is no product with the id ${id}`) }

        } catch { (error) => { return (error) } }
    }
    async deleteProduct(id) {
        try {
            let list = await this.product()
            if (list.findIndex(e => e.id === id) !== -1) {
                const newList = list.filter(e => e.id !== id)
                await fs.promises.writeFile(this.path, JSON.stringify(newList))
                console.log(`The product whit ID ${id} was removed`)
            }
            else { console.log("The product you try delete, no exist") }
        }
        catch { (error) => { return error } }
    }

    async updateProduct(id, k) {

        try {
            let list = await this.product()
            let objKey = Object.keys(k)
            let noId = objKey.find(e => e === "id")
            if (noId) {
                console.log("Cannot modify id, please enter valid values")
                return
            };
            const ub = list.findIndex(e => e.id === id)
            if (ub !== -1) {
                const objRaw = list[ub]
                const objMod = { ...objRaw, ...k }
                list[ub] = objMod
                console.log("Change done")
                fs.promises.writeFile(this.path, JSON.stringify(list))
            }
            else { console.log(`There is no product with the id ${id}`) }


        }
        catch { (error) => { return error } }
    }
}

