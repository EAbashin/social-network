import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;