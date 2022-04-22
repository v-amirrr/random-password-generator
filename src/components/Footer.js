import React from 'react';

import styles from "./Footer.module.css";

import { VscGithubInverted } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                {/* <span className={styles.footerGitHub}><VscGithubInverted /></span> */}
                <p>MADE WITH <span>❤</span> BY <a href='https://github.com/v-amirrr'>ME</a>.</p>
            </div>
        </>
    );
};

export default Footer;