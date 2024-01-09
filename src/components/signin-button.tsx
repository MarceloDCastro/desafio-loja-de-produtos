'use client'

import { Button } from './ui/button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export function SignInButton() {
  return (
    <Button onClick={() => signIn('google')}>
      <Image
        src="/google.svg"
        alt="Google Logo"
        className="mr-3"
        width={20}
        height={20}
        priority
      />{' '}
      Entrar com Google
    </Button>
  )
}
