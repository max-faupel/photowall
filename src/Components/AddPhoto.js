import { Component } from "react";

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="mb-3">
                        <label for="link" class="form-label">Link</label>
                        <input type="text" class="form-control" id="link" aria-describedby="linkHelp"></input>
                        <div id="linkHelp" class="form-text">Provide a photo link.</div>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <input type="text" class="form-control" id="description" aria-describedby="descriptionHelp"></input>
                        <div id="descriptionHelp" class="form-text">Provide a photo description.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Post</button>
                </form>

            </div>
        )
    }
}

export default AddPhoto