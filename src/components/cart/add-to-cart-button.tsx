'use client'

import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: string
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <Button className="w-full" onClick={() => addToCart(productId)}>
      <Plus className="mr-2 h-4 w-4" /> Adicionar ao carrinho
    </Button>
  )
}
