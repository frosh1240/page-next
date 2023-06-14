"use client"

import REACT from 'react'
import Links from './interface'
import Link from 'next/link'
import style from './page.module.css'

const Navbar = () => {
    return (
        <div className={style.container}>
            <Link href="/" className={style.logo}>dev</Link>
            <div className={style.links}>
                {
                    Links.map((link) => (
                        <Link key={link.id} href={link.path} className={style.link}>
                            {link.title}
                        </Link>
                    ))
                }
                <button className={style.logout} onClick={() => {
                    console.log('logout')
                }}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar