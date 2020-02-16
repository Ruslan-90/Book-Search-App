import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";


const BookInfo = () => {

    const [book, setBook] = useState({});
    
    let {id} = useParams();

    useEffect(() => {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
            .then(resp => resp.json())
            .then(data => setBook(data.items[0].volumeInfo))
    }, [id]);
    
    const containerStyle = {
        width: '40vw',
        marginTop: '10vh',
        marginLeft: '5vw',
        marginBottom: '10px',
        textAlign: 'left'
    }

        return (
                <div style={containerStyle}>
                    <h2>{book.title}</h2>
                    <p>Описание: {book.description}</p>
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                </div>
        );
}

export default BookInfo;