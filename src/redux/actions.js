import { database } from "../database/config"

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref("posts").update({ [post.id]: post }).then(() => {
            dispatch(addPost(post))
        })
    }
}

export function startLoadingPosts() {
    return (dispatch) => {
        return database.ref("posts").once("value").then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovePost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
    }
}

export function removePost(index) {
    return {
        type: "REMOVE_POST",
        index
    }
}

export function addPost(post) {
    console.log("addPost")
    return {
        type: "ADD_POST",
        post
    }
}

export function loadPosts(posts) {
    return {
        type: "LOAD_POSTS",
        posts
    }
}