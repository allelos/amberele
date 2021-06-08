import { removeDiscount } from "@dataSource/index"

export default async ({ query }, res) => {
  try {
    const { id } = query
    const checkout = await removeDiscount(id)
    res.status(200).json(checkout)
  } catch (e) {
    res.status(400).json(e)
  }
}
