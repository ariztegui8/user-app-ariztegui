import React from 'react'
import style from '../app/styles/tabs.module.css'

const Tabs = () => {
    return (
        <div className={style.box}>
            <div className={style.container}>
                <div className={style.tabs}>
                    <div className={style.tab_btn}>
                        <p className={style.tab_title}>Sobre mí</p>
                    </div>
                    <div className={style.tab_btn}>
                        <p className={style.tab_title}>Intereses</p>
                    </div>
                    <div className={style.tab_btn}>
                        <p className={style.tab_title}>Contacto</p>
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Buscar..."
                    />
                </div>
            </div>
        </div>
    )
}

export default Tabs