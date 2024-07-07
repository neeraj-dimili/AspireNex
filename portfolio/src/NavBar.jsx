import styles from "./NavBar.module.scss";

const NavBar = () => {
    const intoView = val => {
        const content = document.getElementById(val);
        content && content.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return <div className={styles.main}>
        <ul>
            <li onClick={() => intoView("projects")}>Projects</li>
            <li onClick={() => intoView("experiences")}>Experiences</li>
            <li onClick={() => intoView("certifications")}>Certifications</li>
            <li onClick={() => intoView("contact")}>Contact Me</li>
        </ul>
    </div >
}

export default NavBar;

