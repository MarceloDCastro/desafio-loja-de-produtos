'use client'

import { createContext, useContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  description: string
  value: number
}

const productListInitialValue: Product[] = [
  {
    id: '1',
    name: 'Camisa regata branca com azul escuro',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptas enim tenetur, dolores aut quae maxime est cupiditate fugiat. Itaque recusandae aspernatur veritatis quas. Molestias a accusantium modi quod odit.',
    value: 99.99,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description 2',
    value: 20,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description 3',
    value: 30,
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'Description 4',
    value: 40,
  },
  {
    id: '5',
    name: 'Product 5',
    description: 'Description 5',
    value: 50,
  },
  {
    id: '6',
    name: 'Product 6',
    description: 'Description 6',
    value: 60,
  },
]

interface ProductListContextProps {
  productList: Product[]
  addProduct: (product: Product) => void
}

export const ProductListContext = createContext({} as ProductListContextProps)

export default function ProductListProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [productList, setProductList] = useState<Product[]>(
    productListInitialValue,
  )

  function addProduct(product: Product) {
    setProductList((prevState) => [...prevState, product])
  }

  return (
    <ProductListContext.Provider value={{ productList, addProduct }}>
      {children}
    </ProductListContext.Provider>
  )
}

export const useProductList = () => useContext(ProductListContext)
