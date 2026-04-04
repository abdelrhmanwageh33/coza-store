import { NextAuthOptions } from "next-auth";
import CredentialsProvider from"next-auth/providers/credentials"
export const authOptions:NextAuthOptions={
    pages:{signIn:'/Login'},
    providers:[
         CredentialsProvider({
             name: "Credentials",
                credentials: {
      email: { label: "email", type: "email", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
     async authorize(credentials){
      const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()

      // If no error and we have user data, return it
      if (res.ok && data) {
        return {
  id: data.user.email,
  name: data.user.name,
  email: data.user.email,
  role: data.user.role,
  accessToken: data.token, // 🔥 مهم
}
      }else{
        throw Error(data?.message||'erroe in data')
      }
      
      
    } 
        

         })
    ],
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.user = {
        name: user.name,
        email: user.email,
        role: user.role,
        id: user.id,
      }
      token.accessToken = user.accessToken
    }
    return token
  },

  async session({ session, token }) {
    session.user = token.user
    session.accessToken = token.accessToken
    return session
  },
}

}

// // 1. Login (User Input)
// المستخدم يكتب email + password
// react-hook-form + zod validation
// تجهيز البيانات للإرسال

// // 2. Submit Form
// المستخدم يضغط submit
// handleSubmit يشغل onSubmit
// البيانات تبقى جاهزة للإرسال

// // 3. signIn (Frontend → NextAuth)
// استدعاء signIn("credentials")
// إرسال email + password لـ NextAuth
// مش بنضرب API مباشرة

// // 4. NextAuth يستقبل الطلب
// NextAuth يشوف provider = Credentials
// يشغل authorize(credentials)

// // 5. authorize (NextAuth → Backend)
// إرسال request للـ API (/signin)
// POST فيه email + password
// انتظار رد الباك اند

// // 6. Backend Response
// لو صح → يرجع user + token
// لو غلط → يرجع error message

// // 7. Return من authorize
// إرجاع { user, token, id }
// البيانات دي تروح للـ jwt callback

// // 8. jwt callback (Storage Step)
// استقبال user لأول مرة login
// تخزين البيانات داخل token
// token.user = user.user
// token.token = user.token

// // 9. NextAuth JWT
// إنشاء JWT خاص بـ NextAuth
// تخزينه في cookie
// الحفاظ على حالة تسجيل الدخول

// // 10. session callback (Expose Data)
// تحويل البيانات من token → session
// session.user = token.user
// session.token = token.token

// // 11. Frontend Access
// useSession أو getServerSession
// الوصول لـ session.user و session.token

// // 12. استخدام التوكن
// إرسال session.token مع أي API
// Authorization: Bearer token

// // 13. Redirect بعد Login
// لو success → redirect للصفحة الرئيسية
// لو error → عرض رسالة error

//jjjjfkl;kmjjnfomfp;n;sln
// //كامل (ركز هنا 🔥)
// 1. Login
// authorize يتنادى
// يرجع user + token
// 2. jwt callback
// يحطهم جوه JWT
// يتخزن في cookie (httpOnly)
// 3. كل request بعد كده
// NextAuth:
// يقرأ الكوكي
// يفك JWT
// يبعت لـ session callback
// 4. session callback
// يرجعلك session جاهز في الفرونت