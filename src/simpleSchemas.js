import SimpleSchema from "simpl-schema";

export function extendProductSchemas(schemas) {
  const {
    CatalogProduct,
    Product,
  } = schemas;

  const Event = new SimpleSchema({
    variantId:  {
        type: String,
        optional: true
    },
    productId:  {
        type: String,
        optional: true
    },
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
  });
  
  CatalogProduct.extend({
    "event": {
      type: Array,
      label: "Event",
      optional: true
    },
    "event.$": {
      type: new SimpleSchema({
        event: {
          label: "Event Detail",
          optional: true,
          type: Event
        },
        productId: {
          type: String,
          label: "Product Id",
          optional: true
        },
        variantId: {
          type: String,
          label: "Variant Id",
          optional: true
        },
      })
    },
    customType:  {
        type: String,
        optional: true
    },
    
  });

  Product.extend({
    "event": {
        type: Array,
        label: "Event",
        optional: true
      },
      "event.$": {
        type: new SimpleSchema({
          event: {
            label: "Event Detail",
            optional: true,
            type: Event
          },
          productId: {
            type: String,
            label: "Product Id",
            optional: true
          },
          variantId: {
            type: String,
            label: "Variant Id",
            optional: true
          },
        })
    },
    customType:  {
      type: String,
      optional: true
    },
  })
}