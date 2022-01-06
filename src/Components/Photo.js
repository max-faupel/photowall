import { Component } from "react";

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" alt={post.description} src={post.imageLink}></img>
            <figcaption> <p>{post.description}</p> </figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => {
                    this.props.onRemovePhoto(post)
                }}>Remove</button>
            </div>
        </figure>
    }
}

export default Photo