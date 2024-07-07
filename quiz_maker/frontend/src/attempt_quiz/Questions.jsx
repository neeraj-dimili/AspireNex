import styles from "./Questions.module.scss";
import questions from "../questions.json";
import Question from "./Quesion";
import { useRef, useState } from "react";
import {Link} from "react-router-dom";
import { shuffleArray } from "../Utils";
import PostSubmission from "../post_submission/PostSubmission";


const Questions = () => {

    const quizQuestions = shuffleArray(questions).slice(0, 11);

    const questionsRef = useRef(null);
    const [acheivedMarks, setAcheivedMarks] = useState(-1);

    const submitHandler = () => {
        var attemptedCorrectChoices = [];
        var expectedCorrectChoices = quizQuestions.map(ques => ques.rightChoices);
        var marks = Array(expectedCorrectChoices.length).fill(1);
        const resultsAns = Array.from(Array.from(questionsRef.current.children).filter(child => child.className.includes('main')).map(result => result.children[1]));
        resultsAns.forEach(res => {
            var answers = [];
            Array.from(res.children).forEach(choice => {
                if(choice.children[0].checked){
                    answers.push(choice.children[1].innerText);
                }
            });
            attemptedCorrectChoices.push(answers);
        });

        for(var i=0; i<expectedCorrectChoices.length; i++){
            if(attemptedCorrectChoices[i].length != expectedCorrectChoices[i].length) marks[i] = 0;
        
            for(var j=0; j<attemptedCorrectChoices[i].length; j++){
                if(!expectedCorrectChoices[i].includes(attemptedCorrectChoices[i][j]) || !attemptedCorrectChoices[i].includes(expectedCorrectChoices[i][j])){
                    marks[i] = 0;
                    break;
                }
            }
        }
        
        const score = marks.filter(mark => mark === 1).length;

        setAcheivedMarks(score);
    }


    return <>{acheivedMarks >= 0 ? <PostSubmission message={"yayy!! you scored " + acheivedMarks + " out of 10"} redirectionUrl="/post-questions" buttonText="Post New Questions"/>: <div className={styles.main} ref={questionsRef}>
        {quizQuestions.map(question => <Question key={question.question} question={question.question} rightChoices={question.rightChoices} wrongChoices={question.wrongChoices}/>)}
        <button onClick={submitHandler}>submit</button></div>
        }</>
}

export default Questions;
