import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Upload.css';

export default class Upload extends Component {

    state = {
        postSuccessful: false,
        uploadAgain: false
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
        .then(this.setState({ uploadAgain: !this.state.uploadAgain }))
    }

    render () {
        return (
            <div classname="upload">
                <form onSubmit={this.handleFileSubmit} encType="multipart/form-data" id="upload-form">
                    <input type="file" name="file" id="file-input" />

                    <input class="upload-submit" id="first-submit" type="submit" value="Upload File" />
                </form>

                {
                    this.state.postSuccessful
                    ?
                    <form onSubmit={this.handleInfoSubmit} id="upload-info-form">
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

                        <div id="price-container">
                            <label>Price: </label>
                            <select name="filePrice" id="price">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <input type="submit" value="Upload Sound" class="upload-submit" />
                    </form>
                    :
                    null
                }
                {
                        this.state.uploadAgain
                        ?
                        <div id="upload-more-container">
                            <label>Upload More?</label>
                            <button>Yes</button>
                            <Link to='/soundCollection'>
                            <button>No</button>
                            </Link>
                        </div>
                        :
                        null
                    }
            </div>
        )
    }
}