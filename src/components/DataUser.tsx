import React from 'react'
import style from '../app/styles/dataUser.module.css'
import { PiClipboardTextBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";


const DataUser = () => {
    return (
        <div className={style.box_dataUser}>
            <p className={style.box_dataUser_parraf}>Datos personales</p>
            <hr className={style.hr_color} />

            <div className={style.description}>
                <div className={style.user_flex}>
                    <div className={style.user_flex_item}>
                        <PiClipboardTextBold
                            color='#85C88A'
                            size={20}
                        />
                        <p className={style.user_flex_itemObj}>Nombre</p>
                    </div>
                    <p className={style.user_flex_itemValorModif}>Ignacio Nuñez</p>
                </div>

                <div className={style.user_flex}>
                    <div className={style.user_flex_item}>
                        <IoCalendarOutline
                            color='#85C88A'
                            size={20}
                        />
                        <p className={style.user_flex_itemObj}>Fecha de nacimiento</p>
                    </div>
                    <p className={style.user_flex_itemValor}>15 de Enero 1986</p>
                </div>

                <div className={style.user_flex_mod}>
                    <div className={style.user_flex_item}>
                        <FaPassport
                            color='#85C88A'
                            size={20}
                        />
                        <p className={style.user_flex_itemObj}>Nacionalidad</p>
                    </div>
                    <p className={style.user_flex_itemValor}>Argentino</p>
                </div>


            </div>
        </div>
    )
}

export default DataUser