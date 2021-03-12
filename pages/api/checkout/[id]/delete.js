import { deleteItem } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { itemId } = JSON.parse(body)
    const checkout = await deleteItem(id, itemId)
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
