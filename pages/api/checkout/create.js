import { createCheckout } from "@dataSource/index"

export default async (req, res) => {
  try {
    const checkout = await createCheckout()
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
