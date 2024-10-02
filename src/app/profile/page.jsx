"use client"
import { useState, useEffect } from "react"
import {useSession} from "next-auth/react"
import { usePathname } from "next/navigation"
import axios from "axios"
import Profile from "../components/Profile"


export default function ProfilePage(){
  const [user, setUser] = useState()
  const [userProducts, setUserProducts] = useState()
  const {data: session, status} = useSession()
  const path = usePathname()
  console.log(session, status)
  
  useEffect(()=>{

    const email = session?.user?.email
    const getUser = async()=>{
      const userFound = await axios.get(`https://shopest-lyart.vercel.app/api/users`,
        {
          params:{
            email : email
          }
        }
        );
        setUser(userFound.data)
        console.log(userFound.data)
    }

    const getUserProducts = async()=>{
      const productsUser = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
        {
          params:{
            email : email
          }
        }
        );
        setUserProducts(productsUser.data)
        console.log(productsUser.data)
    }
    if(email)
    getUser()
    getUserProducts()

  }, [])

    if(user !== null && session !== null )
    return (
      <Profile user={user} userProducts={userProducts}/>
    ) 
    else return (<>Cargando...</>)
}
