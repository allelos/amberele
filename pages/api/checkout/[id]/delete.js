import { deleteItem } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { itemId } = JSON.parse(body)
    const checkout = await deleteItem(id, itemId)
    res.status(200).json(checkout)
  } catch (e) {
    res.status(400).json(e)
  }
}
