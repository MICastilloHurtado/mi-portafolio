import style from './feedBack.module.css'

export default function Feedback(){
    return(
        <section className={style.containerMax}>
            <h1>
            Deja tu feedBack y dime que piensas que puedo mejorar o aprender para ser mejor  🫶 
            </h1>
            <div className={style.inputContainer}>
                <span>Nombre</span>
                <input/>
            </div>
            <div className={style.inputContainer}>
                <span>texto</span>
                <input/>
            </div>
            <button>Enviar</button>
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