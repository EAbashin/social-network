import s from './Profile.module.css';
import ProfileInfo from "./UserProfile/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <div className={s.profile_main_img}></div>
            <ProfileInfo userProfile={props.profilePage.userProfile}
                         status={props.status}
                         updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;