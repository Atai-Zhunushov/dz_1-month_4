import React, {useState} from 'react';
import styles from './component.module.css'
const Component = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    const start = () => {
        setIsRunning(true)
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
        setIsRunning(interval)
    }

    const stop = () => {
        clearInterval(isRunning)
        setIsRunning(false)
    }

    const reset = () => {
        setTime(0)
        clearInterval(isRunning)
        setIsRunning(false)
    }

    return (
        <div className={styles.container}>
            <div>Time: {time} seconds</div>
            <button onClick={isRunning ? stop : start}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Component;