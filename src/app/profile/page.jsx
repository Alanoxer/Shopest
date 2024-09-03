// import { useEffect, useState } from "react"
// import  {conn}  from "../../libs/mysql"
// import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"

import GetSession from "../components/GetSession"

export default async function ProfilePage(){
  const user = await GetSession()
  console.log(user)

  return (
    <>
    hola
    </>
  )
}
