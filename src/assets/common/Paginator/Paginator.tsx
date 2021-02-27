import React from "react";
import styles from "./Paginator.module.css"

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export let Paginator: React.FC<PropsType> = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage: ''}
                             onClick={ (e) => {onPageChanged(p) }}
                >{p}</span>
            })}
        </div>

    </div>
}
