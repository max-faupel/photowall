import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../redux/actions"
import Main from "./Main"

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)