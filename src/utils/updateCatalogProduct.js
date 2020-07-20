import { decodeProductOpaqueId } from "../xforms/id.js";
import Stripe from 'stripe';
export default async function sendProductToStripe(context, catalogProduct) {
    const { collections } = context;
    const { Catalog, Products } = collections;
    const { productId , title, stripe_id} = catalogProduct;
    const item = await Catalog.findOne({ "product.productId": productId });
    
    await Catalog.updateOne({ "product.productId": productId }, {
        $set: {
          product: catalogProduct
        }
    });

    await Products.updateOne({ _id : productId }, {
        $set: {
            stripe_id: catalogProduct.stripe_id,
        }
    });

    //const product = await Products.findOne({ _id: catalogProduct.productId });
      
   // console.log(catalogProduct)
    // console.log(item)
}