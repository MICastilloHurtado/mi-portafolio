import style from './projects.module.css'
import image from '../../icons/icons8-reaccionar-120.png'

export default function Projects(){
    return (
        <section className={style.containerMax}>
            <h1>Proyectos</h1>
            <div className={style.projectContainer}>
                <img src={image.src} className={style.image}/>
                <h1 className={style.titleProject}>Ejemplo projects</h1>
                <p className={style.p}>FechaDelProject</p>
                <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in aliquam earum perferendis maiores nihil dignissimos maxime iure aut veniam reiciendis, velit hic itaque natus? Molestias ipsam alias architecto recusandae?</p>
            </div>
            <div className={style.projectContainer}>
                <img src={image.src} className={style.image}/>
                <h1 className={style.titleProject}>Ejemplo projects</h1>
                <p className={style.p}>FechaDelProject</p>
                <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in aliquam earum perferendis maiores nihil dignissimos maxime iure aut veniam reiciendis, velit hic itaque natus? Molestias ipsam alias architecto recusandae?</p>
            </div>
            <div className={style.projectContainer}>
                <img src={image.src} className={style.image}/>
                <h1 className={style.titleProject}>Ejemplo projects</h1>
                <p className={style.p}>FechaDelProject</p>
                <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in aliquam earum perferendis maiores nihil dignissimos maxime iure aut veniam reiciendis, velit hic itaque natus? Molestias ipsam alias architecto recusandae?</p>
            </div>
        </section>
    )
}