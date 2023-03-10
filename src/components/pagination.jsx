import React from 'react'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi"

const Pagination = ({ page, setPage, setIsOpen }) => {

    const handleNextPage = () => {
        setIsOpen(false)
        setPage(prev => ({
            type: "next",
            number: prev.number + 1
        }))
    }

    const handlePrevPage = () => {
        setIsOpen(false)
        if (page.number === 1) {
            return
        } else {
            setPage(prev => ({
                type: "previous",
                number: prev.number - 1
            }))
        }
    }

    return (
        <div className='flex pagination'>
            <div onClick={handlePrevPage} className='cursor-pointer'>
                <BiChevronLeftCircle size={60} color="#000" />
            </div>
            <div>
                <p style={{ color: "#000", fontSize: "32px" }}>Page {page.number}</p>
            </div>
            <div onClick={handleNextPage} className='cursor-pointer'>
                <BiChevronRightCircle size={60} color="#000" />
            </div>
        </div>
    )
}

export default Pagination