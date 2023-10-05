'use client'
import style from '../feedback/feedBack.module.css'
import { useState, ChangeEvent, FormEvent } from 'react'
import postFetch from './fetchPost'
import Swal from 'sweetalert2'


interface formData {
    name:string,
    text:string
}

export default function FeedbackForm (){

    const [form, setForm] = useState<formData>({name:'', text:''})

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          await postFetch(form);
          Swal.fire({
            icon: 'success',
            title: 'Gracias!',
            text: 'Ha ocurrido un error'
          }
          )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error'
              })
        }
      };

    return(
        <div className={style.div}>
            <form onSubmit={handleSubmit}>
            <div className={style.inputContainer} >
                <span className={style.spam}>Nombre</span>
                <input className={style.input1} type='text' name='name' value={form.name} onChange={handleChange}/>
            </div>
            <div className={style.inputContainer1}>
                <span className={style.spam}>texto</span>
                <textarea className={style.input2} name='text' value={form.text} onChange={handleChange}/>
            </div>
            <button className={style.all} type='submit'>Enviar</button>
            </form>
            </div>
    )
}