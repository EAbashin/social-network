import ProfileInfo from "./UserProfile/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {UserProfileType} from "../../../types/types";
import {ProfilePageInitialStateType} from "../../../redux/reducers/profile-reducer";

type PropsType = {
    profilePage: ProfilePageInitialStateType
    status: string
    id: number
    isOwner: boolean
    getProfileThunkCreator: (userId: number) => void
    getStatusThunkCreator: (userId: number) => void
    toggleIsFetching: (isToggle: boolean) => void
    savePhotoThunkCreator: (file: any) => void
    updateStatusThunkCreator: (status: string) => void
    updateProfileThunkCreator: (profile: UserProfileType) => void
    addPost: (newPost: string) => void
}
const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.profilePage.userProfile}
                         isOwner={props.isOwner}
                         savePhotoThunkCreator={props.savePhotoThunkCreator}
                         status={props.status}
                         updateStatusThunkCreator={props.updateStatusThunkCreator}
                         updateProfileThunkCreator={props.updateProfileThunkCreator}/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;