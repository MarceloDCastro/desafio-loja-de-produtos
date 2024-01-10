'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
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
  }

  function removeFromCart(productId: string) {
    setCartItems((state) => {
      const itemsCopy = [...state]
      const productIndex = itemsCopy.findIndex(
        (product) => product.productId === productId,
      )

      if (productIndex !== -1) itemsCopy.splice(productIndex, 1)

      return itemsCopy
    })
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
