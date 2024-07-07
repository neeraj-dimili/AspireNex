import PostQuestionForm from "./PostQuestionForm";
import styles from "./PostQuestions.module.scss";
import { useState } from "react";
import { useRef } from "react";
import PostSubmission from "../post_submission/PostSubmission";

const PostQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const questionRef = useRef(null);
    const [warning, setWarning] = useState('');
    const [submission, setSubmission] = useState(false);

    const addQuestionHandler = () => {
        const question = Array.from(questionRef.current.children).filter(child => child.tagName === "INPUT")[0].value;
        
        if(question.trim() === '') {
            setWarning("question can't be empty");
            return null;
        } else if(questions.length > 0 && question === questions[questions.length - 1].question){
            setWarning("same question cant be repeated multiple times");
            return null;
        }
        else{
            if(warning != '') setWarning('');
            const choicesElement = Array.from(questionRef.current.children).filter(child => child.tagName === "DIV")[0];
            const rightChoices = Array.from(choicesElement.children[0].querySelectorAll('input')).map(i => i.value);
            const wrongChoices = Array.from(choicesElement.children[1].querySelectorAll('input')).map(i => i.value);
            const res = {question, rightChoices, wrongChoices}
            setQuestions(prev => [...prev, res]);
            return res;
        }
    }

    const submitQuestionsHandler = async () => {
        const res = addQuestionHandler();
        var exisitingQuestions = require('../questions.json');
        if(questions.length === 0 && res === null) return;
        exisitingQuestions.push(...questions);
        if(res && res.question.trim() !== '') exisitingQuestions.push(res);
        const request = new Request("http://localhost:5500/submit", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(exisitingQuestions, null, 2),
                        });

        const response = await fetch(request);
        if(+response.status === 200){
            setSubmission(true);
        }
    }

    return <div className={styles.main}>
        {!submission && <div className={styles.bar}>
            <div>{warning}</div>
            <button onClick={addQuestionHandler}>Add Question</button>
        </div>}

        {!submission && Array(questions.length + 1).fill("").map((_, idx) => < PostQuestionForm id={idx + 1} key={idx} ref={questionRef}/>)}
        {!submission && <button onClick={submitQuestionsHandler}>post</button>}
        {submission && <PostSubmission message="thanks for your contribution" redirectionUrl="/attempt-quiz" buttonText="attempt quiz"/>}
    </div >
}

export default PostQuestions;
