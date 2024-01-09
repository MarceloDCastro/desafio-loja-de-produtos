'use client'

import { ProductCard } from '@/components/product-card'
import { useProductList } from '@/contexts/product-list'

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
