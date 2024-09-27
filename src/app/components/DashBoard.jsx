"use client"
import Link from "next/link"
import { usePathname, useParams } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const usePath = ()=>{
    const pathName = usePathname()
    const params = useParams()
    if(pathName === `/products/page/${params.pagination}/${params.state}`){
        return (
            [
                {name :'Electrónica', link: `/products/type/electronics/0`},
                {name :'Muebles', link: `/products/type/muebles/0`},
                {name :'Ropa', link: `/products/type/ropa/0`},
                {name :'Libros', link: `/products/type/libros/0`},
                {name :'Otro', link: `/products/type/otro/0`}
            ]
        )
    }
    else if(pathName === `/products/type/electronics/${params.pagination}/${params.state}`){
        return (
            [
                {name :'Teclado', link: `/products/subtype/teclado/0`},
                {name :'Pantalla', link: `/products/subtype/pantalla/0`},
                {name :'Mouse', link: `/products/subtype/pouse/0`},
                {name :'Smartphone', link: `/products/subtype/smartphone/0`},
                {name :'Laptop', link: `/products/subtype/laptop/0`}
            ]
        )
    }
    else if(pathName === `/products/type/muebles/${params.pagination}/${params.state}`){
        return (
            [
                {name :'Sillas', link: `/products/subtype/Sillas/0`},
                {name :'Mesas', link: `/products/subtype/Mesas/0`},
                {name :'Estantes', link: `/products/subtype/Estantes/0`},
                {name :'Escritorios', link: `/products/subtype/Escritorios/0`},
                {name :'Sillones', link: `/products/subtype/Sillones/0`}
            ]
        )   
    }
    else if(pathName === `/products/type/ropa/${params.pagination}/${params.state}`){
        return (
            [
                {name :'Camisas', link: `/products/subtype/Camisas/0`},
                {name :'Pantalones', link: `/products/subtype/Pantalones/0`},
                {name :'Remera', link: `/products/subtype/Remera/0`},
                {name :'Busos', link: `/products/subtype/Busos/0`},
                {name :'Zapatillas', link: `/products/subtype/Zapatillas/0`}
            ]
        )
    }
    else if(pathName === `/products/type/libros/${params.pagination}/${params.state}`){
        return (
            [
                {name :'Ciencia Ficción', link: `/products/subtype/cienciaficción/0`},
                {name :'Educativos', link: `/products/subtype/Educativos/0`},
                {name :'Historia', link: `/products/subtype/Historia/0`},
                {name :'Matemáticas', link: `/products/subtype/Matemáticas/0`},
                {name :'Biblias', link: `/products/subtype/Biblias/0`}
            ]
        )
    }
    else if (pathName === `/services/page/${params.pagination}`){
        return (
            [
                {name :'Construcción', link: `/services/type/construcción/0`},
                {name :'Electricidad', link: `/services/type/electricidad/0`},
                {name :'Limpieza', link: `/services/type/limpieza/0`},
                {name :'Plomeria', link: `/services/type/plomeria/0`},
                {name :'Otro', link: `/services/type/otro/0`}
            ]
        )
    }
    else if (pathName === `/jobs/page/${params.pagination}`){
        return (
            [
                {name :'Construcción', link: `/jobs/type/construcción/0`},
                {name :'Atención al cliente', link: `/jobs/type/atenciónalcliente/0`},
                {name :'Limpieza', link: `/jobs/type/limpieza/0`},
                {name :'Reponedores', link: `/jobs/type/reponedores/0`},
                {name :'Otro', link: `/jobs/type/otro/0`}
            ]
        )
    }
    else if (pathName === `/community/page/${params.pagination}`){
        return (
            [
                {name :'Solidaridad', link: `/community/type/Solidaridad/0`},
                {name :'Objetos Perdidos', link: `/community/type/objetosperdidos/0`},
                {name :'Eventos', link: `/community/type/eventos/0`},
                {name :'Otro', link: `/community/type/otro/0`}
            ]
        )
    }
    else return []
}

const CheckBox = ()=>{
    const p = usePathname()
    const params = useParams()
    const pathname = ()=>{
        return(
            p === `/products/page/${params.state}/${params.pagination}` ? `/products/page/${params.state}/${params.pagination}` : null ||
            p === `/products/type/${params.types}/${params.state}/${params.pagination}` ? `/products/type/${params.types}/${params.state}/${params.pagination}` : null || p === `/products/subtype/${params.subtype}/${params.state}/${params.pagination}` ? p === `/products/subtype/${params.subtype}/${params.state}/${params.pagination}` : null
        )
    }

    const linkname = ()=>{
        return(
            p === `/products/page/${params.state}/${params.pagination}` ? `/products/page/` : null ||
            p === `/products/type/${params.types}/${params.state}/${params.pagination}` ? `/products/type/${params.types}/` : null || p === `/products/subtype/${params.subtype}/${params.state}/${params.pagination}` ? p === `/products/subtype/${params.subtype}/` : null
        )
    }


    const pathName = pathname()
    const link = linkname()

    if(pathName){
    return(
        <RadioGroup defaultValue={params.state}>
            <div className="flex items-center space-x-2">
                <Link href={`${link}cualquiera/0`}>
                    <RadioGroupItem value="cualquiera" id="r1" />
                </Link>
                <Label htmlFor="r1">Cualquiera</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Link href={`${link}nuevo/0`}>
                    <RadioGroupItem value="nuevo" id="r2" />
                </Link>
                 <Label htmlFor="r2">Nuevo</Label>
            </div>
            <div className="flex items-center space-x-2">
                <Link href={`${link}usado/0`}>
                    <RadioGroupItem value="usado" id="r3" />
                </Link>
                <Label htmlFor="r3">Usado</Label>
            </div>
         </RadioGroup>
        )} else return null
}

const DashBoard = ()=>{
    const articles = usePath()
    return (
        <>
        { articles.length !== 0 ?
            <>
            <aside className="flex w-60 flex-col space-y-2 p-2" style={{height: 90.5}}>
                {articles.map((type) => (
                    <Link key={type.name} href={type.link} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-purple-600 border-b-2">
                        <span className="text-1xl">{type.name}</span>
                    </Link>        
                    ))
                }

                <CheckBox/>

            </aside>

            </>
            : null    
             
        }
        </>
        )
    }

export default DashBoard