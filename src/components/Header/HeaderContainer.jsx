import Header from "./Header";
import {deleteAuthLoginThunkCreator} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};
const mapDispatchToProps = {
    deleteAuthLoginThunkCreator
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;