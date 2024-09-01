"use client"
import Profile from "../components/Profile"
import {useSession} from "next-auth/react"


function ProfilePage(){
    const {data: session, status} = useSession()
    console.log(session, status)

    return (
      <Profile email={session?.user?.email}/>
    )
}

export default  ProfilePage;