import { NavLink } from '@/components/nav-link'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ShoppingBag } from 'lucide-react'
import { UserArea } from '@/components/auth/user-area'
import { getServerSession } from 'next-auth'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { nextAuthOptions } from '@/lib/next-auth-options'

export default async function AppLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions)

  return (
    <div>
      <header className="h-16 w-full border-b flex items-center justify-between px-2 sm:px-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex gap-2 items-center mr-4 sm:mr-16">
              <ShoppingBag />
              <h1 className="text-xl font-bold tracking-tight">Loja</h1>
            </div>
          </Link>

          <nav className="flex gap-4 sm:gap-6 text-sm items-center">
            <NavLink href="/">Produtos</NavLink>
            {session && (
              <NavLink href="/cadastrar-produto">Cadastrar produto</NavLink>
            )}
          </nav>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <CartDrawer />
          <UserArea />
        </div>
      </header>
      <div>{children}</div>
    </div>
  )
}
