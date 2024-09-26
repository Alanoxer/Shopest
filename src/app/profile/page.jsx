"use client"
import { useState, useEffect } from "react"
import {useSession} from "next-auth/react"
import axios from "axios"
import Profile from "../components/Profile"


export default function ProfilePage(){
  const [user, setUser] = useState()
  const {data: session, status} = useSession()
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
    if(email)
    getUser()
  }, [])
  //  const fecha = user?.createdAt
  //  const date = new Date(`${fecha}`)
  //  console.log(date)

    if(user !== null && session !== null )
    return (
      <Profile user={user}/>
    ) 
    else return (<>Cargando...</>)
}
