import styles from "./NavBar.module.scss";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return <div className={styles.main}>
        <NavLink className={({isActive}) => isActive ? styles.active: ""} to="/attempt-quiz">Attempt Quiz</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.active: ""} to="/post-questions">Post Questions</NavLink>
    </div>
}

export default NavBar;