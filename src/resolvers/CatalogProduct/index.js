export default {
    event: async (node) => {
        const { event } = node || {};
        
        if(typeof event != "undefined"){
            const events = await Promise.all(event.map(async item => {
                const { startDate, endDate } = item
                const start = new Date(startDate);  
                const expired = new Date(endDate) 

                if (endDate !== null && expired < start) {    
                    //throw Error ('Invalid Date')
                    return []
                }
                
                return item
            }));
             
            node.event = events
            
            return events
            
        }
    }
}