import User from "./User/User";
import s from "../Users/Users.module.css";
import smallPhoto from '../../../assets/img/user.png'
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../../types/types";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    portionSize: number
    followingInProgress: Array<number>
    onShowMoreUsers:  () => void
    onPageChange: (pageNumber: number) => void
    followThunkCreator: (followed: boolean, id: number) => void
};
const Users: React.FC<PropsType> = (props) => {
    const userElement = () => {
        return (
            props.users.map(u => <User key={u.id} id={u.id} followed={u.followed} name={u.name}
                                                 img={u.photos.small != null ? u.photos.small : smallPhoto}
                                                 status={u.status ? u.status : 'no status'}
                                                 followingInProgress={props.followingInProgress}
                                                 followThunkCreator={props.followThunkCreator}
            />)
        )
    }
    return (
        <div className={s.users}>
            {userElement()}
            <Paginator totalItemsCount={props.totalUsersCount}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       portionSize={props.portionSize}
                       onShowMoreItems={props.onShowMoreUsers}
                       onPageChange={props.onPageChange}/>
        </div>
    )
}

export default Users;