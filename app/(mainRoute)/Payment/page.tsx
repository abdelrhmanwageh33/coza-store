"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Header from "@/app/_components/Shared/Header/Header"
import { useCart } from "@/app/lib/context/CartContext"
import { paymentCash } from "@/app/lib/services/cartService"

const formSchema = z.object({
  details: z.string().min(2, { message: "Username must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 characters." }),
  city: z.string().min(2, { message: "City must be in Egypt" }),
})

export default function Page() {
    const {cart}=useCart()
    
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  })

  // زرار 1: SignIn
  const handleSignIn = async (values: z.infer<typeof formSchema>) => {
   const formDate={'shippingAddress':values}
    
paymentCash(cart?.cartId,formDate)
toast.success('information send successfully')
router.replace('/Orders')
  }

  // زرار 2: API مختلف
  const handlePayment = async (values: z.infer<typeof formSchema>) => {
  console.log('visa');
  
  }

  return (
  <section className="mx-auto w-[90%] py-16">
    <Form {...form}>
        <form className="space-y-8 max-w-md mx-auto w-[90%]">
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="0123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Cairo, Egypt" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 my-8">
            <Button type="button" onClick={form.handleSubmit(handleSignIn)}>
              Submit Cash
            </Button>

            <Button type="button" onClick={form.handleSubmit(handlePayment)} variant="secondary">
              Pay Online
            </Button>
          </div>
        </form>
      </Form>
  </section>
  )
}