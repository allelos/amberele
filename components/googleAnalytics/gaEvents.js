const currency = "EUR"
const brand = "amberele"

export const addToCartGAEvent = ({ name, price, quantity, category = "bags" }) => {
  window.gtag("event", "add_to_cart", {
    items: [
      {
        item_name: name,
        item_brand: brand,
        item_category: category,
        price,
        currency,
        quantity
      }
    ],
    currency,
    value: price
  })
}
