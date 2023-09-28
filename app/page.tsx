import style from './Home.module.css'
import photo from '../public/WhatsApp Image 2023-05-21 at 6.38.49 PM.jpeg'
import Link from 'next/link'
import HandleDescargarHojaDeVida from './handles/DownloadCv'
import icon1 from '../icons/icons8-reaccionar-120.png'
import icon2 from '../icons/icons8-redux-144.png'
import icon3 from '../icons/icons8-javascript-144.png'
import icon4 from '../icons/icons8-typescript-144.png'
import icon5 from '../icons/icons8-node-js-144.png'
import icon6 from '../icons/icons8-express-js-160.png'
import icon7 from '../icons/icons8-sql-100.png'
import icon8 from '../icons/sequelize_original_logo_icon_146348.png'
import icon9 from '../icons/file_type_html_icon_130541.png'
import icon10 from '../icons/file_type_css_icon_130661.png'
import icon11 from '../icons/nextjs_icon_132160.png'
import imagen from '../icons/imagen.jpg'
import movies from '../icons/unnamed.webp'
import brujula from '../icons/Brujula-2.jpg'

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
        <h1 className={style.bienvenidos}>Tecnologías</h1>
        <div className={style.iconos}>
          <img src={icon1.src} className={style.icono}/>
          <img src={icon2.src} className={style.icono}/>
          <img src={icon3.src} className={style.icono}/>
          <img src={icon4.src} className={style.icono}/>
          <img src={icon5.src} className={style.icono}/>
          <img src={icon6.src} className={style.icono}/>
          <img src={icon7.src} className={style.icono}/>
          <img src={icon8.src} className={style.icono}/>
          <img src={icon9.src} className={style.icono}/>
          <img src={icon10.src} className={style.icono}/>
          <img src={icon11.src} className={style.icono}/>
        </div>
      </div>
      <div className={style.container3}>
        <div className={style.minicontainer}>
          <p style={{fontSize:'22px', fontFamily:'var(--primary-font)', fontWeight:'700'}}>Publicaciones recientes</p>
        <Link href='/blog'>
          Mirar todos las publicaciones
        </Link>
        </div>
        <div className={style.cajaDeComentarios}>
          <h1 className={style.title}>Prueba de comentarios para mi blog</h1>
          <p className={style.p2}>fecha del comentario</p>
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
            </p>
        </div>
        <div className={style.cajaDeComentarios}>
          <h1 className={style.title}>Prueba de comentarios para mi blog</h1>
          <p className={style.p2}>fecha del comentario</p>
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
          </p>
        </div>
      </div>
      <div className={style.container4}>
      <p style={{fontSize:'22px', fontFamily:'var(--primary-font)', fontWeight:'700', margin:'0 0 40px 0'}}>Proyectos recientes</p>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={movies.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>MoviesPlay</h1>
          <p className={style.p}>24/08/2023</p>
          <p className={style.p2}>Aplicación web full stack para comprar series y películas con un dashboard de administrador (el administador puede activar, desactivar o eliminar peliculas y series, ademas puede ver todas las ventas), carrito de compras, autenticacion de terceros, visualicacion de  contenido, uso de localStorage, paginado, filtrados y ordenamientos, barra de busqueda.
          Logros Destacados: Integración de pasarela de pagos con Stripe, dinamismo en la página.
          <br/>
          Enlace: <a href='https://luiggi2092.github.io/MoviePlayFront '>Click aquí</a>

          </p>
        </div>
      </div>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={brujula.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Api Paises</h1>
          <p className={style.p}>13/07/2023</p>
          <p className={style.p2}>Aplicación web full stack para buscar , visualizar, filtrar, y ver que actividades hay en cualquier país del mundo, además dispones de la información turística y territorial de cualquier país que se te venga a la mente, también puedes crear y eliminar tus propias actividades para los países.
          <br/>
Tecnologías Utilizadas: React, Node.js, Express, PostgreSQL y Sequelize.
<br/>
Enlace: <a>Click Aquí</a>


          </p>
        </div>
      </div>

      </div>
    </section>
  )
}
