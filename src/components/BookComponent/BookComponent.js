import React from 'react';
import { useStateValue, useDispatch } from '../../store/configureStore';
import BookInfo from './BookInfo';
import { updateSelectedBook } from '../../reducers/book.action';

export default function BookComponent() {

    const {book} = useStateValue();
    const { list, selected } = book;

    const dispatch = useDispatch();

    const handleOnClick = book => updateSelectedBook(dispatch, book)

    return (
        <table>
            <tbody>
            <tr>
                <th>Author</th>
                <th>Country</th>
                <th>Language</th>
                <th>link</th>
                <th>title</th>
                <th>year</th>
            </tr>

            {list.map( (book, idx) => <BookInfo key={idx} book={book} selected={selected} onClick={handleOnClick} /> )}
            </tbody>
        </table>
    )
}


