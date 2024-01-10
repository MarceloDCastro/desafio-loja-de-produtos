'use client'

import { ProductCard } from '@/components/product/product-card'
import { useProductList } from '@/contexts/product-context'

export function ProductList() {
  const { productList } = useProductList()

  return (
    <>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}
