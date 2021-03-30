import axios from "axios";
import {UserType} from "../types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bcdf24e0-2cad-40e4-be67-f9d4eea9b547"
    }
})

export enum ResultCodeEnum {
    Success= 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}