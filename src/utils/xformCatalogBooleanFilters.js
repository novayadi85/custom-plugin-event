const INVENTORY_PLUGIN_BOOLEAN_FILTERS = ["isEvent", "isCatalog"];
const FILTER_FIELD = 'customType'
/**
 *
 * @method xformCatalogBooleanFilters
 * @memberof Inventory
 * @summary Transforms a boolean filters array into an array of Mongo expressions.
 * @param {Object} context - contains per-request state
 * @param {Object[]} booleanFilters - Array of Boolean filters
 * @returns {Object[]} Array Mongo filter expressions
 */
export default async function xformCatalogBooleanFilters(context, booleanFilters) {
  const mongoFilters = [];

  // Add inventory plugin's filters, if any
  for (const filter of booleanFilters) {
    if (INVENTORY_PLUGIN_BOOLEAN_FILTERS.includes(filter.name)) {
      let { value } = filter;
      if(filter.name === 'isEvent' && value === true){
        mongoFilters.push({ [`product.${FILTER_FIELD}`]: 'event' });
      }
      else if(filter.name === 'isCatalog' && value === true){
        mongoFilters.push({ [`product.${FILTER_FIELD}`]: 'catalog' });
      }
    }
  }

  return mongoFilters;
}

