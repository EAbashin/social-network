import ProfileInfo from "./UserProfile/ProfileInfo";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
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