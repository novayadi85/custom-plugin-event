import { decodeShopOpaqueId } from "../../xforms/id.js";

export default async function event(_, args, context, info) {
    const { shopId: opaqueShopId, productId , variantId } = args;
    
    const shopId = decodeShopOpaqueId(opaqueShopId);
    
    const filters = {
        productId, 
        variantId,
    }

    return context.queries.events(context, shopId, filters);
    
}