import {actions, follow} from "./users-reducer";
import {usersAPI} from "../../api/users-api";
import {APIResponseType, ResultCodeEnum} from "../../api/api";

jest.mock("../../api/users-api")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}


usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

test("",() => {

    const thunk = follow(2)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()



    thunk(dispatchMock,getStateMock, {})


 expect(dispatchMock).toBeCalledTimes(1)
 expect(dispatchMock).toHaveBeenCalledWith(1,actions.toggleFollowingProgress(true,2))
 expect(dispatchMock).toHaveBeenCalledWith(2,actions.followSuccess(2))
 expect(dispatchMock).toHaveBeenCalledWith(3,actions.toggleFollowingProgress(false,2))
})