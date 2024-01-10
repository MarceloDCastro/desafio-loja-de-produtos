import { ProductList } from '../../components/product/product-list'

export default function Home() {
  return (
    <div className="py-10 px-5 md:px-20 xl:px-30 2xl:px-[200px] grid grid-cols-12 gap-5 md:gap-12 2xl:gap-16">
      <ProductList />
    </div>
  )
}
