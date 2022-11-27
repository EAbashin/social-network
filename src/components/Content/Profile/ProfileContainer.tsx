import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    savePhotoThunkCreator,
    setUserProfile,
    toggleIsFetching,
    updateNewValueText, updateProfileThunkCreator, ProfilePageInitialStateType,
} from "../../../redux/reducers/profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";
import withAuthRedirectComponent from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {StateType} from "../../../redux/redux-store";
import {UserProfileType} from "../../../types/types";

type ParamsType = {
    userId: number
}
type PropsType = {
    profilePage: ProfilePageInitialStateType
    params: ParamsType
    id: number
    status: string
    savePhotoThunkCreator: (file: any) => void
    updateStatusThunkCreator: (status: string) => void
    updateProfileThunkCreator: (profile: UserProfileType) => void
    addPost: (newPost: string) => void
    getProfileThunkCreator: (userId: number) => void
    getStatusThunkCreator: (userId: number) => void
    toggleIsFetching: (isToggle: boolean) => void
}
const withRouter = (WrappedComponent: any): React.FC<PropsType> => props => {
    const params = useParams();
    return (
        <WrappedComponent {...props} params={params}/>
    );
};

class ProfilePageAPIComponent extends React.Component<PropsType> {
    refreshProfile() {
        this.props.toggleIsFetching(true);
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.params.userId}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        id: state.auth.id,
    }
};
const mapDispatchToProps = {
    updateNewValueText,
    addPost,
    toggleIsFetching,
    setUserProfile,
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    savePhotoThunkCreator,
    updateProfileThunkCreator
};

const ProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirectComponent
)(ProfilePageAPIComponent);

export default ProfileContainer;