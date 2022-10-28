import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userIsNotPhoto from '../../../../assets/img/user.png';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return (
            <Preloader isFetching={true}/>
        )
    }
    return (
        <div className={s.wrapper}>
            <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userIsNotPhoto}
                 alt="avatar" className={s.avatar}/>
            <div className={s.description}>
                <h3 className={s.fullName}>{props.userProfile.fullName}</h3>
                <ProfileStatusWithHooks status={props.status}
                               updateStatusThunkCreator={props.updateStatusThunkCreator}
                />
                <p className={s.text}>{props.userProfile.aboutMe}</p>
            </div>
        </div>
    )
};

export default ProfileInfo;