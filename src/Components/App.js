import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import removePost from "../redux/actions"
import Main from "./Main"

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removePost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)