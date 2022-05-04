import { Checkout, CheckoutAPI, CheckoutQuantity } from "@context/index"
import { useCallback, useEffect, useMemo, useState } from "react"
import useClient from "@dataSource/hooks"

const Provider = ({ children }) => {
  const [checkout, setCheckout] = useState({})
  const [client, loading] = useClient()

  const memoizedChildren = useMemo(() => children, [children])

  useEffect(() => {
    const checkoutId = client.getExistingCheckoutId()
    if (!checkoutId) client.createCheckout(c => setCheckout(c))
    client.fetchCheckout(checkoutId, c => setCheckout(c))
  }, [])

  const { id, lineItems = [] } = checkout

  const action = useCallback(callback => callback(id), [id])

  const addItem = item => action(id => client.postItem(id, item, c => setCheckout(c)))
  const updateItem = item => action(id => client.updateItem(id, item, c => setCheckout(c)))
  const removeItem = itemId => action(id => client.deleteItem(id, itemId, c => setCheckout(c)))
  const addDiscount = code => action(id => client.addDiscount(id, code, c => setCheckout(c)))
  const removeDiscount = () => action(id => client.removeDiscount(id, c => setCheckout(c)))

  const value = useMemo(
    () => ({
      checkout,
      loading
    }),
    [checkout, loading]
  )

  const api = useMemo(
    () => ({
      addItem,
      updateItem,
      removeItem,
      addDiscount,
      removeDiscount
    }),
    [id]
  )

  const quantity = useMemo(
    () => lineItems.reduce((acc, item) => acc + item.quantity, 0),
    [lineItems]
  )

  return (
    <CheckoutAPI.Provider value={api}>
      <Checkout.Provider value={value}>
        <CheckoutQuantity.Provider value={quantity}>{memoizedChildren}</CheckoutQuantity.Provider>
      </Checkout.Provider>
    </CheckoutAPI.Provider>
  )
}

export default Provider
