import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const cartsSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ],
    total: { 
        type: Number,
        default: this.products.length > 0 ? this.products.reduce((acc, p) => acc + (p.price * p.quantity), 0) : 0 
        // reduce funciona como un for, acc es el acumulador, p es el producto. 
    },
});

export const cartsModel = mongoose.model('Carts', cartsSchema);