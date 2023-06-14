import REACT from 'react'
import styles from './page.module.css'
import Button from '@/components/buttons/button'
import Image from 'next/image'

const Category = ({params}) => {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.Item}>
                <div className={styles.content}>
                    <h1>Test</h1>
                    <p>Desc</p>
                    <Button text="See more" url="#" />
                    <div className={styles.imgContainer}>
                        <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category