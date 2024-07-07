import NavBar from "./nav_bar/NavBar";
import styles from "./Login.module.scss";
import { Outlet, Link, useLocation } from "react-router-dom";

const Login = () => {
    const location = useLocation().pathname.replace("/", "");
    
    return <div className={styles.main}>
        <NavBar/>
        {location === "" && <div className={styles.context}>
            <h1>
                please enter your name here 
            </h1>
            <input type="text"/>
            <Link to="/attempt-quiz">Lets GO</Link>
        </div>}
        <Outlet/>
        </div>
}

export default Login;
