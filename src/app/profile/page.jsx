import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"
import { GetUser } from "./getSession"



export default async function ProfilePage(){
    const user = GetUser()
    console.log(user)
  

  return (
    <>
    hola
    </>
  )
}
