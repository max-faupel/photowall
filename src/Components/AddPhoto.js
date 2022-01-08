import { useNavigate } from "react-router-dom";

function AddPhoto(props) {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: 0,
            imageLink: imageLink,
            description: description
        }
        if (description && imageLink) {
            props.onAddPhoto(post)
        }
        navigate("/")
    }

    return (
        <div>
            <h1>Add Photo!</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Link" name="link"></input>
                    <input type="text" placeholder="Description" name="description"></input>
                    <button>Post</button>
                </form>
            </div>
        </div>)
}

export default AddPhoto