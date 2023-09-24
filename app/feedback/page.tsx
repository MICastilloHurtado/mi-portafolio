import style from './feedBack.module.css'

export default function Feedback(){
    return(
        <section className={style.containerMax}>
            <h1>
            Por favor, comparte tu feedback y sugiere qué puedo mejorar o aprender para crecer.  🫶 
            </h1>
            <div className={style.inputContainer}>
                <span className={style.spam}>Nombre</span>
                <input className={style.input1}/>
            </div>
            <div className={style.inputContainer1}>
                <span className={style.spam}>texto</span>
                <textarea className={style.input2}/>
            </div>
            <button className={style.all}>Enviar</button>
            <div className={style.feedbackContainer}>
                <h1>Comentarios</h1>
                <div className={style.feedback}>
                    <h1>Julian montez</h1>
                    <p>Fecha de comentario</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur cum dolor, provident ea odio suscipit itaque quam labore quas tempora ipsum impedit possimus animi odit consectetur a eaque repudiandae.</p>
                </div>
                <div className={style.feedback}>
                    <h1>Julian montez</h1>
                    <p>Fecha de comentario</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur cum dolor, provident ea odio suscipit itaque quam labore quas tempora ipsum impedit possimus animi odit consectetur a eaque repudiandae.</p>
                </div>
            </div>
        </section>
    )
}