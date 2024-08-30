"use client"
import { useState } from "react"
import Link from "next/link"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"


export default function LoginPage(){
  const router = useRouter()

  const [error, setError] = useState()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

      const res = await signIn("credentials",{
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })
      if (res?.error) return  setError(res.error)

      if (res?.ok) return router.push("products/page/0")

  }

    return (<>
 <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
   
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in to continue</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
    {error && <div
      classNameName=" bg-red-500 text-white p-2 mb-2"
      >{error}
    
    </div>}

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-balance">Password</label>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="password" required className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-400">
      Not a member?  
      <Link href="/register" className="font-semibold leading-6 text-red-500 hover:text-red-400"> Register here</Link>
    </p>
  </div>
</div>
    </>)
}