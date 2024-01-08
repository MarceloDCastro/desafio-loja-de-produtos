import { ProductCard } from '@/components/product-card'

export interface Product {
  id: string
  name: string
  description: string
  value: number
}

const products: Product[] = [
  {
    id: '1',
    name: 'Camisa regata branca com azul escuro',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptas enim tenetur, dolores aut quae maxime est cupiditate fugiat. Itaque recusandae aspernatur veritatis quas. Molestias a accusantium modi quod odit.',
    value: 10,
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
  {
    id: '7',
    name: 'Product 7',
    description: 'Description 7',
    value: 70,
  },
  {
    id: '8',
    name: 'Product 8',
    description: 'Description 8',
    value: 80,
  },
  {
    id: '9',
    name: 'Product 9',
    description: 'Description 9',
    value: 90,
  },
  {
    id: '10',
    name: 'Product 10',
    description: 'Description 10',
    value: 100,
  },
  {
    id: '11',
    name: 'Product 11',
    description: 'Description 11',
    value: 110,
  },
  {
    id: '12',
    name: 'Product 12',
    description: 'Description 12',
    value: 120,
  },
  {
    id: '13',
    name: 'Product 13',
    description: 'Description 13',
    value: 130,
  },
  {
    id: '14',
    name: 'Product 14',
    description: 'Description 14',
    value: 140,
  },
  {
    id: '15',
    name: 'Product 15',
    description: 'Description 15',
    value: 150,
  },
  {
    id: '16',
    name: 'Product 16',
    description: 'Description 16',
    value: 160,
  },
]

export default function Home() {
  return (
    <div className="p-5 grid grid-cols-12 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
