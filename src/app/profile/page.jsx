"use client"
import { useEffect, useState } from "react"
import {useSession} from "next-auth/react"
import { conn } from "@/libs/mysql"
import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"

function ProfilePage(){
  const [userr, setUserr] = useState()
  const {data: session, status} = useSession()
  console.log(session, status)

  useEffect(()=>{
    const email = session?.user?.email
    const getUser = async()=>{
      const userFound = await conn.query(`SELECT * FROM user WHERE email = "?"`,
        [email]);
        console.log(userFound[0][0])
        return setUserr(userFound[0][0])
    }
    getUser()
    
  }, [])

    // if(userr !== null && session !== null )
    return (
      // <Profile name={user?.name} description={user?.description} numberPhone={user?.number_phone} createdAt={user?.createdAt}/>


      <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="public\user.png"
                  alt="User profile"
                  className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
                />
              </div>
              <div className="flex-grow">

                <h1 className="text-2x md:text-4xl font-bold mb-2">
                  {session?.user?.email}
                </h1>

                <p className="text-lg mb-6">
                {/* {userr?.description ? userr.description : "no description"} */} fgsd
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>San Carlos de Bariloche - Rio Negro - Argentina</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <a href="https://janedoe.com" className="hover:underline">
                    {/* {userr?.number_phone ? userr.number_phone : "no number phone"} */}fgdfgdf
                    </a>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>222</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="bg-muted p-4 rounded-lg">
                <p>No recent activity to show.</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProfilePage;