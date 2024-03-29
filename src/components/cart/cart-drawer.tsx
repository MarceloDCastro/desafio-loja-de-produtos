'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { useCart } from '@/contexts/cart-context'
import { CartDrawerCard } from './cart-drawer-card'
import { Product, useProductList } from '@/contexts/product-context'

export function CartDrawer() {
  const { items } = useCart()
  const { productList } = useProductList()

  const { totalItems, totalValue } = items.reduce(
    (acc, item) => {
      const product = productList.find(
        (product) => product.id === item.productId,
      ) as Product

      return {
        totalItems: acc.totalItems + item.quantity,
        totalValue: acc.totalValue + item.quantity * product.value,
      }
    },
    {
      totalItems: 0,
      totalValue: 0,
    },
  )

  const handledTotalValue = totalValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="rounded-full p-0 h-10 w-10 relative">
          <div>
            {!!totalItems && (
              <div className="h-5 min-w-5 px-1 bg-red-500 rounded-full absolute left-7 top-0">
                <span className="text-xs">{totalItems}</span>
              </div>
            )}
            <ShoppingCart className={'h-5 w-5'} />
          </div>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="pb-5 px-5 md:px-20 xl:px-30 2xl:px-[200px]">
        <DrawerHeader>
          <div className="flex justify-between items-center gap-2 border-b pb-1">
            <DrawerTitle className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />{' '}
              <span className="text-xl">Carrinho</span>{' '}
              <span className="text-lg text-muted-foreground">
                ({totalItems})
              </span>
            </DrawerTitle>

            <div>
              <span className="block">Valor total</span>
              <span className="block">{handledTotalValue}</span>
            </div>
          </div>

          {!totalItems && (
            <DrawerDescription>
              Você não possui itens adicionados ao carrinho.
            </DrawerDescription>
          )}
        </DrawerHeader>

        <div className="grid grid-cols-6 gap-5 md:gap-12 2xl:gap-16 overflow-y-auto max-h-[calc(100vh-200px)] px-3">
          {items.map((cartItem) => (
            <CartDrawerCard key={cartItem.productId} cartItem={cartItem} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
