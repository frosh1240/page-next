import REACT from 'react'
import style from './page.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
            ©2023 | All rights reserved.
            </div>
            <div>
                <div className={style.social}>
                    <Image src="/1.png" className={style.icon} width={20} height={20} alt="facebook" />
                    <Image src="/2.png" className={style.icon} width={20} height={20} alt="instagram" />
                    <Image src="/5.png" className={style.icon} width={20} height={20} alt="github" />
                </div>
                
            </div>
        </div>
    )
}

export default Footer