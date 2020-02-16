import React from 'react';
import { Link } from "react-router-dom";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            value: '',
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.setState({title: this.state.title = this.state.value});
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.title}`)
        .then(resp => resp.json())
        .then(data => 
            {
            this.setState({
                result: data.items
            })
        })
        
        this.setState({value: ''});
        
    }

    render () {
        const listStyle = {
            listStyleType: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '60vw',
            margin: '20px auto',
            padding: '0px'
        }
    
           return (
            <div>
                <form onSubmit={this.handleSubmit} 
                style={{marginTop: "5vh"}}>
                   <input type="text" value={this.state.value} 
                   onChange={this.handleChange} 
                   placeholder="Название книги"
                   style={{width: "30vw", padding: "10px 10px"}}/>
                   <button type="submit" style={{padding: "10px 10px"}}>Search</button>
                </form>
                    <ul style={listStyle}>
                        {this.state.result.map(item => (
                            <li key={item.id} style={{ border: "2px solid black", 
                            margin: "10px 10px", 
                            padding: "10px", 
                            borderRadius: "15px"
                            }}>
                                <Link to={`/book/${item.id}`}>
                                    <h3>{item.volumeInfo.title}</h3>
                                    <h4>{item.volumeInfo.authors}</h4>
                                    <img src={item.volumeInfo.imageLinks.thumbnail} alt="book_img"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
            </div>
        )
    }
}

export default Main