import styles from "./PostSubmission.module.scss";
import { Link } from "react-router-dom";

const PostSubmission = ({message, redirectionUrl, buttonText}) => {
    return <div className={styles.score}>
    <h1>{message}</h1>
    <Link to={redirectionUrl}>{buttonText}</Link>
</div>
}

export default PostSubmission;
