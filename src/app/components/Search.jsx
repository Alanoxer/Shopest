'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const Searcher = ()=>{
    const router = useRouter()

    const handleSubmit = (evt)=>{
        evt.preventDefault()

        const formData = new FormData(evt.currentTarget)
        const keyword =  formData.get("keyword")
        
        router.push(`/product/${keyword}/0`)
    }

    return(
      <form  onSubmit={handleSubmit}>
      <div className="flex-grow max-w-2xl mx-4 text-white">
            <div className="relative">
              <Input
                id="keyword"
                name="keyword"
                type="text" 
                placeholder="Busca productos en venta en tu ciudad" 
                className="w-full pl-10 pr-4 py-2 rounded-sm placeholder:text-slate-100"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </div>
      </form>
 )
    }


export default Searcher