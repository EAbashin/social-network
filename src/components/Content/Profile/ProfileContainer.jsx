import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPost,
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    setUserProfile,
    toggleIsFetching,
    updateNewValueText,
} from "../../../redux/reducers/profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";
import withAuthRedirectComponent from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

const withRouter = (WrappedComponent) => props => {
    const params = useParams();
    return (
        <WrappedComponent {...props} params={params}/>
    );
};

class ProfilePageAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        status: state.profilePage.status,
        id: state.auth.id,
    }
};
const mapDispatchToProps = {
    updateNewValueText,
    addPost: addPost,
    toggleIsFetching,
    setUserProfile,
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
};

const ProfileContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirectComponent
)(ProfilePageAPIComponent);

export default ProfileContainer;