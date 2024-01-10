'use client'

import { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface Product {
  id: string
  name: string
  description: string
  value: number
}

const productListInitialValue: Product[] = [
  {
    id: uuidv4(),
    name: 'Camiseta regata branca',
    description:
      'A clássica camiseta regata branca, perfeita para dias ensolarados. Feita com algodão macio e confortável, é uma escolha elegante e versátil para qualquer ocasião.',
    value: 59.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta regata preta',
    description:
      'Uma camiseta regata preta moderna e estilosa, ideal para eventos noturnos ou para adicionar um toque de sofisticação ao seu visual diário.',
    value: 59.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta básica amarela',
    description:
      'Esta camiseta básica amarela é perfeita para dar um toque de cor ao seu guarda-roupa. Feita com material de alta qualidade, é confortável e vibrante.',
    value: 64.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta básica cinza',
    description:
      'Uma camiseta básica na cor cinza, versátil e fácil de combinar. Confeccionada com tecido macio, proporcionando conforto durante todo o dia.',
    value: 64.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta esportiva azul',
    description:
      'Camiseta esportiva azul projetada para oferecer máximo desempenho durante atividades físicas. Respirável, leve e estilosa para qualquer prática esportiva.',
    value: 79.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta esportiva verde',
    description:
      'Com design moderno, esta camiseta esportiva verde é perfeita para os amantes de atividades ao ar livre. Confortável, resistente e cheia de estilo.',
    value: 79.99,
  },
  {
    id: uuidv4(),
    name: 'Camiseta esportiva vermelha',
    description:
      'Uma camiseta esportiva vibrante na cor vermelha, oferecendo tanto estilo quanto funcionalidade. Ideal para se destacar durante seus treinos e atividades físicas.',
    value: 79.99,
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
