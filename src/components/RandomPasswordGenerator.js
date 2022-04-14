import React, { useEffect, useState } from 'react';

import { HiClipboardCopy } from "react-icons/hi";

import styles from "./RandomPasswordGenerator.module.css";

import { generateRandomPassword } from '../helper/functions';

const RandomPasswordGenerator = () => {

    const [data, setData] = useState({
        length: 10,
        upper: true,
        lower: true,
        numbers: true,
        symbols: true,
    });

    const [password, setPassword] = useState("");

    const clickHandler = () => {
        setPassword(generateRandomPassword(
            data.length, 
            data.upper,
            data.lower,
            data.numbers,
            data.symbols
        ));
    };


    return (
        <>
            <div className={styles.container}>
                <div className={styles.generator}>
                    <h1>Random Password Generator</h1>

                    <div className={styles.generatorInput}>
                        <span>{password}</span>
                        <span><HiClipboardCopy /></span>
                    </div>

                    <div className={styles.conditionals}>
                        <span>
                            <div>Password Length</div>
                            <input type="number" min={3} max={20} value={data.length} onChange={event => setData({...data, length: +event.target.value})} />
                        </span>
                        <hr />
                        <span>
                            <div>Include Uppercase Letters</div>
                            <input type="checkbox" checked={data.upper} onChange={event => setData({...data, upper: event.target.checked})} />
                        </span>
                        <hr />
                        <span>
                            <div>Include Lowercase Letter</div>
                            <input type="checkbox" checked={data.lower} onChange={event => setData({...data, lower: event.target.checked})} />
                        </span>
                        <hr />
                        <span>
                            <div>Include Numbers</div>
                            <input type="checkbox" checked={data.numbers} onChange={event => setData({...data, numbers: event.target.checked})} />
                        </span>
                        <hr />
                        <span>
                            <div>Include Symbols</div>
                            <input type="checkbox" checked={data.symbols} onChange={event => setData({...data, symbols: event.target.checked})} />
                        </span>
                    </div>

                    <button onClick={clickHandler}>Generate Password</button>

                    <p>Text Copied To Clipboard!</p>
                </div>
            </div>
        </>
    );
};

export default RandomPasswordGenerator;