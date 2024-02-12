import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"


export const Paginate = ({count, setData}) => {
    const [pageCount, setPageCount] = useState(0)
    
    useEffect(() => {
        setPageCount(Math.ceil(count))
    }, [count])

    const handleChange = (event) => {
        const page = event.selected + 1
        setData(prevPage => ({...prevPage, page: page}))
    }
    
    return (
        <>  
            <div className="paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    previousLabel=""
                    pageRangeDisplayed={false}
                    pageCount={pageCount}
                    onPageChange={handleChange}
                    renderOnZeroPageCount={null}
                    containerClassName="menu-paginations"
                    pageClassName="menu-pagination"
                    pageLinkClassName="menu-pagination-link"
                    previousClassName="menu-pagination"
                    previousLinkClassName="menu-pagination__previous-link"
                    nextClassName="menu-pagination"
                    nextLinkClassName="menu-pagination__next-link"
                    breakClassName="menu-pagination"
                    breakLinkClassName="menu-pagination__break-link"
                    activeClassName="menu-pagination-link-active"
                    activeLinkClassName="menu-pagination-link-active"
                />
            </div>
            
        </>
    )
}