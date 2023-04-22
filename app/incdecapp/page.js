'use client'
import React, {useState} from "react";
import styles from "./incdec.module.css"

const page = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count+1);
    }

    const handleDec = () => {
        if (count<=0) {
            setCount(0);
        } else {
            setCount(count-1);
        }
    }

    return ( 
        <div className={styles.maindiv}>
            <div className={styles.div1}>
                <h2>{count}</h2>
                <button onClick={handleInc} className={styles.btn}>INCREMENT</button>
                <button onClick={handleDec} className={styles.btn}>DECREMENT</button>
            </div>
        </div>
     );
}
 
export default page;