import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Questions from "./attempt_quiz/Questions";
import Login from "./Login";
import PostQuestions from "./post_question/PostQuestions";

const Routes = createBrowserRouter([
    {path: "/", element: <Login/>, children: [
        {path: "/post-questions", element: <PostQuestions/>},
        {path: "/attempt-quiz", element: <Questions/>}
    ]}
])

export default Routes;