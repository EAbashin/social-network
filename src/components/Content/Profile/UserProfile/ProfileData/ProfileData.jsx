import s from "../ProfileInfo.module.css";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import Contacts from "./Contacts";

const ProfileData = (props) => {
    return (
        <div className={s.description}>
            <h3 className={s.fullName}>{props.userProfile.fullName}</h3>
            <div>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatusThunkCreator={props.updateStatusThunkCreator}
                                        isOwner={props.isOwner}/>
                {props.userProfile.aboutMe ? <li><b>About me:</b>{props.userProfile.aboutMe}</li> : ''}
                {props.userProfile.lookingForAJob ?
                    <li><b>Looking for a job:</b>{props.userProfile.lookingForAJob ? ' yes' : ' no'}</li> : ''}
                {props.userProfile.lookingForAJobDescription ?
                    <li><b>Description:</b>{props.userProfile.lookingForAJobDescription ? ' yes' : ' no'}</li> : ''}
                <Contacts contacts={props.userProfile.contacts}/>
            </div>
        </div>
    )
};
 export default ProfileData;