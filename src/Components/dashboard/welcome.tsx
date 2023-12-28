import React from 'react';
import styles from '../../styles/dashboard/welcome.module.scss';

const Welcome = () => {
    const currentDate = new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.cont}>
            <div className={styles.left}>
                <div className={styles.date}>
                    <h1 className={styles.date_text}>{currentDate}</h1>
                </div>
                <div className={styles.title}>
                    <h1 className={styles.title_text}>Welcome back, Mak!</h1>
                </div>
                <div className={styles.subtitle}>
                    <h1 className={styles.subtitle_text}>Always stay updated</h1>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.image}>
                    <img
                        className={styles.image_photo}
                        src="https://cdn.discordapp.com/attachments/1111937693732057098/1185546950775418970/College_Student.png?ex=659001a3&is=657d8ca3&hm=d955f4fe64826aa12c7db4a41b530cc021a845e330aad1caa5b45e02752fbdad&"
                        alt="Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
