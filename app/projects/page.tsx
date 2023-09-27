import style from './projects.module.css'
import image from '../../icons/icons8-reaccionar-120.png'

export default function Projects(){
    return (
        <section className={style.containerMax}>
            <h1 className={style.h1}>Proyectos</h1>
            <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={image.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Proyecto foods</h1>
          <p className={style.p}>fecha del projecto</p>
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
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={image.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Mi projecto</h1>
          <p className={style.p}>fecha del projecto</p>
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
          </p>
        </div>
      </div>
      <div className={style.projectContainer}>
        <div className={style.contenido}>
          <img src={image.src} className={style.img}/>
        </div>
        <div className={style.contenido}>
          <h1 className={style.title}>Mi projecto</h1>
          <p className={style.p}>fecha del projecto</p>
          <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit, 
            reprehenderit ab porro atque facilis beatae fugiat tenetur, magni nemo, 
            magnam ullam dolorum dolor placeat modi aspernatur quia culpa ducimus!
          </p>
        </div>
      </div>
        </section>
    )
}