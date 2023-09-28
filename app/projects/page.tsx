import style from './projects.module.css'
import image from '../../icons/icons8-reaccionar-120.png'
import brujula from '../../icons/Brujula-2.jpg'
import foods from '../../icons/comidas.jpg'
import movies from '../../icons/unnamed.webp'

export default function Projects(){
    return (
        <section className={style.containerMax}>
            <h1 className={style.h1}>Proyectos</h1>
            <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={movies.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>MoviesPlay</h1>
          <p className={style.p}>24/08/2023</p>
          <p className={style.p2}>Aplicación web para comprar series y películas con un dashboard de administrador (el administador puede activar, desactivar o eliminar peliculas y series, ademas puede ver todas las ventas), carrito de compras, visualicacion de  contenido, uso de localStorage, paginado, filtrados y ordenamientos, barra de busqueda.
          Logros Destacados: Integración de pasarela de pagos con Stripe, dinamismo en la página.
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
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
          </p>
        </div>
      </div>

            <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={foods.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Api foods</h1>
          <p className={style.p}>24/06/2023</p>
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
          </p>
        </div>
      </div>
            
      
        </section>
    )
}