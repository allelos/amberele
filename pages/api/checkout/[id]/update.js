import { updateItem } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { item } = JSON.parse(body)
    const checkout = await updateItem(id, item)
    res.status(200).json(checkout)
  } catch (e) {
    res.status(400).json(e)
  }
}
