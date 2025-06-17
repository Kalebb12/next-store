import ProductsRow from "./ProductRow"
import { Button } from "./ui/button"

const NewArrivals = () => {
  return (
    <div className="px-5 py-15 text-center space-y-10">
        <h1 className="font-bold font-integral text-5xl">New Arrivals</h1>
        <ProductsRow url="/api/products/new-arrivals"/>
        <Button variant="outline">View All</Button>
    </div>
  )
}

export default NewArrivals