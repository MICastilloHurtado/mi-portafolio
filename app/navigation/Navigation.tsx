import Link from 'next/link'
import style from './Navigation.module.css'

const Links = [
  {route: '/', label:'Home'},
  {route: '/projects', label: "Proyectos"},
  {route: '/blog', label: "Blog"},
  {route: '/contacto', label: "Contacto"}]

export default function Navigation(){
    return(
        <header>
          <nav>
            <ul className={style.ul}>
              {Links.map(({ route, label }) => (
              <li className={style.li} key={route}>
                <Link href={route} className={style.link}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </header>
    )
}