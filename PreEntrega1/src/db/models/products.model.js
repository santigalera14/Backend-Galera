import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        require: true, 
        max: 100 
    },
    description: { 
        type: String, 
        require: true, 
        max: 100 
    },
    price: { 
        type: Number, 
        require: true 
    },
    thumbnail: { 
        type: String
    },
    code: { 
        type: String, 
        require: true, 
        max: 100 
    },
    stock: { 
        type: Number,
        default: 0
    },
    category: { 
        type: String, 
        require: true, 
        max: 100 
    },
    status: { 
        type: Boolean, 
        default: this.stock > 0 ? true : false
    },
    timestamp: { // para poder ordenar por fecha los productos en la vista
        type: Date, 
        default: Date.now 
    },
});

productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model('Products', productsSchema);