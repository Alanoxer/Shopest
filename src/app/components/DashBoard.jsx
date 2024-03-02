import Link from "next/link"

const DashBoard = ()=>{

    return (<>
    <aside className="flex w-60 flex-col space-y-2 p-2" style={{height: 90.5}}
            x-show="asideOpen">
            <Link href="/product/mouse/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Mouse</span>
            </Link>

            <Link href="/product/silla/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Silla</span>
            </Link>

            <Link href="/product/pantallas/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Teclados</span>
            </Link>

            <Link href="/product/teclados/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Teclados</span>
            </Link>

            <Link href="/product/mesas/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Mesas</span>
            </Link>

            <Link href="/product/ropa/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Ropa</span>
            </Link>

            <Link href="/product/zapatillas/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Zapatillas</span>
            </Link>

            <Link href="/product/camperas/0" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-purple-600">
                <span className="text-2xl"></span>
                <span>Camperas</span>
            </Link>
        </aside>
    </>)
}

export default DashBoard