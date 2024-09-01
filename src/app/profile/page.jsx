"use client"
import { useEffect, useState } from "react"
import Profile from "../components/Profile"
import {useSession} from "next-auth/react"


function ProfilePage(){
  const [user, setUser] = useState()
  const {data: session, status} = useSession()
  console.log(session, status)

  useEffect(()=>{
    const getUser = async()=>{
      const user = await conn.query(`SELECT * FROM user WHERE email = ?`,
        [session?.user?.email]);
        console.log(user[0][0])
        setUser(user[0][0])
    }
    getUser()
  }, [])

    return (
      <Profile name={user.name} description={user.description} numberPhone={user.number_phone} createdAt={createdAt}/>
    )
}

export default  ProfilePage;