import style from '../feedback/feedBack.module.css'

export default function FeedbackForm (){
    return(
        <div className={style.div}>
            <div className={style.inputContainer}>
                <span className={style.spam}>Nombre</span>
                <input className={style.input1}/>
            </div>
            <div className={style.inputContainer1}>
                <span className={style.spam}>texto</span>
                <textarea className={style.input2}/>
            </div>
            <button className={style.all}>Enviar</button>
            </div>
    )
}