'use client'

import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart } from '@/contexts/cart-context'
import { Product } from '@/contexts/product-context'

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <Button className="w-full" onClick={() => addToCart(product)}>
      <Plus className="mr-2 h-4 w-4" /> Adicionar ao carrinho
    </Button>
  )
}
