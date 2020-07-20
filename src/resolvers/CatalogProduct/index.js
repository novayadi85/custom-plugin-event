import { decodeProductOpaqueId } from "../../xforms/id.js";

export default {
    event: async (node, args, context, info) => {
        const { event } = node || {};
        if(typeof event != "undefined"){
            const events = await Promise.all(event.map(async _catalog => {
                
                const productId = decodeProductOpaqueId(_catalog.productId)
                const variantId = decodeProductOpaqueId(_catalog.variantId)
                const filter = {
                    productId,
                    variantId
                }
                _catalog.event = await context.queries.events(context, false, filter);
                _catalog.variantId = decodeProductOpaqueId(_catalog.variantId)
                
                return _catalog
    
            }));

            node.event = events

            return events
        }
    }
}