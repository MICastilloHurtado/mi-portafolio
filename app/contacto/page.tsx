import style from './contacto.module.css'
import me from '../../icons/45999__1_-removebg-preview.png'

export default function Contacto () {
    return(
        <section className={style.containerMax}>
            <div className={style.left}>
                <div className={style.div1}>
                <h1>Email</h1>
                <h1 className={style.title}>marcos2679525@gmail.com</h1>
                </div>
                <div>
                <h1>Numero</h1>
                <h1 className={style.title}>+57 3007479326</h1>
                </div>
            </div>
            <div className={style.right}>
                <img src={me.src} className={style.me}/>
            </div>
        </section>
    )
}