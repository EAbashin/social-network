import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.menu}>
                <li className={s.item}><NavLink to="/profile" className = { navData => navData.isActive ? s.active : '' }>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/messages" className = { navData => navData.isActive ? s.active : '' }>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/news" className = { navData => navData.isActive ? s.active : '' }>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" className = { navData => navData.isActive ? s.active : '' }>Music</NavLink></li>
                <li className={s.item}><NavLink to="/users" className = { navData => navData.isActive ? s.active : '' }>Users</NavLink></li>
                <li className={s.item}><NavLink to="/settings" className = { navData => navData.isActive ? s.active : '' }>Settings</NavLink></li>
            </ul>
            <Friends friends={props.navbar.friends}/>
        </nav>
    )
}

export default Navbar;