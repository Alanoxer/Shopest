"use client"
import { useSession } from "next-auth/react"

export const GetUser = ()=>{
    const {data: session} = useSession()

    if(session)
    return session.user
}