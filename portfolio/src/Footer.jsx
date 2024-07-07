import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.main} id="contact">
            <h1>Connect Me Through</h1>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/neeraj-dimili/" target="_blank"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" /></a>
                </li>
                <li >
                    <a href="https://github.com/neeraj-dimili" target="_blank"><img src="https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" /></a>
                </li>
                <li>
                    <a href="mailto:neerajdimili@gmail.com" target="_blank">
                        <img src="https://static-00.iconduck.com/assets.00/gmail-icon-1024x1024-09wrt8am.png" />
                    </a>
                </li>
            </ul>
        </div >
    );
};

export default Footer;
