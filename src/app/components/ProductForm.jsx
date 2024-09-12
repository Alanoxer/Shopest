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
import { useRouter, useParams } from "next/navigation";
import { Type } from "lucide-react"

export default function ProductForm() {

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();
  const [productType, setProductType] = useState('')
  const [productSubType, setProductSubType] = useState('')
  const [images, setImages] = useState()
  const [state, setState] = useState("nuevo")

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });
  
  console.log(product)
  console.log(images)
  console.log(productType)
  console.log(productSubType)
  console.log(state)

  const productTypes = [
    { value: 'electronics', label: 'Electrónica' },
    { value: 'furniture', label: 'Muebles' },
    { value: 'clothing', label: 'Ropa' },
    { value: 'books', label: 'Libros' },
  ]

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

  useEffect(() => {
    if (params.id) {
      axios.get("/api/products/" + params.id ).then((res) => {
        setProduct({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
        });
      });
    }
  },);

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

    if (!params.id) {
      const res = await axios.post(`/api/products`, formData, {
        headers: {
          'Content-Type': `multipart/form-data`,
        },
      });
    } else {
      const res = await axios.put(`/api/products` + params.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
    router.push("/products/page/0");
  };

  return (
<>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Crear Nuevo Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} ref={form} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Producto</Label>
              <Input 
              id="name" name="name" onChange={handleChange}
              value={product.name} placeholder="Ingrese el nombre del producto" required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción del Producto</Label>
              <Textarea 
              id="description" name="description" placeholder="Describa el producto" required 
              onChange={handleChange} value={product.description}
              />
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="product-images">Imágenes del Producto</Label>
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

            <div className="space-y-2">
              <Label htmlFor="price">Precio del Producto</Label>
              <Input 
              id="price" name="price" type="number" min="0" step="0.01" placeholder="0.00" required 
              onChange={handleChange} value={product.price}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Producto</Label>
              <Select onValueChange={setProductType}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el tipo de producto" />
                </SelectTrigger>
                <SelectContent>
                  {productTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value} >
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {productType && (
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
            )}

            <Button type="submit" className="w-full">Crear Producto</Button>
          </form>
        </CardContent>
      </Card>
    </div>

    {/* <div className="flex ">
      <form
        // action="/api/products" method="post"
        // encType="multipart/form-data"
        className="bg-slate-700 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 text-slate-500"
        onSubmit={handleSubmit}
        ref={form}
      >
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
          value={product.name}
          className="shadow appearance-none border rounded w-full py-2 px-3"
          autoFocus
        />

        <label
          htmlFor="price"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Price:
        </label>
        <input
          name="price"
          type="text"
          placeholder="00.00"
          onChange={handleChange}
          value={product.price}
          className="shadow appearance-none border rounded w-full py-2 px-3"
        />


        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Description:
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="description"
          onChange={handleChange}
          value={product.description}
          className="shadow appearance-none border rounded w-full py-2 px-3"
        />


        <label
          htmlFor="productImage"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Product Image:
        </label>
        <input
          type="file"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        {file && (
          <img
            className="w-96 object-contain mx-auto my-4"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Update Product" : "Create Product"}
        </button>
      </form>
    </div> */}
    </>
  );
}


