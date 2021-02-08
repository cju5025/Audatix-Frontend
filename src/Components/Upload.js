import { Component } from 'react';
import './Upload.css';

export default class Upload extends Component {

    render () {
        return (
            <form enctype="multipart/form-data" id="upload-form">
                <input type="file" />
            </form>
        )
    }
}