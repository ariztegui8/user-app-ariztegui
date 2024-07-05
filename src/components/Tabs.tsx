import React from 'react'
import style from '../app/styles/tabs.module.css'
import { FiSearch } from "react-icons/fi";

type TabsProps = {
    changeTabs: (tab: string) => void
    tabs: string
}

const Tabs = ({changeTabs, tabs} : TabsProps) => {


    return (
        <div className={style.box}>
            <div className={style.container}>
                <div className={style.tabs}>
                    <div className={`${tabs === 'sobreMi' ? style.tab_btn_active : style.tab_btn}`}>
                        <p onClick={()=> changeTabs('sobreMi')} className={`${tabs === 'sobreMi' ? style.tab_title_active : style.tab_title}`}>Sobre mí</p>
                    </div>
                    <div className={`${tabs === 'intereses' ? style.tab_btn_active : style.tab_btn}`}>
                        <p onClick={()=> changeTabs('intereses')} className={`${tabs === 'intereses' ? style.tab_title_active : style.tab_title}`}>Intereses</p>
                    </div>
                    <div className={`${tabs === 'contacto' ? style.tab_btn_active : style.tab_btn}`}>
                        <p onClick={()=> changeTabs('contacto')} className={`${tabs === 'contacto' ? style.tab_title_active : style.tab_title}`}>Contacto</p>
                    </div>
                </div>

                <div className={style.input_group}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className={style.search_input}
                    />
                    <FiSearch 
                        className={style.search_icon}
                        color='#94A3B8'
                        size={18}
                    />
                </div>
            </div>
        </div>
    )
}

export default Tabs