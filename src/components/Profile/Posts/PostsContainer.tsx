import {addNewPostActionCreator, removeLastPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from "./Posts";
import { connect } from 'react-redux'

// type propsPostsType = {
//     store: {
//         posts: Array<postType>,
//         newPostText: string
//     },
//     dispatch: any
// }

// const PostsContainer = (props: propsPostsType) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//
//                     let addNewPost = () => store.dispatch(addNewPostActionCreator())
//                     let changePost = (newText: string | undefined) => store.dispatch(updatePostTextActionCreator(newText))
//                     let removePost = () => store.dispatch(removeLastPostActionCreator())
//
//                     return (
//                         <Posts
//                             state={store.getState().profilePage}
//                             addNewPost={addNewPost}
//                             changePost={changePost}
//                             removePost={removePost}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: any) => {
    return {
        state: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPost: () => {dispatch(addNewPostActionCreator())},
        changePost: (newText: string | undefined) => {dispatch(updatePostTextActionCreator(newText))},
        removePost: () => {dispatch(removeLastPostActionCreator())}
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;