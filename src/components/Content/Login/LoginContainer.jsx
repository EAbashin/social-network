import {connect} from "react-redux";
import {postAuthLoginThunkCreator} from "../../../redux/reducers/auth-reducer";
import Login from "./Login";

const
    mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            captcha: state.auth.captcha
        };
    },
    mapDispatchToProps = {
        postAuthLoginThunkCreator
    };

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;