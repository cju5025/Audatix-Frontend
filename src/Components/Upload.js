import { Component } from 'react';
import './Upload.css';

export default class Upload extends Component {

    state = {
        name: '',
        location: '',
        category: '',
        subCategory: '',
        user_id: 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:4000/upload', {
            method: 'POST', 
            body: new FormData(event.target)
        }).then(response => response.json())
            .then(({ data, error }) => {
                const fileLocation = data
                console.log(fileLocation)
            })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} encType="multipart/form-data" id="upload-form">
                <input type="file" name="file" />
                
                <input id="upload-submit" type="submit" value="Upload File" />
            </form>
        )
    }
}