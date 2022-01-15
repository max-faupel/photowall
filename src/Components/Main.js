import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPhoto from "./AddPhoto";
import PhotoWall from "./PhotoWall";
import Title from "./Title";

class Main extends Component {
    componentDidMount() {
        this.props.startLoadingPosts()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Router>
                    <Title text={'photowall'}></Title>
                    <Routes>
                        <Route exact path="/" element={<div>
                            <PhotoWall {...this.props}></PhotoWall>
                        </div>}></Route>
                        <Route exact path="/AddPhoto" element={<div>
                            <AddPhoto {...this.props}></AddPhoto>
                        </div>}></Route>
                    </Routes>
                </Router>
            </div>)
    }
}

export default Main