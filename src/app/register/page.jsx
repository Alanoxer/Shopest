"use client"
import { useState } from "react"
import axios, {AxiosError} from "axios"
import {signIn } from "next-auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Facebook } from 'lucide-react'

export default function RegisterPage(){


  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget)
      
      const signUpRes = await axios.post("/api/auth/signup", {
        registerEmail: formData.get("registerEmail"),
        registerPassword: formData.get("registerPassword"),
        fullname: formData.get("fullname")
      },{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(signUpRes)

      const res = await signIn("credentials",{
        email: signUpRes.data.email,
        password: formData.get("registerPassword"),
        redirect: true,
      })
      console.log(res)

      if (res?.ok) return router.push("/")

    } catch (error) {
      if(error instanceof AxiosError){
        setError(error.response?.data.message)
      }

    }
  }

  const router = useRouter()
  const [error, setError] = useState()

    return (<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Bienvenido</CardTitle>
        </CardHeader>
        <CardContent>
            <div>
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nombre de Usuario</Label>
                  <Input
                    id="fullname" name="fullname" autoComplete="false" type="text" 
                    placeholder="usuario123"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerEmail">Correo Electrónico</Label>
                  <Input
                    id="registerEmail" name="registerEmail" type="text"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registerPassword">Contraseña</Label>
                  <Input
                    id="registerPassword" name="registerPassword" type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Confirmar Contraseña</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </div> */}
                {/* <div className="space-y-2">
                  <Label htmlFor="register-phone">Número de Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={registerForm.phone}
                    onChange={handleRegisterChange}
                    required
                  />
                </div> */}
                <Button type="submit" className="w-full">Registrarse</Button>
              </form>
            </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O continúa con
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
            <Button onClick={async()=>{
                const result = await signIn("facebook",{
                  redirect: false,
                })
                console.log(result)
              }} className="bg-blue-600 hover:text-blue-600 " variant="outline" type="button"> 
                  <Facebook className="mr-2 h-4 w-4 text-white " />
                    Facebook
              </Button>
              <Button onClick={async()=>{
                const result = await signIn("google",{
                  redirect: false,
                })
                console.log(result)
              }}
              variant="outline" type="button">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  

    </>)
}