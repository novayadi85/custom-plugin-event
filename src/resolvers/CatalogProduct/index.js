export default {
    event: async (node) => {
        const { event } = node || {};

        if (!event) return null
        const { start, end } = event
        const startDate = new Date(start);  
        const endDate = new Date(end) 

        if (end && endDate < startDate) {    
            throw Error('End Date must be later that start date')
        }

        node.event = event
        return event
    }
}