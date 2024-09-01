"use client"
import { useEffect, useState } from "react"
import Profile from "../components/Profile"
import {useSession} from "next-auth/react"
import { conn } from "@/libs/mysql"

function ProfilePage(){
  const [user, setUser] = useState(null)
  const {data: session, status} = useSession()
  console.log(session, status)

  useEffect(()=>{
    const getUser = async()=>{
      const userFound = await conn.query(`SELECT * FROM user WHERE email = ?`,
        [session?.user?.email]);
        console.log(userFound)
        setUser(userFound)
    }
    getUser()
  }, [session])

    if(user !== null)
    return (
      <Profile name={user?.name} description={user?.description} numberPhone={user?.number_phone} createdAt={user?.createdAt}/>
    )
}

export default ProfilePage;