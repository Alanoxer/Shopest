'use client'
import { useParams, useRouter } from "next/navigation"


export default function Pagination(){
    const router = useRouter()
    const params = useParams()

    const page = Number(params.pagination)

    const paramsKeyword = (pageCount)=>{
        params.keyword ?
        router.push(`/product/${params.keyword}/${pageCount}`)
                       : 
        router.push(`/products/page/${pageCount}`)
    }
    
    
    if(params.keyword || params.pagination)return (<>
        
        <div className=" bg-black flex items-center justify-center h-28">
    <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-6 mt-20 rounded-lg shadow-sm">

        <div className="flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">

                <button onClick={()=>{paramsKeyword(page - 1)}}
                 className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-500 to-indigo-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Previous
                </button>
                <button onClick={()=>{paramsKeyword(1)}}
                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    1
                </button>
                <button onClick={()=>{paramsKeyword(2)}}
                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    2
                </button>
                <button onClick={()=>{paramsKeyword(3)}}
                 className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-violet-500 hover:bg-violet-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    3
                </button>
                <button onClick={()=>{paramsKeyword(page + 1)}} 
                 className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-500 to-indigo-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Next
                </button>
            </nav>
        </div>

    </div>
</div>

            </>
    )
    else return null
}

