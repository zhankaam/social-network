import {follow} from "./users-reducer";
import {usersAPI} from "../../api/users-api";
import {APIResponseType, ResultCodeEnum} from "../../api/api";

jest.mock("../../api/users-api")
const usersAPIMock = usersAPI

const result: APIResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

// @ts-ignore
usersAPIMock.follow.mockReturnValue(result)

test("",() => {

    const thunk = follow(0)
    const dispatchMock = jest.fn()


    // @ts-ignore
    thunk(dispatchMock)


 expect(dispatchMock).toBeCalledTimes(1)
})