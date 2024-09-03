import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"
import { useUser } from "./getSession"



export default async function ProfilePage(){
    const user = useUser()
    console.log(user)
  

  return (
    <>
    hola
    </>
  )
}
