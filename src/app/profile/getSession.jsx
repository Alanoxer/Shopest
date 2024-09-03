"use client"
import { useSession } from "next-auth/react"

export const useUser = ()=>{
    const {data: session} = useSession()

    if(session)
    return session.user
}