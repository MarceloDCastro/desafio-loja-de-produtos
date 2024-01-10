import { SignInButton } from '@/components/auth/signin-button'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

export default async function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-128px)]">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[80vw] lg:w-[50vw] min-w-[340px] max-w-[700px] px-10 py-6 space-y-8">
        <div className="flex gap-4 items-center justify-center">
          <ShoppingBag className="w-8 h-8" />
          <h1 className="text-3xl font-bold tracking-tight">Loja</h1>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Link href="/">
            <Button variant="secondary">
              <User className="w-5 h-5 mr-2" /> Entrar como visitante
            </Button>
          </Link>
          <Separator className="max-w-[300px]" />
          <SignInButton />
        </div>
      </div>
    </div>
  )
}
