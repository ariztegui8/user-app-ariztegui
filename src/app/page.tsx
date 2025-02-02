'use client'
import React, { useState } from 'react'
import style from '../app/styles/page.module.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import { CiEdit } from 'react-icons/ci'
import ColumnIcons from '@/components/ColumnIcons/ColumnIcons'
import Formulario from '@/components/Formulario/Formulario'
import Intereses from '@/components/Intereses/Intereses'
import SobreMi from '@/components/SobreMi/SobreMi'
import Tabs from '@/components/Tabs/Tabs'
import UserChannels from '@/components/UserChannels/UserChannels'

const Home = () => {

  const [menuColumn, setMenuColumn] = useState(false)
  const [tabs, setTabs] = useState('sobreMi')

  const changeTabs = (tab: string) => {
    setTabs(tab)
  }

  const handleMenuColumn = () => {
    setMenuColumn(!menuColumn)
  }

  return (
    <div>
      <div className={style.box_page}>
        <ColumnIcons
          handleMenuColumn={handleMenuColumn}
          menuColumn={menuColumn}
        />
        <div className={style.box_items}>
          <Tabs
            changeTabs={changeTabs}
            tabs={tabs}
          />
          <div>
            {tabs === 'sobreMi' &&
              <div className={style.box_tabs_flex}>
                <SobreMi />
                <div className={style.box_tabs_channels}>
                  <UserChannels />
                </div>
              </div>
            }

            {tabs === 'intereses' &&
              <div className={style.box_tabs}>
                <div className={style.box_page_intereses}>
                  <p className={style.box_page_inter_title}>Mis intereses</p>
                  <div className={style.box_page_int_btn}>
                    <CiEdit
                      size={22}
                      color='#ffffff'
                    />
                    <p className={style.box_page_int_btn_title}>Editar intereses</p>
                  </div>
                </div>
                <Intereses />
              </div>
            }

            {tabs === 'contacto' &&
              <div className={style.box_tabs_white}>
                <Formulario />
              </div>
            }
          </div>
        </div>

        <ToastContainer />

      </div>

    </div>
  )
}

export default Home