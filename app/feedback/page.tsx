import style from './feedBack.module.css'
import FeedbackForm from '../services/feedBackForm'

const fetchComentary = () => {
    return fetch('https://portafolio-back-ld0c.onrender.com/feedback')
    .then(res => res.json())
}

export default async function Feedback(){

    const comentarios = await fetchComentary()

    console.log(comentarios)

    return(
        <section className={style.containerMax}>
            <h1>
            Por favor, comparte tu feedback y sugiere qué puedo mejorar o aprender para crecer.  🫶 
            </h1>

            <FeedbackForm/>


            <div className={style.feedbackContainer}>
                <h1>Comentarios</h1>
            {comentarios.allFeedBacks.map((post:{id:number, name:string, date:string, text:string}) => {
                const {id, name, date, text} = post

                return(
                    <div className={style.feedback} key={id}>
                        <h1  className={style.title}>{name}</h1>
                        <p>{date.slice(0, 10)}</p>
                        <p>{text}</p>
                    </div>
                )
                

            })}                
            </div>
        </section>
    )
}