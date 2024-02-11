"use client"
import { useState } from "react"
import Link from "next/link"
import axios, {AxiosError} from "axios"
import {signIn} from "next-auth"
import { useRouter } from "next/navigation"




export default function RegisterPage(){

  const router = useRouter()

  const [error, setError] = useState()

  const handleSubmit = async (e)=>{
    e.preventDefault()

    

    try {
      const formData = new FormData(e.currentTarget)
      
      const signUpRes = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname")
      },{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(signUpRes)

      const res = await signIn("credentials",{
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })
      console.log(res)

      if (res?.ok) return router.push("/products/page/1")




    } catch (error) {
      if(error instanceof AxiosError){
        setError(error.response?.data.message)
      }

    }
  }

    return (<>
 <div className="bg-gray-100 flex justify-center items-center h-screen">

    {/* <!-- Left: Image --> */}

<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>

{/* <!-- Right: Login Form --> */}

<div className=" text-black lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
  <form onSubmit={handleSubmit}>
  {error && <div
  className=" bg-red-500 text-white p-2 mb-2"
  >{error}
    
    </div>}

    {/* <!-- Username Input --> */}

    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Fullname</label>

      <input 
      type="text"
      placeholder="fullname"
      id="fullname" 
      name="fullname" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>

    {/* <!-- email Input --> */}

    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Email</label>

      <input 
      type="text" 
      placeholder="email"
      id="email" 
      name="email" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>

    {/* <!-- Password Input --> */}

    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>

      <input 
      type="password"
      placeholder="password" 
      id="password" 
      name="password" 
      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>

    {/* <!-- Remember Me Checkbox --> */}

    {/* <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div> */}

    {/* <!-- Forgot Password Link --> */}

    {/* <div className="mb-6 text-blue-500">
      <Link href="#" className="hover:underline">Forgot Password?</Link>
    </div> */}

    {/* <!-- Login Button --> */}

    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
  </form>

  {/* <!-- Sign up  Link --> */}

  <div className="mt-6 text-red-500 text-center">
    <Link href="/login" className="hover:underline">Log in here </Link>
  </div>
</div>
</div>
    </>)
}