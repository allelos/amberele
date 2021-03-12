import { removeDiscount } from "@dataSource/index"

export default async ({ query }, res) => {
  try {
    const { id } = query
    const checkout = await removeDiscount(id)
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
