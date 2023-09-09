import style from './Home.module.css'
import photo from '../public/WhatsApp Image 2023-05-21 at 6.38.49 PM.jpeg'
import HandleDescargarHojaDeVida from './handles/DownloadCv'

export default function Home() { 

  return (
    <section>
      <div className={style.container1}>
        <div className={style.div1}>
        <img src={photo.src} alt='Imagen' className={style.imagen}/>
        </div>
        <div className={style.div2}>
        <h1 className={style.bienvenidos}>Bienvenidos, yo soy Marcos y soy programador full stack.</h1>
        <p className={style.p1}>Mi nombre es Marcos Castillo, tengo 22 años y soy desarrollador web Full Stack.
         Me gusta mucho programar, y me gustaría ser parte de un equipo de trabajo ágil y dinámico. Actualmente,
         soy graduado de Henry y estoy en búsqueda laboral. Échale un vistazo a mis proyectos.
        </p>
        <HandleDescargarHojaDeVida/>
        </div>
      </div>
      <div className={style.container2}>
        <h1>Esta es el Segundp espacio</h1>
      </div>
      <div className={style.container3}>
        <h1>Esta es el tercer espacio</h1>
      </div>
    </section>
  )
}
