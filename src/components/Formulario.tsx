import React, { useState } from 'react'
import style from '../app/styles/formulario.module.css'
import Image from 'next/image'
import { toast } from 'react-toastify'

const Formulario = () => {

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    })
    const [error, setError] = useState(false)

    const { nombre, apellido, email, telefono, mensaje } = form

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        toast.success('Tu mensaje se ha enviado correctamente', {
            type: 'success', autoClose: 3000
        })

        setForm({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            mensaje: ''
        })
    }

    return (
        <div className={style.contenedor}>
            <p className={style.form_title}>¡Ponte en contacto conmigo!</p>
            <p className={style.form_subtitle}>Me alegra que quieras ponerte en contacto. Ya sea que tengas preguntas, proyectos en mente, oportunidades de colaboración o simplemente desees conversar sobre tecnología, estaré encantado de escuchar de ti. Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.</p>

            <form onSubmit={handleFormSubmit} className={style.form_container}>
                <div className={style.form_flex}>
                    <div className={style.form_box_input}>
                        <p className={style.form_box_input_title}>Nombre<span className={style.span_color}>*</span></p>
                        <input type="text"
                            className={style.form_input}
                            name='nombre'
                            value={nombre}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className={style.form_box_input}>
                        <p className={style.form_box_input_title}>Apellido<span className={style.span_color}>*</span></p>
                        <input type="text"
                            className={style.form_input}
                            name='apellido'
                            value={apellido}
                            onChange={handleFormChange}
                        />
                    </div>
                </div>
                <div className={style.form_flex}>
                    <div className={style.form_box_input}>
                        <p className={style.form_box_input_title}>Email<span className={style.span_color}>*</span></p>
                        <input type="email"
                            className={style.form_input}
                            name='email'
                            value={email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className={style.form_box_input}>
                        <p className={style.form_box_input_title}>Teléfono</p>
                        <input type="tel"
                            className={style.form_input}
                            name='telefono'
                            value={telefono}
                            onChange={handleFormChange}
                        />
                    </div>
                </div>
                <div className={`${style.mb}`}>
                    <p className={style.form_box_input_title}>Mensaje<span className={style.span_color}>*</span></p>
                    <textarea
                        className={`${style.form_input} ${style.form_w_100}`}
                        rows={5}
                        name='mensaje'
                        value={mensaje}
                        onChange={handleFormChange}
                    >

                    </textarea>
                </div>

                {error && <p className={style.form_error}>Todos los campos son obligatorios</p>}

                <div className={style.form_box_btn}>
                    <button type='submit' className={style.form_btn}>Enviar</button>
                </div>
            </form>

            {/* <Image className={style.imgForm} src="/images/form-send.png" width={196} height={160} alt='img-form'/> */}
        </div>
    )
}

export default Formulario