import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import Photo from "./Photo";
import PhotoWall from "./PhotoWall";
import Title from "./Title";

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<div>
                            <Title text={'photowall'}></Title>
                            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}></PhotoWall> */}
                            <PhotoWall {...this.props}></PhotoWall>
                        </div>}></Route>
                        {/* <Route exact path="/AddPhoto" element={<AddPhoto onAddPhoto={(addedPost) => {
                            console.log(addedPost)
                            this.addPhoto(addedPost)
                        }}></AddPhoto>}></Route> */}
                    </Routes>
                </Router>
            </div>)
    }
}

export default Main