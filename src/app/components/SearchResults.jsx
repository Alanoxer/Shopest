'use client'
import DashBoard from "./DashBoard"
import PaginationComponent from "./Pagination"
import ProductCard from "./ProductCard"
import HeadResults from "./HeadResults"

export default function SearchResults({products}) {

  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Dashboard */}
          <aside className="w-full md:w-64 space-y-6 ">
            <DashBoard/>
          </aside>

          <div className="flex-grow">
          {/* Header Product List */}
            <HeadResults/>

          {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
               {products.map((product) => (<ProductCard key={product.id} product={product} />))} 
            </div>

          </div>
        </div>
      </main>
      <PaginationComponent/>
    </div>
  )
}