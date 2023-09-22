import style from './blog.module.css'

export default function Blog (){
    return(
        <section className={style.containerMax}>
            <h1 className={style.h1}>Blog</h1>
            <div className={style.blogContainer}>
                <h1 className={style.title}>titulo de mi blog</h1>
                <p className={style.p}>Fecha del comentario</p>
                <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nulla possimus accusamus eaque voluptatem veniam. Facere repudiandae numquam, ratione, voluptate deleniti dolorum dolor itaque, repellendus saepe hic eaque autem? Ex!</p>
            </div>
            <div className={style.blogContainer}>
                <h1 className={style.title}>titulo de mi blog</h1>
                <p className={style.p}>Fecha del comentario</p>
                <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nulla possimus accusamus eaque voluptatem veniam. Facere repudiandae numquam, ratione, voluptate deleniti dolorum dolor itaque, repellendus saepe hic eaque autem? Ex!</p>
            </div>
            <div className={style.blogContainer}>
                <h1 className={style.title}>titulo de mi blog</h1>
                <p className={style.p}>Fecha del comentario</p>
                <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nulla possimus accusamus eaque voluptatem veniam. Facere repudiandae numquam, ratione, voluptate deleniti dolorum dolor itaque, repellendus saepe hic eaque autem? Ex!</p>
            </div>
        </section>
    )
}

