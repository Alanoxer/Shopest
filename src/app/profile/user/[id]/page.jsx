"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import Profile from "@/app/components/Profile"

export default function UserPage({params}){
  const {id} = params
  const [user, setUser] = useState()
  const [userProducts, setUserProducts] = useState()
  useEffect(()=>{
    const getUser = async()=>{
      const userFound = await axios.get(`https://shopest-lyart.vercel.app/api/users`,
        {
          params:{
            id : id
          }
        }
        );
        setUser(userFound.data)
        console.log(userFound.data)

        const productsUser = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
          {
            params:{
              email : userFound.data.email
            }
          }
          );
          setUserProducts(productsUser.data)
          console.log("productos del usuario" + productsUser.data)
    }
    getUser()

  }, [])

    
    return (
      <Profile user={user} userProducts={userProducts}/>
    ) 
    
}