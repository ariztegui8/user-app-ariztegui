import React from 'react'
import style from '../app/styles/navbar.module.css'
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
                    <Image src="/images/user.png" layout="fill" objectFit="cover"  alt='profile'/>
                   </div>
                   <p className={style.name}>IGNACIO NUÑEZ</p>
                </div>

                <div className={style.icons}>
                    <MdEmail 
                        className={style.icono}
                        color='#ffffff'
                        size={24}
                    />
                    <IoNotifications 
                          className={style.icono}
                          color='#ffffff'
                          size={24}
                    />
                    <IoMdMore 
                          className={style.icono}
                          color='#ffffff'
                          size={24}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar