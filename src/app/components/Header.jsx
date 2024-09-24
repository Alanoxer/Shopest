'use client'
import Link from "next/link"
import Searcher from "./Search"
import { useSession, signOut } from "next-auth/react";
import { Button, buttonVariants  } from "@/components/ui/button";
import { ShoppingCart, User, Bell, MapPin, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Header(){
  const {data: session, status} = useSession()

  console.log(session,status)

  // const router = useRouter()
    
  return (
    <header className="bg-purple-700 py-2 px-4 sm:px-6 lg:px-8">

    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center mb-2 sm:mb-0">
        <Link className="mr-12" href="/" rel="home">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="40pt" height="40pt" viewBox="0 0 1280.000000 1014.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,1014.000000) scale(0.100000,-0.100000)"
          fill="#ffffff" stroke="none">
          <path d="M1190 10130 c-272 -4 -566 -8 -653 -9 l-158 -1 3 -374 c2 -206 6
          -377 10 -381 3 -4 472 -1 1042 5 570 7 1043 9 1051 6 18 -7 64 -99 439 -882
          l306 -641 0 -2471 0 -2472 4007 2 4007 3 57 175 c32 96 89 273 128 393 39 119
          103 314 141 432 39 118 101 311 139 428 157 482 214 658 280 860 134 409 650
          1994 730 2241 l81 248 0 278 0 278 -217 -4 c-120 -2 -1890 -8 -3933 -14 -2043
          -5 -3947 -13 -4231 -16 l-515 -6 -61 129 c-207 437 -647 1350 -674 1400 -90
          163 -184 260 -312 323 -144 71 -162 73 -697 75 -261 1 -698 -1 -970 -5z
          m10431 -2982 c-26 -79 -54 -164 -61 -190 l-14 -48 -796 0 -795 0 0 182 0 183
          225 5 c124 3 509 7 857 8 l632 2 -48 -142z m-2621 -53 l0 -185 -475 0 -475 0
          0 185 0 185 475 0 475 0 0 -185z m-3810 -5 l0 -180 -505 0 -505 0 0 175 0 175
          328 3 c180 1 407 3 505 5 l177 2 0 -180z m1900 0 l0 -180 -470 0 -470 0 0 180
          0 180 470 0 470 0 0 -180z m-1900 -1420 l0 -290 -505 0 -505 0 0 283 c0 156 3
          287 7 290 3 4 231 7 505 7 l498 0 0 -290z m1900 0 l0 -290 -470 0 -470 0 0
          290 0 290 470 0 470 0 0 -290z m1910 0 l0 -290 -475 0 -475 0 0 290 0 290 475
          0 475 0 0 -290z m2230 284 c0 -4 -41 -134 -92 -290 l-92 -284 -543 0 -542 0
          -3 286 c-2 157 -1 288 1 290 7 7 1271 5 1271 -2z m-6040 -1809 l0 -285 -505 0
          -505 0 0 278 c0 153 3 282 7 285 3 4 231 7 505 7 l498 0 0 -285z m1900 0 l0
          -285 -470 0 -470 0 0 285 0 285 470 0 470 0 0 -285z m1910 0 l0 -285 -475 0
          -475 0 0 285 0 285 475 0 475 0 0 -285z m1730 274 c0 -7 -31 -107 -69 -223
          -39 -116 -78 -238 -89 -271 l-19 -60 -296 -3 -297 -2 0 285 0 285 385 0 c281
          0 385 -3 385 -11z"/>
          <path d="M5125 2433 c-411 -34 -745 -232 -960 -569 -188 -294 -236 -684 -126
          -1021 117 -357 404 -652 752 -772 555 -192 1154 27 1457 533 123 204 181 464
          161 719 -42 529 -445 984 -964 1085 -101 20 -247 32 -320 25z m235 -629 c199
          -56 372 -230 425 -430 21 -77 21 -231 0 -309 -29 -108 -74 -184 -160 -270 -91
          -92 -165 -136 -281 -165 -320 -82 -652 115 -734 435 -22 87 -26 196 -9 277 6
          29 30 94 54 143 126 262 425 397 705 319z"/>
          <path d="M9225 2430 c-478 -43 -892 -371 -1045 -828 -141 -424 -35 -896 275
          -1221 177 -186 388 -303 645 -358 117 -25 353 -25 470 0 324 69 598 252 776
          518 139 208 204 425 204 680 0 202 -41 374 -131 551 -226 441 -700 703 -1194
          658z m278 -627 c204 -59 370 -232 422 -438 19 -76 19 -212 0 -294 -51 -214
          -243 -400 -460 -446 -209 -44 -404 14 -556 166 -130 129 -187 277 -176 462 7
          120 35 208 98 301 63 95 133 156 234 207 135 67 299 83 438 42z"/>
          </g>
        </svg>
      </Link>
    </div>

      <div className="flex-grow mx-4">
        <div className="relative">
          <Searcher/>
        </div>
      </div>

      <nav className="flex items-center space-x-4">
      <Link href={"/products/page/0"} className={buttonVariants({ variant: "outline" })}>Marketplace</Link>
      <Link href={`/services/page/0`} className={buttonVariants({ variant: "outline" })}>Servicios</Link>
      <Link href={`/jobs/page/0`} className={buttonVariants({ variant: "outline" })}>Trabajos</Link>
      <Link href={`/community/page/0`} className={buttonVariants({ variant: "outline" })}>Comunidad</Link>
      
        {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Categorías <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem ><Link href={"/type/electronics/0"}>Electrónica</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={"/type/clothing/0"}>Ropa y Accesorios</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={"/type/furniture/0"}>Hogar y Muebles</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={"/type/books/0"}>Libros</Link></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu> */}
          {/* <Link className={buttonVariants({ variant: "outline" })}>Servicios</Link>
          <Link className={buttonVariants({ variant: "outline" })}>Empleos</Link>
          <Link className={buttonVariants({ variant: "outline" })}>Comida</Link> */}
      </nav>

      <div className="flex items-center space-x-4 ml-8 mt-2 sm:mt-0">
      { status === "authenticated" ?
      <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <User className="h-8 w-8 bg-white rounded-full p-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem >Ver Perfil</DropdownMenuItem>
              <DropdownMenuItem>Historial</DropdownMenuItem>
              <DropdownMenuItem >Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <Bell className="h-8 w-8 bg-white rounded-full p-1" />
        <ShoppingCart className="h-8 w-8 bg-white rounded-full p-1" />
      </>
      : 
      <>
        <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
        <Link href={"/register"} className={buttonVariants({ variant: "outline" })}>Register</Link>
      </>
      }
      </div>
      
    </div>
  </header>
    
   )
}