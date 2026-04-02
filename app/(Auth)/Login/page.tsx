

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {signIn, useSession} from"next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Header from "@/app/_components/Shared/Header/Header"
import Link from "next/link"
import Footer from "@/app/_components/Shared/Footer"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})
export default  function page() {

  const session = useSession()
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
    },

  })
  const router=useRouter()
async function  onSubmit(values: z.infer<typeof formSchema>){
 const res= await signIn("credentials",{
    email:values.email,
    password:values.password,
    callbackUrl:'/',
    redirect:false

  })
  if(!res?.ok){
    toast.error(res?.error)
    console.log('error');
    
  }else{
    toast.success('login succufly')
    router.replace('/')
  }
console.log(values)
} 
  return (
    <>
   <section className="py-16">

       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-96 mx-auto ">
        <FormField
          control={form.control}
          name="email"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="*************************" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
            
            
          )}
          
        />
             <p className=" text-red-700 mb-12 "> <Link href={'./register'}  >Dont have account must register</Link></p>

        <Button type="submit" className="my-12">Submit</Button>
      </form>
    </Form>
   </section>
   <Footer/>
    </>
  
  )
}

//abdo258525@yahoo.com

    