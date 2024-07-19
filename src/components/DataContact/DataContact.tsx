import React from 'react'
import style from './dataContact.module.css'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const DataContact = () => {
  return (
    <div className={style.box_dataContact}>
      <p className={style.box_dataContact_parraf}>Información de contacto</p>
      <hr className={style.hr_color} />

      <div className={style.description_cont}>
        <div className={style.contact_flex}>
          <div className={style.contact_flex_item}>
            <HiOutlineMailOpen
              color='#85C88A'
              size={20}
            />
            <p className={style.contact_flex_itemObj}>E-mail</p>
          </div>
          <p className={style.contact_flex_itemValor}>nachonuñez@gmail.com</p>
        </div>

        <div className={style.contact_flex}>
          <div className={style.contact_flex_item}>
            <FaPhoneAlt
              color='#85C88A'
              size={20}
            />
            <p className={style.contact_flex_itemObj}>Teléfono</p>
          </div>
          <p className={style.contact_flex_itemValor}>+15 225 3659 222</p>
        </div>

        <div className={style.modifiqued}>
          <div className={style.contact_flex_item}>
            <AiOutlineHome
              color='#85C88A'
              size={20}
            />
            <p className={style.contact_flex_itemObj}>Dirección</p>
          </div>
          <p className={style.contact_flex_itemValor}>Lisandro de la Torre 7, Buenos Aires</p>
        </div>


      </div>
    </div>
  )
}

export default DataContact