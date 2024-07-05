import React from 'react'
import style from '../app/styles/sobreMi.module.css'
import DataUser from './DataUser'
import DataContact from './DataContact'
import SobreMiUser from './SobreMiUser'
import { CiEdit } from 'react-icons/ci'
import UserChannels from './UserChannels'

const SobreMi = () => {
  return (
    <div className={style.container_sobreMi}>
      <div className={`${style.box_sobreMi} ${style.customScrollbar}`}>
        <div className={style.box_ingeniero}>
          <p className={style.box_ingeniero_title}>Ingeniero informático</p>
          <div className={style.box_btn}>
            <CiEdit
              size={22}
              color='#ffffff'
            />
            <p className={style.box_btn_title}>Editar perfil</p>
          </div>
        </div>
        <div className={style.box_sobreMi_boxsFlex}>
          <DataUser />
          <DataContact />
        </div>
        <div>
          <SobreMiUser />
        </div>

        <div className={style.channels_hidden}>
          <UserChannels />
        </div>
      </div>
    </div>
  )
}

export default SobreMi