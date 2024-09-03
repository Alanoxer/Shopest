
import {useSession} from "next-auth/react"

export default function GetSession(){
    const {data: session, status} = useSession()
    console.log(session, status)

    return session.user
}