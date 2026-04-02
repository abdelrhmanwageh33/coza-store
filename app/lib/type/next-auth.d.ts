import NextAuth , {User} from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
user:{
name:string,
role:string,
email:string,
id:string
},token:{
    token:jwt
}
  }
  interface Session {
 user:{
name:string,
role:string,
email:string,
id:string
},token:{
    token:jwt
}
  }
}