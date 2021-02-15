import { Component } from 'react';
import './Upload.css';

export default class Upload extends Component {

    state = {
        postSuccessful: false
    }

    handleFileSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:4000/upload', {
            method: 'POST', 
            body: new FormData(event.target)
        }).then(response => response.json())
            .then(({ data, error }) => {
                const fileLocation = data
                
                if (data) {
                    this.setState({ postSuccessful: !this.state.postSuccessful })
                }

                localStorage.setItem('fileLocation', fileLocation)
            })
    }

    // find a better way to access the files location

    handleInfoSubmit = (event) => {
        event.preventDefault();
        const fileInfoFormData = new FormData(event.target)
        const fileName = fileInfoFormData.get('fileName')
        const fileLocation = localStorage.getItem('fileLocation')
        const fileCategory = fileInfoFormData.get('fileCategory')
        const fileSubCategory = fileInfoFormData.get('fileSubCategory')
        const userID = this.props.userID
        const filePrice = fileInfoFormData.get('filePrice')
        
        fetch('http://localhost:4000/audioFiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                audioFile: {
                    name: fileName,
                    location: fileLocation,
                    category: fileCategory,
                    subCategory: fileSubCategory,
                    user_id: userID,
                    price: filePrice
                }
            })
        })
        .then(response => response.json())
        .then(console.log)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleFileSubmit} encType="multipart/form-data" id="upload-form">
                    <input type="file" name="file" id="file-input" />

                    <input id="upload-submit" type="submit" value="Upload File" />
                </form>

                {
                    this.state.postSuccessful
                    ?
                    <form onSubmit={this.handleInfoSubmit}>
                    <label>Name: </label>
                        <input name="fileName" placeholder="File name" />

                        <label>Category: </label>
                        <select name="fileCategory">
                            <option value="Film & Game">Film & Game</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Machine">Machine</option>
                            <option value="Score">Score</option>
                        </select>

                        <label>Sub Category: </label>
                        <select name="fileSubCategory">
                            <option value="Foley">Foley</option>
                            <option value="Machine">Machine</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Score">Score</option>
                        </select>

                        <label>Price</label>
                        <input name="filePrice" placeholder="$" id="price" />

                        <input type="submit" />
                    </form>
                    :
                    null
                }
            </div>
        )
    }
}