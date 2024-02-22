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

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img className="mx-auto h-20 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="Your Company"/> */}
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Sign in to continue</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
    {error && <div
      classNameName=" bg-red-500 text-white p-2 mb-2"
      >{error}
    
    </div>}

      <div>
        <label for="fullname" className="block text-sm font-medium leading-6 text-balance">fullname</label>
        <div className="mt-2">
          <input id="fullname" name="fullname" autoComplete="false" type="text" required className=" pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-balance">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="text" autoComplete="false" required className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="password" className="block text-sm font-medium leading-6 text-balance">Password</label>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="false" required className="pl-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-red-500 focus:ring-2 focus:ring-inset focus:ring-balck sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-400">
      Do you have a account here?  
      <Link href="/login" className="ml-2 font-semibold leading-6 text-red-500 hover:text-red-400">Login here</Link>
    </p>
  </div>
</div>
 {/* <div classNameName="bg-gray-100 flex justify-center items-center h-screen">



<div classNameName="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" classNameName="object-cover w-full h-full"/>
</div>



<div classNameName=" text-black lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 classNameName="text-2xl font-semibold mb-4">Sign Up</h1>
  <form onSubmit={handleSubmit}>
  {error && <div
  classNameName=" bg-red-500 text-white p-2 mb-2"
  >{error}
    
    </div>}


    <div classNameName="mb-4">
      <label htmlFor="username" classNameName="block text-gray-600">Fullname</label>

      <input 
      type="text"
      placeholder="fullname"
      id="fullname" 
      name="fullname" 
      classNameName="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>


    <div classNameName="mb-4">
      <label htmlFor="username" classNameName="block text-gray-600">Email</label>

      <input 
      type="text" 
      placeholder="email"
      id="email" 
      name="email" 
      classNameName="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>

    <div classNameName="mb-4">
      <label htmlFor="password" classNameName="block text-gray-600">Password</label>

      <input 
      type="password"
      placeholder="password" 
      id="password" 
      name="password" 
      classNameName="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
      autoComplete="off"/>

    </div>

    

    <button type="submit" classNameName="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
  </form>

  

  <div classNameName="mt-6 text-red-500 text-center">
    <Link href="/login" classNameName="hover:underline">Log in here </Link>
  </div>
</div>
</div> */}
    </>)
}