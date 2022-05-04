const currency = "EUR"
const brand = "amberele"

const getNormalizedItems = items =>
  items.map(({ id, title, quantity, variant: { price } }) => ({
    item_id: id,
    item_name: title,
    item_brand: brand,
    item_category: "bags",
    quantity,
    price: +price
  }))

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

export const viewCartGAEvent = ({ totalPrice, code, items }) => {
  window.gtag("event", "view_cart", {
    currency,
    value: +totalPrice,
    items: getNormalizedItems(items),
    ...(code && { coupon: code })
  })
}

export const beginCheckoutGAEvent = ({ totalPrice, code, items }) => {
  if (!items) return

  window.gtag("event", "begin_checkout", {
    currency,
    value: +totalPrice,
    items: getNormalizedItems(items),
    ...(code && { coupon: code })
  })
}
