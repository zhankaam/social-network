import React from "react";
import {UserType} from "../../types";
import {Paginator} from "../../assets/common/Paginator/Paginator";
import {User} from "./User";
import { Formik } from "formik/dist/Formik";
import { Form, Field} from "formik";


type PropsType = {
    onPageChanged: (p: number) => void
    followingInProgress: number[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage:  (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export let Users = (props: PropsType ) => {
    return <div>
                 <Paginator totalItemsCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChanged={props.onPageChanged}/>
            <div>
            { props.users.map(u => <User key={u.id}
                                           user={u}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                                           followingInProgress={props.followingInProgress}/>)}

            </div>
    </div>
}

const usersSearchFormValidate = (values: UsersSearchFormObjectType) => {
     const errors = {}
     return errors
}
type UsersSearchFormObjectType = {
    term: string
}

const UsersSearchForm = () => {

    const submit = (values: UsersSearchFormObjectType,{ setSubmitting}: {setSubmitting: (setSubmitting: boolean) => void}) => {
          setTimeout(() => {
              alert(JSON.stringify(values,null,2))
              setSubmitting(false)
          },400)
    }

    return <div>
        <Formik
            initialValues={{ term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting } ) => (
                <Form>
                    <Field type="text" name="term" />
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}