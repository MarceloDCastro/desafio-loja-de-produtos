import { NavLink } from '@/components/nav-link'
import Link from 'next/link'
import { ReactNode } from 'react'
import { ShoppingBag } from 'lucide-react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="h-16 w-full border-b flex items-center px-5">
        <Link href="/">
          <div className="flex gap-2 items-center mr-16">
            <ShoppingBag />
            <h1 className="text-xl font-bold tracking-tight">Loja</h1>
          </div>
        </Link>

        <nav className="flex gap-6 text-sm">
          <NavLink href="/">Produtos</NavLink>
          <NavLink href="/cadastrar-produto">Cadastrar produto</NavLink>
        </nav>
      </header>
      <div>{children}</div>
    </div>
  )
}
