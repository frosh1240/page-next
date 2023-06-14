import REACT from 'react'
import Image from 'next/image'
import styles from './page.module.css'


const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Let's Keep in Touch</div>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" fill={true} className={styles.image} alt="" />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='name' className={styles.input} />
                    <input type="text" placeholder='email' className={styles.input} />
                    <textarea className={styles.textArea} placeholder="message" cols="30" rows="10"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact