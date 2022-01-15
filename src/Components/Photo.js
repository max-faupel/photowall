import PropTypes from "prop-types";
import { Component } from "react";

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" alt={post.description} src={post.imageLink}></img>
            <figcaption> <p>{post.description}</p> </figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={() => {
                    this.props.startRemovePost(this.props.index, post.id)
                }}>Remove</button>
            </div>
        </figure>
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}
export default Photo