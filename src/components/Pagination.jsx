import React from 'react'
import { uuid } from 'uuidv4'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    //Calculate page numbers and append them into the array above
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className = "pagination">
                {pageNumbers.map(number => (
                    <li key={uuid()} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
