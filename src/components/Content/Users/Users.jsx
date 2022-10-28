import User from "./User/User";
import s from "../Users/Users.module.css";
import smallPhoto from '../../../assets/img/user.png'
import React from "react";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    const userElement = () => {
        return (
            props.users.map(u => <User key={u.id} id={u.id} followed={u.followed} name={u.name}
                                                 img={u.photos.small != null ? u.photos.small : smallPhoto}
                                                 status={u.status ? u.status : 'no status'}
                                                 location={u.location ? u.location : {country: 'no country', city: 'no city'}}
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