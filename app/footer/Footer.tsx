import twiter from '../../icons/Twitter X (1).png'
import instagram from '../../icons/Instagram New 2022 Line.png'
import linkedlin from '../../icons/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587_72.png'
import github from '../../icons/logotipo-de-github.png'
import style from './footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={style.containerMax}>
            <Link href='https://twitter.com/Marcos_mich02' target='_blank'>
            <img src={twiter.src} className={style.logo}/>
            </Link>
            <Link href='https://www.instagram.com/marcos_bpro/' target='_blank'>
            <img src={instagram.src} className={style.logo}/>
            </Link>
            <Link href='https://github.com/MICastilloHurtado' target='_blank'>
            <img src={github.src} className={style.logo1}/>
            </Link>
            <Link href='https://www.linkedin.com/in/marcos-castillo-295585268/' target='_blank'>
            <img src={linkedlin.src} className={style.logo}/>
            </Link>
        </footer>
    )
}