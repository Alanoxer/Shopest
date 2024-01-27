import Link from "next/link"

const Footer = () =>{
    return (<>
    <footer className="bg-slate-800  mx-auto px-8 relative bottom-0 w-full mt-80">
    

        <div className=" flex flex-col md:flex-row py-6">

            <div className="flex-1 mb-6 text-black">

                <Link className="text-purple-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                    <span>
                        Shopest
                    </span>
                </Link>
            </div>


            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">FAQ</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Help</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Support</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Terms</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Privacy</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-whitemd:mb-6">Social</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Facebook</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="https://www.linkedin.com/in/alan-compay-30412a280/" className="no-underline  text-white hover:text-white">Linkedin</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Twitter</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Official Blog</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">About Us</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    


</footer>
    </>
    )
}

export default Footer