import twiter from '../../icons/Twitter X (1).png'
import instagram from '../../icons/Instagram New 2022 Line.png'
import linkedlin from '../../icons/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587_72.png'
import github from '../../icons/logotipo-de-github.png'
import style from './footer.module.css'

export default function Footer(){
    return(
        <footer className={style.containerMax}>
            <img src={twiter.src} className={style.logo}/>
            <img src={instagram.src} className={style.logo}/>
            <img src={github.src} className={style.logo}/>
            <img src={linkedlin.src} className={style.logo}/>
        </footer>
    )
}