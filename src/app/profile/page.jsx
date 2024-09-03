import { useEffect, useState } from "react"
import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"
import { useUser } from "./getSession"



export default async function ProfilePage(){
    const user = await useUser()
    console.log(user)
  

  return (
    <>
    hola
    </>
  )
}
