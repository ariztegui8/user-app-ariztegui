import React from 'react'
import style from '../app/styles/intereses.module.css'
import Image from 'next/image'

const Intereses = () => {
    return (
        <div className={style.container_inter}>
            <div className={style.box_title_inter}>
                <p className={style.box_title_title_inter}>PASATIEMPOS Y AFICONES</p>
            </div>

            <div className={style.box_icons_inter}>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/dibujar.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Dibujar</p>
                </div>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/nadar.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Nadar</p>
                </div>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/viajar.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Viajar</p>
                </div>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/leer.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Leer</p>
                </div>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/animales.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Animales</p>
                </div>
                <div className={style.box_icons_inter_flex}>
                    <Image width={60} height={60} src="/images/mate.png" alt='icon' />
                    <p className={style.box_icons_inter_title}>Mate</p>
                </div>
            </div>

            <div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Innovación tecnológica:</span> Me apasiona explorar y aplicar las últimas tendencias en tecnología para desarrollar soluciones novedosas y eficaces.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}> Desarrollo de software:</span> Disfruto del proceso de creación de software, desde la conceptualización hasta la implementación y optimización.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Ciberseguridad:</span> Me interesa profundizar en técnicas y estrategias para proteger sistemas y datos frente a amenazas digitales.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Inteligencia artificial y aprendizaje automático:</span> Estoy fascinado por el potencial de estas tecnologías para transformar industrias y mejorar la toma de decisiones.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Internet de las cosas (IoT):</span> Me entusiasma la interconexión de dispositivos y su impacto en la vida cotidiana y en el ámbito empresarial.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Computación en la nube:</span> Investigo continuamente sobre servicios y arquitecturas en la nube para mejorar la eficiencia y escalabilidad de los sistemas.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Desarrollo personal y profesional:</span>  Me comprometo a un aprendizaje continuo, participando en cursos, talleres y conferencias para mantenerme al día en mi campo.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Colaboración en proyectos de código abierto:</span> Me gusta contribuir a la comunidad tecnológica compartiendo conocimientos y trabajando en proyectos colaborativos.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottomIcons}`}>
                    <Image width={20} height={20} src="/images/icon-green.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Deportes y actividades al aire libre:</span> Valoro el equilibrio entre trabajo y vida personal, y disfruto de actividades como el senderismo, el ciclismo y el fútbol para mantenerme activo y despejar la mente.</p>
                </div>

                <div className={`${style.box_info_flex} ${style.box_marginBottom}`}>
                    <Image width={20} height={20} src="/images/icon-blue.png" alt='icon' />
                    <p className={style.box_info_parrafos}><span className={style.box_info_parrafoTitle}>Lectura:</span> Me gusta leer sobre tecnología, ciencia ficción y desarrollo personal, lo que me ayuda a mantener una perspectiva amplia y creativa.</p>
                </div>

            </div>
        </div>
    )
}

export default Intereses