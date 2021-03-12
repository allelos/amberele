import Grid from "@organisms/products/grid"
import Product from "@organisms/products/product"

const Products = ({ items }) => (
  <Grid as="main">
    {items.map(({ id, ...rest }) => (
      <Product key={id} {...rest} />
    ))}
  </Grid>
)

export default Products
