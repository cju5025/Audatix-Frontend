import { Component } from 'react';
import Upload from '../Components/Upload';

export default class UploadContainer extends Component {

    render() {
        return (
            <div id="upload-container">
                <Upload userID={this.props.userID} className="upload" />
            </div>
        )
    }
}