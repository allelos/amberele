import { updateItem } from "@dataSource/index"

export default async ({ query, body }, res) => {
  try {
    const { id } = query
    const { item } = JSON.parse(body)
    const checkout = await updateItem(id, item)
    res.json(checkout)
  } catch (e) {
    res.json(e)
  }
}
