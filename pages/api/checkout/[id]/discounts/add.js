import { addDiscount } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { code } = JSON.parse(body)
    const checkout = await addDiscount(id, code)
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
