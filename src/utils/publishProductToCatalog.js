export default function publishProductToCatalog(catalogProduct, { product}) {
    const { event } = product || {}
    if (!event) return null

    const { start, end } = event
    const startDate = new Date(start);  
    const endDate = new Date(end) 

    if (end && endDate < startDate) {    
        throw Error('End Date must be later that start date')
    }

    catalogProduct.event = event
    return event   
}

