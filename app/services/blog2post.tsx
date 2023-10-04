import style from '../Home.module.css'
import Link from 'next/link'

const fetchPost = () => {
    return fetch('https://portafolio-back-ld0c.onrender.com/post')
    .then(response => response.json())
}

export default async function GetPost2 () {
    
    const fetchData = await fetchPost()    

    return( 
        <div className={style.container3}>
        <div className={style.minicontainer}>
          <p style={{fontSize:'22px', fontFamily:'var(--primary-font)', fontWeight:'700'}}>Publicaciones recientes</p>
        <Link href='/blog'>
          Mirar todos las publicaciones
        </Link>
        </div>
        {fetchData.allPost.slice(0, 2).map((post:{title:string, date:string, text:string, id:number}) => {
        const {title, date, text, id} = post
        return(
            <div className={style.cajaDeComentarios} key={id}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.p2}>{date.slice(0, 10)}</p>
            <p className={style.p2}>{text}</p>
          </div>
        )
    })}   
      </div>

         
    )
    
}