const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileStateType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
let initialState: ProfileStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: "",
}
export type ProfileActionsPropsType = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>
// export type addPostAC = {
//     type: 'ADD-POST'
// }
// export type updateNewPostTextAC = {
//     type: 'UPDATE_NEW_POST_TEXT'
//     newText: string
// }

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsPropsType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state;
    }
}

// export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const addPost = () => ({type: ADD_POST} as const)
// export const updateNewPostTextActionCreator = (text: string) =>
export const updateNewPostText = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)


export default profileReducer;