'use client'
import style from './DownloadCv.module.css'


export default function HandleDescargarHojaDeVida (){

    const descargar = () => {
        const enlace = document.createElement('a');
        enlace.href = '/HojadevidaMarcos(1).pdf'; // Reemplaza con la ruta correcta de tu hoja de vida
        enlace.download = 'HojadevidaMarcos.pdf'; // Nombre del archivo que se descargará
        enlace.click();
    }

    return (
    <button onClick={descargar} className={style.all}>Descargar Hoja de Vida</button>
    )
}