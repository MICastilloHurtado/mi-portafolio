'use client';
import style from './DownloadCv.module.css';

export default function HandleDescargarHojaDeVida() {
  const descargar = () => {
    const enlace = document.createElement('a');
    enlace.href = '/HojadevidaMarcos(1).pdf'; 
    enlace.download = 'HojadevidaMarcos.pdf';
    enlace.click();
  };

  return (
    <button onClick={descargar} className={style.all}>Descargar Hoja de Vida</button>
  );
}
