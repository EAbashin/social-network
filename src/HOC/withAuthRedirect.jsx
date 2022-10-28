import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login"/>
            return <Component {...this.props}/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    };

    return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirectComponent;