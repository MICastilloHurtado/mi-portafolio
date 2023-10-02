import style from './projects.module.css'
import image from '../../icons/icons8-reaccionar-120.png'
import brujula from '../../icons/Brujula-2.jpg'
import foods from '../../icons/rickAndMorthy.jpg'
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

            <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={foods.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Rick and Morthy api</h1>
          <p className={style.p}>24/06/2023</p>
          <p className={style.p2}>Mi primer proyecto de programacion. Aplicación web full stack que consume la API de Rick and Morty para mostrar información sobre los personajes de la serie y permitir a los usuarios buscar, ver detalles y guardar personajes favoritos en una base de datos, ademas cuenta con formulario de registro y acceso.
<br/>
Tecnologías Utilizadas: React, Node.js, Express, PostgreSQL y Sequelize.
<br/>
Enlace: <a>Click aquí</a>

          </p>
        </div>
      </div>
            
      
        </section>
    )
}