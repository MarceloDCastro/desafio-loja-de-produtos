import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ProductForm } from './form'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function RegisterProduct() {
  const session = await getServerSession(nextAuthOptions)

  if (!session) redirect('/')

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-128px)]">
      <Card className="w-[80vw] lg:w-[50vw] min-w-[340px] max-w-[700px] px-4 py-2">
        <CardHeader>
          <CardTitle>Cadastrar produto</CardTitle>
          <CardDescription>
            Preencha os campos e cadastre um novo produto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </div>
  )
}
