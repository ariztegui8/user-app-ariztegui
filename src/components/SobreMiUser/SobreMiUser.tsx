import React from 'react'
import style from './sobreMiUser.module.css'
import { CiEdit } from "react-icons/ci";
import Image from 'next/image';

const SobreMiUser = () => {
    return (
        <div >
            <div className={style.box_title}>
                <p className={style.box_title_title}>Sobre mí</p>
                <CiEdit
                    size={22}
                    color='#323232'
                />
            </div>

            <div className={style.box_info}>
                <p className={`${style.box_info_parrafos} ${style.box_marginBottom}`}>Soy un ingeniero en sistemas apasionado por la tecnología y la innovación. Con una sólida formación académica y más de 5 años de experiencia en el sector, he desarrollado habilidades excepcionales en el diseño, desarrollo y mantenimiento de sistemas de software eficientes y escalables.</p>

                <p className={`${style.box_info_parrafos} ${style.box_marginBottom}`}>Mi enfoque profesional se centra en la resolución de problemas complejos mediante soluciones tecnológicas creativas y efectivas. A lo largo de mi carrera, he trabajado en diversos proyectos que abarcan desde aplicaciones web y móviles hasta sistemas integrados y de automatización, siempre asegurando la calidad y el rendimiento óptimo de los productos entregados.</p>

                <p className={`${style.box_info_parrafos} ${style.box_marginBottom}`}>Además de mis competencias técnicas, me caracterizo por mis cualidades personales que potencian mi desempeño laboral:</p>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Proactividad:</span> Siempre estoy buscando nuevas formas de mejorar procesos y optimizar recursos.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}> Trabajo en equipo:</span>  Creo firmemente en la colaboración y la comunicación efectiva como pilares para el éxito de cualquier proyecto.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Capacidad de adaptación:</span> Me adapto rápidamente a nuevos entornos y tecnologías, lo que me permite estar a la vanguardia de las últimas tendencias del sector.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Resolución de problemas:</span> Mi capacidad analítica me permite abordar y resolver problemas de manera eficiente y creativa.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottom}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Responsabilidad y compromiso:</span>  Me tomo muy en serio mis responsabilidades y siempre cumplo con los plazos y objetivos establecidos.</p>
                </div>

                <p className={style.box_info_parrafoItalic}>Soy una persona curiosa y en constante aprendizaje, lo que me impulsa a mantenerme actualizado y seguir adquiriendo conocimientos en el campo de la ingeniería de sistemas. Estoy entusiasmado por enfrentar nuevos desafíos y contribuir al éxito de proyectos innovadores y significativos.</p>
            </div>
        </div>
    )
}

export default SobreMiUser