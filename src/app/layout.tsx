import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from '@/providers/session-provider'
import ProductListProvider from '@/contexts/product-list'
import { CartProvider } from '@/contexts/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { template: '%s | Loja', default: 'Loja' },
  description: 'Loja de produtos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <SessionProvider>
          <ProductListProvider>
            <CartProvider>
              <Toaster />
              {children}
            </CartProvider>
          </ProductListProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
