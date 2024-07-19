import React from 'react'
import style from './navbar.module.css'
import { MdEmail } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navbar_padre}>
                <div className={style.logo}>
                    <div className={style.image_rounded}>
                        <Image src="/images/user.png" priority fill sizes="40px" style={{ objectFit: 'cover' }}  alt='profile' />
                    </div>
                    <p className={style.name}>IGNACIO NUÑEZ</p>
                </div>

                <div className={style.icons}>
                    <div className={style.box_icons}>
                        <MdEmail
                            className={style.icono}
                            color='#ffffff'
                            size={24}
                        />
                    </div>
                    <div className={style.box_icons}>
                        <IoNotifications
                            className={style.icono}
                            color='#ffffff'
                            size={24}
                        />
                    </div>
                    <div >
                        <IoMdMore
                            className={style.icono}
                            color='#ffffff'
                            size={24}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar