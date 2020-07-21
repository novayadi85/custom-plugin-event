import SimpleSchema from "simpl-schema";

export const EventSchemas = new SimpleSchema({
  startDate:  {
    type: Date,
    optional: true,
    label: "Date/time this event was start at"
  },
  endDate:  {
      type: Date,
      optional: true,
      label: "Date/time this event was expired at"
  },
  location:  {
      type: String,
      optional: true
  },
  description: {
    type: String,
    optional: true
  },
  variantId:  {
    type: String,
    optional: true
  },
  productId:  {
      type: String,
      optional: true
  },
});


export const EventSchema = new SimpleSchema({
  "event": {
    type: Array,
    label: "Event",
    optional: true
  },
  "event.$": {
    type: EventSchemas
  },
  
});

export function extendProductSchemas(schemas) {
  const {
    CatalogProduct,
    Product,
  } = schemas;

  CatalogProduct.extend({
    "event": {
      type: Array,
      label: "Event",
      optional: true
    },
    "event.$": {
      type: EventSchemas
    },
    customType:  {
      type: String,
      optional: true
    },
    
  });

  Product.extend({
    "event": {
      type: Array,
      label: "Event Obj",
      optional: true
    },
    "event.$": {
      type: EventSchemas
    },
    customType:  {
      type: String,
      optional: true
    },
  })
}