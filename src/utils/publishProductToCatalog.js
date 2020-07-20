import Stripe from 'stripe';
export default async function publishProductToCatalog(catalogProduct, { context, product, shop, variants }) {
    const stripe = new Stripe('sk_test_9rTd5lnpYI0koRXw6Biw9aUM00TvMrroWb');
    const { stripe_id, title } = catalogProduct
    console.log(catalogProduct)
    if(stripe_id || typeof stripe_id != "undefined"){
        //update
        stripe.products.retrieve(
            stripe_id,
            function(err, product) {
                catalogProduct.stripe_id = product.id
            }
        );
    }
    else{
        await stripe.products.create({
            name: title
            },
            function(err, product) {
                if(product){
                    catalogProduct.stripe_id = product.id;
                }
        });
    }
}