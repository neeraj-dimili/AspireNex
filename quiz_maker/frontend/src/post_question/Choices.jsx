import styles from "./Choices.module.scss";
import { useState, useRef } from "react";

const Choices = ({ identifier }) => {

    const ref = useRef(null);

    const [choiceIds, setChoiceIds] = useState([Math.floor(Math.random()*100000)]);

    const removeInputHandler = (a) => {
        Array.from(ref.current.children).forEach(m =>  {        
            if (+m.firstChild.getAttribute('id') === a) m.remove();
        });
    }
    
    const addChoiceHandler = () => setChoiceIds(prev => [...prev, Math.floor(Math.random()*100000)])

    return (<div className={styles.main}>
        <div ref={ref}>
            {choiceIds.map(a => <div key={a} className={styles.choice}>
                <input type="text" placeholder={identifier} id={a}/>
                <div onClick={() => removeInputHandler(a)}><span className="material-symbols-outlined">
                    cancel
                </span></div>
            </div>)
            }
        </div>

        <div className={styles.add} onClick={addChoiceHandler} >
            <span className="material-symbols-outlined">
                add_circle
            </span>
        </div>
    </div >)
}

export default Choices;