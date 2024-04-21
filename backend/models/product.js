const mongoose=require ('mongoose');
const productSchema = new mongoose.Schema({ //schema created of how the product should look like
    name:String,
    price:Number,
});
const Product = mongoose.model('Product', productSchema)
module.exports= Product;