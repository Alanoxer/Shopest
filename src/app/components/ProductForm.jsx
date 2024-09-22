'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { Type } from "lucide-react"

const useTypes = ()=>{
  const pathname = usePathname();
  if(pathname === "/products/new"){
    return [
      { value: 'Electrónica', label: 'Electrónica' },
      { value: 'Muebles', label: 'Muebles' },
      { value: 'Ropa', label: 'Ropa' },
      { value: 'Libros', label: 'Libros' },
      { value: 'Otro', label: 'Otro' },
           ]
  }
  else if (pathname === "/services/new"){
    return [
      { value: 'Construcción', label: 'Construcción' },
      { value: 'Electricidad', label: 'Electricidad' },
      { value: 'Limpieza', label: 'Limpieza' },
      { value: 'Corte de pelo', label: 'Corte de pelo' },
      { value: 'Otro', label: 'Otro' },
           ]
  }
  else if (pathname === "/jobs/new"){
    return [
      { value: 'Construcción', label: 'Construcción' },
      { value: 'Administración de empresa', label: 'Administración de empresa' },
      { value: 'Limpieza', label: 'Limpieza' },
      { value: 'Conserje', label: 'Conserje' },
      { value: 'Otro', label: 'Otro' },
           ]
  }
  else if (pathname === "/services/new"){
    return [
      { value: 'Objetos perdidos', label: 'Objetos perdidos' },
      { value: 'Ayuda', label: 'Ayuda' },
      { value: 'Eventos', label: 'Eventos' },
      { value: 'Alquileres', label: 'Alquileres' },
      { value: 'Otro', label: 'Otro' },
           ]
  }
}

export default function ProductForm() {

  const form = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)
  const [productType, setProductType] = useState('')
  const [productSubType, setProductSubType] = useState('')
  const [images, setImages] = useState()
  const [state, setState] = useState("nuevo")

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const articlesTypes = useTypes()

  const subTypes = {
    electronics: ['Teclado', 'Pantalla', 'Mouse', 'Laptop', 'Smartphone'],
    furniture: ['Silla', 'Mesa', 'Sofá', 'Cama', 'Armario'],
    clothing: ['Camiseta', 'Pantalón', 'Vestido', 'Chaqueta', 'Zapatos'],
    books: ['Ficción', 'No ficción', 'Educativo', 'Infantil', 'Cómic'],
  }

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // const handleImageUpload = (e)=> {
  //   if (e.target.files) {
  //     setImages(Array.from(e.target.files))
  //   }
  // }

  // useEffect(() => {
  //   if (params.id) {
  //     axios.get("/api/products/" + params.id ).then((res) => {
  //       setProduct({
  //         name: res.data.name,
  //         price: res.data.price,
  //         description: res.data.description,
  //       });
  //     });
  //   }
  // },);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);

    if (images) {
      formData.append("image", images);
    }
    if (Type) {
      formData.append("type", productType);
    }
    if (images) {
      formData.append("subtype", productSubType);
    }
    if (state) {
      formData.append("state", state);
    }

    // if (!params.id) {
    //   const res = await axios.post(`/api/products`, formData, {
    //     headers: {
    //       'Content-Type': `multipart/form-data`,
    //     },
    //   });
    // } else {
    //   const res = await axios.put(`/api/products` + params.id, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    // }
    if(pathname === "/products/new") {
        const res = await axios.post(`/api/products`, formData, {
           headers: {
             'Content-Type': `multipart/form-data`,
           },
         })
         console.log(res) 
        }

    else if(pathname === "/services/new") {
        const res = await axios.post(`/api/services`, formData, {
            headers: {
              'Content-Type': `multipart/form-data`,
            },
          });  
          console.log(res)    
        }

    else if(pathname === "/jobs/new") {
        const res = await axios.post(`/api/jobs`, formData, {
            headers: {
              'Content-Type': `multipart/form-data`,
            },
          }); 
          console.log(res)     
        }

    else if(pathname === "/community/new") {
        const res = await axios.post(`/api/community`, formData, {
            headers: {
              'Content-Type': `multipart/form-data`,
            },
          });
          console.log(res)     
        }

    router.push("/");
  };

  return (
<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
          {
            pathname === "/products/new" ? "Crear nuevo producto" : null ||
            pathname === "/services/new" ? "Crear nuevo servicio" : null ||
            pathname === "/jobs/new" ? "Crear nuevo puesto de trabajo" : null ||
            pathname === "/community/new" ? "Crear nuevo articulo de la comunidad" : null 
          }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} ref={form} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
          {
            pathname === "/products/new" ? "Nombre del producto" : null ||
            pathname === "/services/new" ? "Nombre del servicio que ofreces" : null ||
            pathname === "/jobs/new" ? "Nombre del puestro de trabajo" : null ||
            pathname === "/community/new" ? "Nombre del articulo" : null 
          }
          </Label>
            <Input 
              id="name" name="name" onChange={handleChange}
              value={product.name} placeholder="Ingrese el nombre del Artículo" required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
              {
                pathname === "/products/new" ? "Descripción del producto" : null ||
                pathname === "/services/new" ? "Descripción del servicio que ofreces" : null ||
                pathname === "/jobs/new" ? "Descripción del puestro de trabajo" : null ||
                pathname === "/community/new" ? "Descripción del artículo" : null 
              }
              </Label>
              <Textarea 
              id="description" name="description" placeholder="Describa el artículo" required 
              onChange={handleChange} value={product.description}
              />
            </div>
          {pathname === "/products/new" ?
            <div className="space-y-2">
              <Label>Estado del Producto</Label>
              <RadioGroup defaultValue="nuevo" onValueChange={setState}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                  value="nuevo" id="nuevo" name="nuevo" />
                  <Label htmlFor="nuevo">Nuevo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                  value="usado" id="usado" name="usado" />
                  <Label htmlFor="usado">Usado</Label>
                </div>
              </RadioGroup>
            </div>
            : null
            }

            <div className="space-y-2">
              <Label htmlFor="product-images">
              {
                pathname === "/products/new" ? "Imágenes del producto" : null ||
                pathname === "/services/new" ? "Imágenes del servicio que ofreces" : null ||
                pathname === "/jobs/new" ? "Imágenes del puesto de trabajo" : null ||
                pathname === "/community/new" ? "Imágenes del artículo" : null 
              }
              </Label>
              <Input
                type="file"
                onChange={(e) => {
                  setImages(e.target.files[0]);
                }}
              />
             {images && (
                <img
                  className="w-96 object-contain mx-auto my-4"
                  src={URL.createObjectURL(images)}
                  alt=""
                />
              )}
            </div>

            {
            pathname === "/products/new" ?
            <div className="space-y-2">
              <Label htmlFor="price">Precio del Producto</Label>
              <Input 
              id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" required 
              onChange={handleChange} value={product.price}
              />
            </div>
            : null
            }

            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Producto</Label>
              <Select onValueChange={setProductType}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el tipo de producto" />
                </SelectTrigger>
                <SelectContent>
                  {articlesTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} >
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {pathname === "/products/new" ?
              productType && (
                <div className="space-y-2">
                  <Label htmlFor="subtype">Subtipo de Producto</Label>
                  <Select onValueChange={setProductSubType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione el subtipo de producto" />
                    </SelectTrigger>
                    <SelectContent>
                      {subTypes[productType].map((subType) => (
                        <SelectItem key={subType} value={subType}>
                          {subType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )
            : null
            }
            <Button type="submit" className="w-full">
            {
              pathname === "/products/new" ? "Publicar Producto" : null ||
              pathname === "/services/new" ? "Publicar Servicio" : null ||
              pathname === "/jobs/new" ? "Publicar puesto de trabajo" : null ||
              pathname === "/community/new" ? "Publicar Artículo" : null 
            }
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

    </>
  );
}


