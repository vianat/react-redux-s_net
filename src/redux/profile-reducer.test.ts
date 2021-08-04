import profileReducer, {addNewPost} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, text: "post 1", likesCount: 1},
        {id: 2, text: "post 2", likesCount: 22},
        {id: 3, text: "post 3", likesCount: 333}
    ],
    profile: null,
    status: "status",
}

test('Add new post', () => {
    let action = addNewPost("new post")
    let newProfileState = profileReducer(initialState, action);

    expect(newProfileState.posts.length).toBe(4)
});
test('Add post message is correct', () => {
    let action = addNewPost("new post")
    let newProfileState = profileReducer(initialState, action);

    expect(newProfileState.posts[3].text).toBe("new post")
});