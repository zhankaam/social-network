import {actions, InitialStateType, usersReducer} from "./users-reducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: "Zhanat", followed: false,
                fullName: "L", photos: {small: null, large: null}, status: "let it be"
            },
            {
                id: 1, name: "Dimych", followed: true,
                fullName: "K", photos: {small: null, large: null}, status: "let it be"
            },
            {
                id: 2, name: "Svetlana", followed: false,
                fullName: "D", photos: {small: null, large: null}, status: "let it be"
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test("follow success", () => {

    const newState = usersReducer(state, actions.followSuccess(2))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})

test("unfollow success", () => {

    const newState = usersReducer(state, actions.unfollowSuccess(1))

    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})