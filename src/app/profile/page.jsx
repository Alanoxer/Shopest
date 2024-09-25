"use client"
import { useState, useEffect } from "react"
import {useSession} from "next-auth/react"
import axios from "axios"
import Profile from "../components/Profile"


export default function ProfilePage(){
  const [user, setUser] = useState()
  const {data: session, status} = useSession()
  console.log(session, status)

  useEffect(()=>{
    const email = session?.user?.email
    const getUser = async()=>{
      const userFound = await axios.get(`https://shopest-lyart.vercel.app/api/users`,
        {
          params:{
            email : email
          }
        }
        );
        setUser(userFound.data)
        console.log(userFound.data)
    }
    if(email)
    getUser()
  }, [])
  //  const fecha = user?.createdAt
  //  const date = new Date(`${fecha}`)
  //  console.log(date)

    if(user !== null && session !== null )
    return (
      <Profile user={user}/>
      // <div className="container mx-auto px-4 py-8">
      //     <div className="max-w-4xl mx-auto">
      //       <div className="flex flex-col md:flex-row gap-8">
      //         <div className="flex-shrink-0">
      //           <img
      //             src="public\user.png"
      //             alt="User profile"
      //             className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
      //           />
      //         </div>
      //         <div className="flex-grow">

      //           <h1 className="text-2x md:text-4xl font-bold mb-2">
      //           {user?.data.name ? user.data.name : "no name"}
      //           </h1>

      //           <p className="text-lg mb-6">
      //            {user?.data.description ? user.data.description : "no description"}
      //           </p>

      //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      //             <div className="flex items-center text-muted-foreground">
      //               <MapPin className="mr-2 h-4 w-4" />
      //               <span>San Carlos de Bariloche - Rio Negro - Argentina</span>
      //             </div>
      //             <div className="flex items-center text-muted-foreground">
      //               <LinkIcon className="mr-2 h-4 w-4" />
      //               <a href="https://janedoe.com" className="hover:underline">
      //                {user?.data.number_phone ? user.data.number_phone : "no number phone"}
      //               </a>
      //             </div>
      //             <div className="flex items-center text-muted-foreground">
      //               <CalendarDays className="mr-2 h-4 w-4" />
      //               <span>
      //                 {/* {user?.data.createdAt ? user.data.createdAt.toLocaleDateString() : "no date"} */} no date
      //               </span>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="mt-8">
      //         <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      //         <div className="bg-muted p-4 rounded-lg">
      //           <p>No recent activity to show.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    ) 
    else return (<>Cargando...</>)
}
