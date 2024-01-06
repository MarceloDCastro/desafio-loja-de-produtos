'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLink extends LinkProps {
  children: ReactNode
}

export function NavLink(props: NavLink) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      data-current={pathname === props.href}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    />
  )
}
