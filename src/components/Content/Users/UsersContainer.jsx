import {
    upCurrentPage,
    setCurrentPage,
    getUsersThunkCreator,
    followThunkCreator
} from "../../../redux/reducers/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getPortionSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../../redux/reducers/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount = () => {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize, 'set', true);
    }
    onShowMoreUsers = () => {
        this.props.getUsersThunkCreator(this.props.currentPage + 1, this.props.pageSize, 'add', false);
        this.props.upCurrentPage(this.props.currentPage);
    }
    onPageChange = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize, 'set', false);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                               totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               portionSize={this.props.portionSize}
                                                               currentPage={this.props.currentPage}
                                                               followingInProgress={this.props.followingInProgress}
                                                               followThunkCreator={this.props.followThunkCreator}
                                                               onShowMoreUsers={this.onShowMoreUsers}
                                                               onPageChange={this.onPageChange}

                />}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }
};
const mapDispatchToProps = {
    setCurrentPage,
    upCurrentPage,
    getUsersThunkCreator,
    followThunkCreator
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;