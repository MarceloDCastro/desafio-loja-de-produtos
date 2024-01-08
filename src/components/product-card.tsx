import { Product } from '@/app/(app)/page'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const handledValue = product.value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2 h-full flex flex-col">
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
        <Button className="w-full">
          <Plus /> Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}
