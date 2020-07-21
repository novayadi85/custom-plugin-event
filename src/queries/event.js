import { decodeProductOpaqueId } from "../xforms/id.js";

export default async function events(context, shopId, filters) {
    const { collections } = context;
    const { Catalog } = collections;
    
    if (filters) {
        const { productId } = filters
        const item = await Catalog.findOne({ "product.productId": decodeProductOpaqueId(productId) });
        const { product: productItem } = item;
        const { event } = productItem
        return event;
    }

    return null

}