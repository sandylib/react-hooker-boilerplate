import React from 'react'
import cn from 'classnames'
import styles from './Book.module.css';


export default function BookInfo({book, selected, onClick} ) {
    const handleClick = (book) => e => {
        onClick(book);
      };

    return (
       <tr 
       onClick={handleClick(book)}
       className={`${book === selected ? 'hightlight' : '' }`}
       
       >
        <td>{book.author}</td>
        <td>{book.country}</td>
        <td>{book.language}</td>
        <td>{book.link}</td>
        <td>{book.title}</td>
        <td>{book.year}</td>
       </tr>
    )
}
