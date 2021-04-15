import profileReducer, {actions, InitialStateType} from "./profile-reducer";

let state: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

test("length of posts should be incremented", () => {
    // 1 пункт: готовим исходные данные
    // 1) test data
    let action = actions.addPost("it-kamasutra.com")

    // 2) action - действия
    let newState = profileReducer(state, action)


    // 3) expect - ожидаем получить
    expect(newState.posts.length).toBe(5)
    expect(newState.posts[4].likesCount).toBe(0)
})
test("message of new posts should be correct", () => {
    // 1 пункт: готовим исходные данные
    // 1) test data
    let action = actions.addPost("it-kamasutra.com")

    // 2) action - действия
    let newState = profileReducer(state, action)


    // 3) expect - ожидаем получить
    expect(newState.posts[4].message).toBe("it-kamasutra.com")
})
test("after deleting length of messages should be decrement", () => {
    // 1 пункт: готовим исходные данные
    // 1) test data
    let action = actions.deletePost(1)

    // 2) action - действия
    let newState = profileReducer(state, action)


    // 3) expect - ожидаем получить
    expect(newState.posts.length).toBe(3)
})


