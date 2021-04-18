import React from "react";
import {useSelector} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../../assets/common/Preloader";
import {getIsFetching} from "../../redux/users/users-selectors";


type UsersPagePropsType = {}

const UsersPage: React.FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader/> : null}

        <Users/>
    </>
}