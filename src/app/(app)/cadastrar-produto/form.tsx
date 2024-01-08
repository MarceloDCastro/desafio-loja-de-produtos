'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { Plus, Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const productFormSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
  value: z
    .string()
    .min(0, { message: 'Valor deve ser maior que zero' })
    .refine((value) => Number(value.replace(',', '.')), 'Número inválido'),
  description: z
    .string()
    .min(5, { message: 'Descrição deve ter no mínimo 5 caracteres' }),
})

type ProductForm = z.infer<typeof productFormSchema>

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(productFormSchema),
  })

  const router = useRouter()

  function onSubmit(data: ProductForm) {
    const values = {
      ...data,
      value: Number(data.value.replace(',', '.')),
    }
    console.log(values)

    toast.success('Produto cadastrado com sucesso!', {
      cancel: {
        label: 'Fechar',
      },
    })

    router.push('/')
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          placeholder="Digite o nome do produto"
          {...register('name')}
        />
        {errors.name && (
          <span className="text-red-500 text-xs">{errors.name.message}</span>
        )}
      </div>
      <div>
        <Label htmlFor="value">Preço</Label>
        <Input
          type="text"
          id="value"
          placeholder="49,99"
          icon={<span className="text-muted-foreground text-xs">R$</span>}
          {...register('value')}
        />
        {errors.value && (
          <span className="text-red-500 text-xs">{errors.value.message}</span>
        )}
      </div>
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Input
          type="text"
          id="description"
          placeholder="Digite a descrição do produto"
          {...register('description')}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="flex gap-5 justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push('/')}
        >
          <Undo2 className="mr-2 h-4 w-4" /> Abandonar
        </Button>
        <Button type="submit">
          <Plus className="mr-2 h-4 w-4" /> Cadastrar
        </Button>
      </div>
    </form>
  )
}
