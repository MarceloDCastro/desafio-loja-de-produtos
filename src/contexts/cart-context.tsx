'use client'

import { ReactNode, createContext, useContext, useState } from 'react'
import { toast } from 'sonner'
import { Product } from './product-context'

export interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    const { id: productId, name: productName } = product

    setCartItems((state) => {
      const productInCart = state.some(
        (product) => product.productId === productId,
      )

      if (productInCart) {
        return state.map((product) => {
          if (product.productId === productId)
            return { ...product, quantity: product.quantity + 1 }

          return product
        })
      }

      return [...state, { productId, quantity: 1 }]
    })
    toast.success(`${productName} adicionado ao carrinho`)
  }

  function removeFromCart(product: Product) {
    const { id: productId, name: productName } = product

    setCartItems((state) => {
      const itemsCopy = [...state]
      const productIndex = itemsCopy.findIndex(
        (product) => product.productId === productId,
      )

      if (productIndex !== -1) itemsCopy.splice(productIndex, 1)

      return itemsCopy
    })
    toast.success(`${productName} removido do carrinho`)
  }

  function increaseQuantity(productId: string) {
    const cartItemsCopy = [...cartItems]

    const productIndex = cartItemsCopy.findIndex(
      (product) => product.productId === productId,
    )

    if (productIndex !== -1) cartItemsCopy[productIndex].quantity += 1

    setCartItems(cartItemsCopy)
  }

  function decreaseQuantity(productId: string) {
    const cartItemsCopy = [...cartItems]

    const productIndex = cartItemsCopy.findIndex(
      (product) => product.productId === productId,
    )

    if (productIndex !== -1) cartItemsCopy[productIndex].quantity -= 1

    setCartItems(cartItemsCopy)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
