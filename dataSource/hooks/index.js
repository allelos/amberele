import { useState, useCallback } from "react"
import { addToCartGAEvent } from "@components/googleAnalytics/gaEvents"

const getExistingCheckoutId = () => localStorage.getItem("checkoutId")
const setCheckoutId = id => localStorage.setItem("checkoutId", id)

const handleSuccess = ({ setLoading, callback }) => checkout => {
  setLoading(false)
  callback(checkout)
}
const handleError = ({ setLoading }) => () => {
  setLoading(false)
  console.log("something went wrong")
}

const useCheckout = () => {
  const [loading, setLoading] = useState()

  const createCheckout = useCallback(callback => {
    setLoading(true)
    fetch("/api/checkout/create")
      .then(res => res.json())
      .then(checkout => {
        setLoading(false)
        const { completedAt, id } = checkout
        if (!completedAt) {
          setCheckoutId(id)
          callback(checkout)
        }
      })
      .catch(handleError({ setLoading }))
  }, [])

  const fetchCheckout = useCallback((id, callback) => {
    setLoading(true)
    fetch(`/api/checkout/${id}`)
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .catch(handleError({ setLoading }))
  }, [])

  const postItem = useCallback((id, item, callback) => {
    const { variantId, name, price, quantity } = item
    setLoading(true)
    fetch(`/api/checkout/${id}/add`, {
      method: "POST",
      body: JSON.stringify({ item: { variantId, quantity } })
    })
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .then(() => addToCartGAEvent({ name, price, quantity }))
      .catch(handleError({ setLoading }))
  }, [])

  const updateItem = useCallback((id, item, callback) => {
    setLoading(true)
    fetch(`/api/checkout/${id}/update`, {
      method: "POST",
      body: JSON.stringify({ item })
    })
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .catch(handleError({ setLoading }))
  }, [])

  const deleteItem = useCallback((id, itemId, callback) => {
    setLoading(true)
    fetch(`/api/checkout/${id}/delete`, {
      method: "POST",
      body: JSON.stringify({ itemId })
    })
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .catch(handleError({ setLoading }))
  }, [])

  const addDiscount = useCallback((id, code, callback) => {
    setLoading(true)
    fetch(`/api/checkout/${id}/discounts/add`, {
      method: "POST",
      body: JSON.stringify({ code })
    })
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .catch(handleError({ setLoading }))
  })

  const removeDiscount = useCallback((id, callback) => {
    setLoading(true)
    fetch(`/api/checkout/${id}/discounts/delete`)
      .then(res => res.json())
      .then(handleSuccess({ setLoading, callback }))
      .catch(handleSuccess({ setLoading }))
  })

  const client = {
    getExistingCheckoutId,
    createCheckout,
    fetchCheckout,
    postItem,
    updateItem,
    deleteItem,
    addDiscount,
    removeDiscount
  }

  return [client, loading]
}

export default useCheckout
