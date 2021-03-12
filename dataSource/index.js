import Client from "shopify-buy"

const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_TOKEN

export const getClient = () => Client.buildClient({ domain, storefrontAccessToken })

const { product, collection, image, shop, checkout } = getClient()

export const getProducts = () => product.fetchAll()
export const getProductByHandle = handle => product.fetchByHandle(handle)

export const getCollectionById = collectionId =>
  collection.fetchWithProducts(collectionId, { productsFirst: 10 })
export const getCollectionByQuery = query => collection.fetchQuery({ query })

export const getImage = (src, maxWidth, maxHeight) =>
  image.helpers.imageForSize({ src }, { maxWidth, maxHeight })

export const getPolicies = () => shop.fetchPolicies()

export const getCheckout = id => checkout.fetch(id)
export const createCheckout = () => checkout.create()
export const addItem = (id, item) => checkout.addLineItems(id, [item])
export const updateItem = (id, item) => checkout.updateLineItems(id, [item])
export const deleteItem = (id, itemId) => checkout.removeLineItems(id, [itemId])
export const addDiscount = (id, discountCode) => checkout.addDiscount(id, discountCode)
export const removeDiscount = id => checkout.removeDiscount(id)

export const parseResponse = (res, defaultValue = []) => {
  try {
    const stringified = JSON.stringify(res)
    return JSON.parse(stringified)
  } catch (e) {
    return defaultValue
  }
}
