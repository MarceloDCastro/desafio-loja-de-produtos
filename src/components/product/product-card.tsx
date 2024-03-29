import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Product } from '@/contexts/product-context'
import { AddToCartButton } from '../cart/add-to-cart-button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const handledValue = product.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card className="col-span-12 sm:col-span-6 lg:col-span-4 h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="max-h-[60px] custom-ellipsis text-xl">
          {product.name}
        </CardTitle>
        <CardDescription className="max-h-[70px] custom-ellipsis">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <span className="block">{handledValue}</span>
      </CardContent>
      <CardFooter>
        <AddToCartButton product={product} />
      </CardFooter>
    </Card>
  )
}
