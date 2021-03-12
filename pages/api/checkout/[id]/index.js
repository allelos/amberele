import { getCheckout } from "@dataSource/index"

export default async ({ query }, res) => {
  const { id } = query
  try {
    const checkout = await getCheckout(id)
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
