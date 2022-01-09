import { useNavigate } from "react-router-dom";

function AddPhoto(props) {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            imageLink: imageLink,
            description: description
        }
        if (description && imageLink) {
            props.addPost(post)
        }
        navigate("/")
    }

    return <div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Link" name="link"></input>
                <input type="text" placeholder="Description" name="description"></input>
                <button>Post</button>
            </form>
        </div>
    </div>
}

export default AddPhoto