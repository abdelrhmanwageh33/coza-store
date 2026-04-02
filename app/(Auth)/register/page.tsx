

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, refine, z } from "zod"

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
import { useState } from "react"
import Link from "next/link"

const formSchema = z.object({
     name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
   rePassword: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
    phone: z.string().min(11, {
    message: "password must be at least 11 characters.",
  }),
}).refine((data)=>data.password===data.rePassword,{
    error:'repasswoed missmatch password'
})
export default  function page() {
const[isloading,setLoading]=useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name:"",
      email: "",
      password:"",
      rePassword:"",
      phone:""

    },

  })
  const router=useRouter()
async function  onSubmit(values: z.infer<typeof formSchema>){
setLoading(true)
try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`,{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
            'Content-Type':'application/json'
        }

     })
router.push('/Login')
} catch (error) {
    console.log(error);
    
    
}finally{
    setLoading(false)
}
    console.log(values)
}
  return (
   <section className="py-16">

     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-96 mx-auto">
                <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="type your name " {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
            
            
          )}
          
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>repassword</FormLabel>
              <FormControl>
                <Input placeholder="*************************" {...field} />
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
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="01" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
            
            
          )}
          
        />
                     <p className=" text-red-700 mb-12 "> <Link href={'./Login'}  >Dont have account must register</Link></p>

        <Button  type="submit">Submit</Button>
      </form>
    </Form>
   </section>
  )
}