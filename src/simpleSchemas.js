import SimpleSchema from "simpl-schema";

export const EventSchema = new SimpleSchema({
  host: {
    type: String,
    label: "Host of event"
  },
  start: {
    type: Date,
    label: "Date/time this event was start at"
  },
  end: {
    type: Date,
    optional: true,
    label: "Date/time this event was expired at"
  },
  location: {
    type: String,
    label: "Location"
  },
  description: {
    type: String,
    label: "Product description",
    optional: true
  },
  map: {
    type: String,
    label: "Event map",
    optional: true
  }
});


export function extendProductSchemas(schemas) {
  const {
    CatalogProduct,
    Product,
  } = schemas;

  CatalogProduct.extend({
    "event": {
      type: EventSchema,
      label: "Event",
      optional: true
    }
  });

  Product.extend({
    "event": {
      type: EventSchema,
      label: "Event Obj",
      optional: true
    }
  })
}