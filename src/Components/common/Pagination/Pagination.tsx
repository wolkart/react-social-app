import React, {FC, useState} from 'react'
import './Pagination.scss'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    partSize?: number
}

export const Pagination: FC<PropsType> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        partSize = 10
    }) => {

    const [partNumber, setPartNumber] = useState(1)
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let partCount = Math.ceil(pagesCount / partSize)
    let leftPartPageNumber = (partNumber - 1) * partSize + 1
    let rightPartPageNumber = partNumber * partSize

    return (
        <div className="Pagination">
            <button
                className={partNumber > 1 ? "Pagination__item prev" : "Pagination__item prev disabled"}
                onClick={() => {
                    setPartNumber(partNumber - 1)
                }}>
                &#5130;
            </button>

            {pages
                .filter(page => page >= leftPartPageNumber && page <= rightPartPageNumber)
                .map(page => {
                    return (
                        <div key={page}
                             className={currentPage === page ? "Pagination__item active" : "Pagination__item"}
                             onClick={() => onPageChanged(page)}
                        >
                            <span>{page}</span>
                        </div>
                    )
                })
            }

            <button
                className={partCount > partNumber ? "Pagination__item next" : "Pagination__item next disabled"}
                onClick={() => {
                    setPartNumber(partNumber + 1)
                }}>
                &#5125;
            </button>
        </div>
    )
}