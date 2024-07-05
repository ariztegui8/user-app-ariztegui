import React from 'react'
import style from '../app/styles/userChannels.module.css'
import Image from 'next/image'
import { CiEdit } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'

const UserChannels = () => {
    return (
        <div className={style.container_channels}>
            <div className={style.box_title_channels}>
                <p className={style.title_channels}>Inicio / Perfil de usuario</p>
            </div>

            <div>
                <div className={style.box_star}>
                    <Image src="/images/star.png" width={12} height={12} alt='star' />
                    <Image src="/images/star.png" width={12} height={12} alt='star' />
                    <Image src="/images/star.png" width={12} height={12} alt='star' />
                    <Image src="/images/star.png" width={12} height={12} alt='star' />
                    <Image src="/images/star.png" width={12} height={12} alt='star' />
                </div>

                <div className={style.image_user}>
                    <Image className={style.image_user_rounded} src="/images/user.png" layout="fill" objectFit="cover" alt='profile' />
                    <div className={style.image_icon}>
                        <CiEdit
                            size={22}
                            color='#323232'
                        />
                    </div>
                </div>

                <div className={style.box_btn_channels}>
                    <FaPhoneAlt
                        size={18}
                        color='#ffffff'
                    />
                    <p className={style.box_btn_channels_title}>Contactar</p>
                </div>

                <div className={style.box_icons_channels}>
                    <Image src="/images/linkedin.png" width={30} height={30} alt='star' />
                    <Image src="/images/instagram.png" width={30} height={30} alt='star' />
                    <Image src="/images/facebook.png" width={30} height={30} alt='star' />
                    <Image src="/images/email.png" width={30} height={30} alt='star' />
                </div>
            </div>
            <Image className={style.image_contacto} src="/images/contacto.svg" width={158} height={113} alt='star' />
        </div>
    )
}

export default UserChannels