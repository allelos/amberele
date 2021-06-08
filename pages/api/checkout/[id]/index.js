import { getCheckout } from "@dataSource/index"

export default async ({ query }, res) => {
  const { id } = query
  try {
    const checkout = await getCheckout(id)
    return checkout ? res.status(200).json({ checkout }) : res.status(410).json({})
  } catch (e) {
    res.status(400).json(e)
  }
}
