import styles from "./PostQuestionForm.module.scss";
import Choices from "./Choices";
import { forwardRef, useRef } from "react";

const PostQuestionForm = forwardRef(({ id }, ref) => {

    return (<form className={styles.main} ref={ref}>
        <label htmlFor={"question" + id}>Question {id} </label>
        <input type="text" id={"question" + id} placeholder="please input your question here" ref={ref}/>
        <div className={styles.choices}>
            <Choices identifier="right choice" />
            <Choices identifier="wrong choice" />
        </div>
        {/* <button type="submit">get</button> */}
    </form >)
})

export default PostQuestionForm;