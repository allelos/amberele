import { addDiscount } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { code } = JSON.parse(body)
    const checkout = await addDiscount(id, code)
    res.status(200).json(checkout)
  } catch (e) {
    res.status(400).json(e)
  }
}
