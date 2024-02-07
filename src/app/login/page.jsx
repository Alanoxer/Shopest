"use client"
import { useState } from "react"
import Link from "next/link"
import axios, {AxiosError} from "axios"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"



export default function LoginPage(){
  const router = useRouter()


  const [error, setError] = useState("")

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData = new FormData(e.currentTarget)


      const res = await signIn("credentials",{
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })
      if (res?.error) return  setError(res.error)

      if (res?.ok) return router.push("products/page/1")
      


      console.log(res)

    
  }

    return (<>
 <div className="bg-gray-100 flex justify-center items-center h-screen">

    

<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>



<div className=" text-black lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
  <form onSubmit={handleSubmit}>
  {error && <div
  className=" bg-red-500 text-white p-2 mb-2"
  >{error}
    
    </div>}

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Email</label>

      <input 
      type="text" 
      placeholder="email"
      id="email" 
      name="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      />

    </div>


    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>

      <input 
      type="password"
      placeholder="password" 
      id="password" 
      name="password" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      />

    </div>

    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2 px-4 w-full">Sign In</button>
  </form>

  {/* <!-- Sign up  Link --> */}

  <div className="mt-6 text-red-500 text-center">
    <Link href="/register" className="hover:underline">Sign Up here </Link>
  </div>
</div>
</div>
    </>)
}