const axios = require('axios');
import style from '../blog/blog.module.css'

const fetchPost = () => {
    return fetch('https://portafolio-back-ld0c.onrender.com/post')
    .then(response => response.json())
}

export default async function GetPost () {
    
    const fetchData = await fetchPost()    

    return(        
    <section className={style.containerMax}>
        <h1 className={style.h1}>Blog</h1>

    {fetchData.allPost.map((post:{title:string, date:string, text:string, id:number}) => {
        const {title, date, text, id} = post
        return(
            <div className={style.blogContainer} key={id}>
                <h1 className={style.title}>{title}</h1>
            <p className={style.p}>{date.slice(0, 10)}</p>
            <p className={style.p2}>{text}</p>
        </div>
        )
    })}        
    </section>
    )
    
}

