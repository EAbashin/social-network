import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userIsNotPhoto from '../../../../assets/img/user.png';
import {useState} from "react";
import ProfileDataForm from "../../common/Forms/ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const
    ProfileInfo = (props) => {
        const [editMode, setEditMode] = useState(false);

        if (!props.userProfile) {
            return (
                <Preloader isFetching={true}/>
            )
        }

        const
            onMainPhotoSelected = (e) => {
                if (e.target.files.length) {
                    props.savePhotoThunkCreator(e.target.files[0])
                }
            };

        return (
            <div className={s.wrapper}>
                <div className={s.avatarWrapper}>
                    <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userIsNotPhoto}
                         alt="avatar" className={s.avatar}/>
                    {props.isOwner &&
                        <label className={s.fileLabel} title={'Change photo'}>
                            <input type={'file'} accept={'.jpg, .jpeg, .png'} onChange={onMainPhotoSelected} className={s.fileInput}/>
                            ...
                        </label>}
                    {props.isOwner &&
                        <span className={s.btnEditProfile}
                              onClick={() => setEditMode(!editMode)}>{editMode ? 'Close editor' : 'Edit profile'}</span>}
                </div>
                {
                    editMode ? <ProfileDataForm {...props} setEditMode={setEditMode}/> : <ProfileData {...props}/>
                }
            </div>

        )
    };

export default ProfileInfo;