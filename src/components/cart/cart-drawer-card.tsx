'use client'

import { ChevronLeft, ChevronRight, Trash } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card'
import { Label } from '../ui/label'
import { CartItem, useCart } from '@/contexts/cart-context'
import { useProductList } from '@/contexts/product-list'

interface CartDrawerCard {
  cartItem: CartItem
}

export function CartDrawerCard({ cartItem }: CartDrawerCard) {
  const { productList } = useProductList()

  const { productId, quantity } = cartItem

  const product = productList.find((product) => product.id === productId)

  const handledValue = product?.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalValue = (product?.value || 0) * quantity

  return (
    <Card
      key={product?.id}
      className="flex flex-col h-full col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <CardHeader className="pb-2">
        <CardTitle className="max-h-[60px] custom-ellipsis text-xl">
          {product?.name}
        </CardTitle>
        <CardDescription className="max-h-[70px] custom-ellipsis">
          {product?.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <span className="block">{handledValue}</span>
      </CardContent>
      <CardFooter className="justify-between items-center border-t py-2">
        <ProductQuantity quantity={quantity} productId={productId} />
        <RemoveFromCartButton productId={productId} />
        <TotalValue totalValue={totalValue} />
      </CardFooter>
    </Card>
  )
}

function ProductQuantity({ quantity, productId }: CartItem) {
  const { increaseQuantity, decreaseQuantity } = useCart()

  return (
    <div>
      <Label htmlFor="quantity">Quantidade</Label>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className={'p-0 h-8 w-8 rounded-full'}
          disabled={quantity === 1}
          onClick={() => decreaseQuantity(productId)}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span>{quantity}</span>
        <Button
          variant="ghost"
          className="p-0 h-8 w-8 rounded-full"
          onClick={() => increaseQuantity(productId)}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

function RemoveFromCartButton({ productId }: { productId: string }) {
  const { removeFromCart } = useCart()

  return (
    <Button
      variant="ghost"
      className="text-red-500 rounded-full p-0 h-10 w-10 mt-auto mr-auto ml-2"
      onClick={() => removeFromCart(productId)}
    >
      <Trash className="w-5 h-5" />
    </Button>
  )
}

function TotalValue({ totalValue }: { totalValue: number }) {
  return (
    <div>
      <span className="text-sm font-medium leading-none block mb-3">Total</span>
      <span>
        {totalValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
    </div>
  )
}