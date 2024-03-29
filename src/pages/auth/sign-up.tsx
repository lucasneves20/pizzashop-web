import { Helmet } from 'react-helmet-async'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"

const signUpForm = z.object({
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)

    toast.success("deu tudo certo meu chapa", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignUp(data)
      }
    })
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')}/>
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
