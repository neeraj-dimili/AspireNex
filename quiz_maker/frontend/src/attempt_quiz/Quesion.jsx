import styles from "./Question.module.scss";
import React from "react";
import { shuffleArray } from "../Utils";

const Question = props => {

    const options = shuffleArray([...props.rightChoices, ...props.wrongChoices]);
    const singleType = props.rightChoices.length <= 1;    
    
    return <div className={styles.main}>
        <h1>{props.question} <span>({singleType? 'select only one option': 'select multiple options'})</span></h1>
        
        <div className={styles.options}>
            {options.map(option => <label key={option}>
                <input type={singleType ? "radio": "checkbox"} id={option} value={option} name={props.question}/>
                <div>{option}</div>
            </label>)}
        </div>
    </div>
}

export default Question;
