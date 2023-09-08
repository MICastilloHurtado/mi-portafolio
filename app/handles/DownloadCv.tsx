'use client'
import style from './DownloadCv.module.css'

export default function HandleDescargarHojaDeVida (){

    const descargar = () => {
        alert('descargado')
    }

    return (
    <button onClick={descargar} className={style.all}>Descargar Hoja de Vida</button>
    )
}