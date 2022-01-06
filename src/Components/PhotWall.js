import { Component } from "react";
import Photo from "./Photo";

class PhotoWall extends Component {
    render() {
        return (
            <div className="photoGrid">
                {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}></Photo>)}
            </div>)
    }
}

export default PhotoWall