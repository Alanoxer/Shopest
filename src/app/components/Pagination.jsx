'use client'
import { useParams, usePathname } from "next/navigation"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


export default function PaginationComponent(){
    const params = useParams()
    const pathname = usePathname()
    const paginationNumber = Number(params.pagination)

   const paginationUrl = pathname.substring(0, pathname.length - 1);
   const active = (number)=>{
    paginationNumber === number ? "isActive" : null
   }

    return (
        <Pagination className={"mt-12"}>
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious href={`${paginationUrl}${paginationNumber === 0 ? 0 : paginationNumber - 1}`} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href={`${paginationUrl}${paginationNumber === 0 ? 0 : paginationNumber - 1}`}>{paginationNumber === 0 ? "-" : paginationNumber - 1}</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href={`${paginationUrl}${paginationNumber}`} isActive>
            {paginationNumber}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href={`${paginationUrl}${paginationNumber + 1}`}>{paginationNumber + 1}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href={`${paginationUrl}${paginationNumber === 0 ? + 1 : null}`} />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    )
}

