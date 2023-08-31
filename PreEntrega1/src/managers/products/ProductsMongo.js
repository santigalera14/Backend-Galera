import {productsModel} from '../../db/models/products.model.js';

class ProductsMongo {

    async getProducts(){
        try {
            const products = await productsModel.paginate(
                {},
                {
                    limit: 6,
                    sort: { timestamp: -1 }
                }
            );

            const info = {
                status: 'success',
                payload: products.docs,
                totalPages: products.totalPages,
                prevPage: products.prevPage,
                nextPage: products.nextPage,
                page: products.page,
                hasPrevPage: products.hasPrevPage,
                hasNextPage: products.hasNextPage,
                prevLink: products.prevLink
                ? `http://localhost:8080/api/products?page=${products.prevPage}`
                : null,
                nextLink: products.nextLink
                ? `http://localhost:8080/api/products?page=${products.nextPage}`
                : null
            }

            return {info, results: products.docs};

        } catch (error) {
            throw error;
        }
    }

    async getProductById(pid){
        try {
            const product = await productsModel.findById(pid);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async addProduct(product){
        try {
            const newProduct = new productsModel(product);
            const productSaved = await newProduct.save();
            return productSaved;
        } catch (error) {
            throw error;
        }
    }

    async updateProductById(pid, product){
        try {
            const productUpdated = await productsModel.findByIdAndUpdate(pid, product); 
            return productUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deleteProductById(pid){
        try {
            const productDeleted = await productsModel.findByIdAndDelete(pid);
            return productDeleted;
        } catch (error) {
            throw error;
        }
    }


}