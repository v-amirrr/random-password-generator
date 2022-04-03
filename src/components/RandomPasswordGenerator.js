import React from 'react';

import {HiClipboardCopy} from "react-icons/hi";

import styles from "./RandomPasswordGenerator.module.css";

const RandomPasswordGenerator = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.generator}>
                    <h1>Random Password Generator</h1>

                    <div className={styles.generatorInput}>
                        <p>password</p>
                        <span><HiClipboardCopy /></span>
                    </div>

                    <div className={styles.conditionals}>
                        <span>
                            <div>Password Length</div>
                            <input type="number" />
                        </span>
                        <hr />
                        <span>
                            <div>Include Uppercase Letters</div>
                            <input type="checkbox" />
                        </span>
                        <hr />
                        <span>
                            <div>Include Lowercase Letter</div>
                            <input type="checkbox" />
                        </span>
                        <hr />
                        <span>
                            <div>Include numbers</div>
                            <input type="checkbox" />
                        </span>
                        <hr />
                        <span>
                            <div>Include Symbols</div>
                            <input type="checkbox" />
                        </span>
                    </div>

                    <button>Generate Password</button>

                    <p>Text Copied To Clipboard!</p>
                </div>
            </div>
        </>
    );
};

export default RandomPasswordGenerator;