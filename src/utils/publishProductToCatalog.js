export default async function publishProductToCatalog(catalogProduct, { product}) {
    const { event, customType} = product || []
    catalogProduct.customType = customType || 'catalog';
    
    if(typeof event != "undefined"){
        const events = await Promise.all(event.map(async item => {
            const { startDate, endDate } = item
            const start = new Date(startDate);  
            const expired = new Date(endDate) 

            if (endDate !== null && expired < start) {    
                throw Error ('Invalid Date')
            }
           
            item.variantId = catalogProduct.variantId
            item.productId = catalogProduct.productId
            return item

        }));
         
        catalogProduct.event  = events
        
    }

   
}